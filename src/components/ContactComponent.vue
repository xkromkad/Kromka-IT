<template>
  <div class="row items-center q-gutter-sm q-mt-xl q-mb-sm" id="contact">
    <h2 class="col-shrink">Kontakt</h2>

    <div class="video-background col">
      <video ref="videoElement" :src="webmSource" muted playsinline></video>
    </div>
  </div>
  <div class="full-width"></div>
  <a href="mailto:david@kromka.it" class="email-link col-shrink q-mb-xl">
    david@kromka.it
  </a>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import contact from 'src/assets/icons/contact.webm';

export default defineComponent({
  name: 'ContactComponent',
  setup() {
    const webmSource = contact;
    const videoElement = ref<HTMLVideoElement | null>(null);
    const hasPlayed = ref(false); // Track if the video has already played

    onMounted(() => {
      if (videoElement.value) {
        videoElement.value.playbackRate = 0.7;

        // Function to handle stopping the video at the 3-second mark
        const stopAtThreeSeconds = () => {
          if (videoElement.value) {
            videoElement.value.currentTime = 2.4;
          }
        };

        // Function to play the video when it enters the viewport
        const playVideo = (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasPlayed.value) {
              videoElement.value?.play();
              hasPlayed.value = true;

              // Once the video ends, stop it at the 3-second mark
              videoElement.value?.addEventListener('ended', stopAtThreeSeconds);
            }
          });
        };

        // Set up the IntersectionObserver
        const observer = new IntersectionObserver(playVideo, {
          threshold: 0.5, // Adjust the threshold as needed
        });

        // Observe the video element
        observer.observe(videoElement.value);
      }
    });

    return { webmSource, videoElement };
  },
});
</script>

<style src="src/assets/styles/ContactComponent.scss" />
