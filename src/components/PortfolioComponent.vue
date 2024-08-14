<template>
  <div class="row items-center q-gutter-sm q-mt-xl">
    <h2 class="col-shrink">Portfólio</h2>
    <div class="video-background col">
      <video
        ref="videoElement"
        :src="webmSource"
        muted
        playsinline
        loop
      ></video>
    </div>
  </div>
  <div class="full-width"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import laptop from 'src/assets/videos/laptop.webm';

export default defineComponent({
  name: 'PortfolioComponent',
  setup() {
    const webmSource = laptop;
    const videoElement = ref<HTMLVideoElement | null>(null);
    const hasPlayed = ref(false);

    onMounted(() => {
      if (videoElement.value) {
        videoElement.value.playbackRate = 0.7;

        const playVideo = (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasPlayed.value) {
              videoElement.value?.play();
              hasPlayed.value = true;
            }
          });
        };

        const observer = new IntersectionObserver(playVideo, {
          threshold: 0.5,
        });

        observer.observe(videoElement.value);
      }
    });

    return { webmSource, videoElement };
  },
});
</script>

<style src="src/assets/styles/PortfolioComponent.scss" />
