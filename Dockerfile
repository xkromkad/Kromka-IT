#docker build -t kromka-image .
#docker rm -f kromka-container
#docker run -d --name kromka-container -p 9000:9000 kromka-image
# ----- BUILD STAGE -----
FROM node:20-alpine AS build-stage

# Aliases setup for container folders
ARG SPA_src="."
ARG DIST="/spa"

# Define arguments which can be overridden at build time
ARG API_URL="http://localhost:3000"

# Set the working directory inside the container
WORKDIR ${DIST}

# Copying in two separate steps allows us to take advantage of cached Docker layers.
COPY ${SPA_src}/package*.json ./

# Install dependencies
RUN npm install

# Copy source files inside container
COPY ${SPA_src} .

# Build the SPA
RUN npx @quasar/cli build -m spa

# ----- PRODUCTION STAGE -----
FROM node:20-alpine AS production-stage

# Aliases setup for container folders
ARG DIST="/spa"
ARG SPA="/myapp"

# Define environment variables for HTTP server
ENV HOST="0.0.0.0"
ENV PORT="9000"

# Set working directory
WORKDIR ${SPA}

# Copy build artifacts from the previous stage
COPY --from=build-stage ${DIST}/dist/spa ./

# Copy assets folder from build stage to production stage
COPY --from=build-stage ${DIST}/src/assets ${SPA}/src/assets

# Expose port outside container
EXPOSE ${PORT}

# Install pm2 (or Quasar CLI) for serving the SPA
RUN npm install -g @quasar/cli

# Start server module inside the container
CMD ["quasar", "serve", "--history", "--port", "9000", "--hostname", "0.0.0.0"]

# Add non-root user and set permissions
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN chown -R appuser:appgroup /myapp
USER appuser

# Add health check
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s \
  CMD wget --quiet --tries=1 --spider http://localhost:${PORT}/ || exit 1
