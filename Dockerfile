#docker build -t kromka-image .
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

  # Copy package.json and package-lock.json (if available)
  COPY ${SPA_src}/package*.json ./

  # Install dependencies
  RUN npm install

  # Copy the rest of the source files
  COPY ${SPA_src} .

  # Build the SSR app
  RUN npx @quasar/cli build -m ssr

  # ----- PRODUCTION STAGE -----
  FROM node:20-alpine AS production-stage

  # Aliases setup for container folders
  ARG DIST="/spa"
  ARG SPA="/myapp"

  # Define environment variables for SSR server
  ENV HOST="0.0.0.0"
  ENV PORT="9000"

  # Set working directory
  WORKDIR ${SPA}

  # Copy the node_modules from build stage to production
  COPY --from=build-stage ${DIST}/node_modules ./node_modules

  # Copy build artifacts from the previous stage
  COPY --from=build-stage ${DIST}/dist/ssr ./

  # Expose port outside container
  EXPOSE ${PORT}

  # Start the SSR server inside the container
  CMD ["node", "index.js"]

  # Add non-root user and set permissions
  RUN addgroup -S appgroup && adduser -S appuser -G appgroup
  RUN chown -R appuser:appgroup /myapp
  USER appuser

  # Add health check
  HEALTHCHECK --interval=30s --timeout=30s --start-period=5s \
    CMD wget --quiet --tries=1 --spider http://localhost:${PORT}/ || exit 1
