<template>
  <div class="row full-width q-mt-xl" style="max-width: 1200px">
    <div class="col-md-6 col-12 text-center">
      <q-img src="src/assets/images/david.png" width="25rem"></q-img>
    </div>
    <div class="col-md-6 col-12">
      <h3 class="q-mx-md">
        Ahoj!
        <div class="video-background-hello" style="display: inline">
          <video ref="videoElement" :src="webmSource" muted playsinline></video>
          Volám sa
        </div>
        <br />
        <span class="bold">Dávid Kromka</span>
      </h3>
      <div class="justify-center text-center q-ma-md">
        <p class="text-weight-medium text-center">
          Som mladý programátor so zameraním na moderné
          <span class="quotation-bold k-background">webové aplikácie</span>, od
          ich návrhu, vývoj až po nasadenie na serveri. Úspešne som ukončil
          bakalárske štúdium na
          <a
            style="color: black"
            href="https://www.fiit.stuba.sk/"
            target="_blank"
            >Fakulte informatiky a informačných technológiií</a
          >
          STU v Bratislave a pracoval na viacerých medzinárodných projektoch.
        </p>
        <q-btn no-caps unelevated rounded class="k-background q-mt-md">
          <div>Viac o mne</div>
          <q-icon class="q-ml-sm" size="1.5rem" name="o_expand_circle_down" />
        </q-btn>
      </div>
    </div>
  </div>
  <div class="row justify-center full-width q-mt-xl">
    <div
      class="col-12 quote-container q-ma-md q-mt-md"
      style="max-width: 45rem"
    >
      <h3>A moje motto?</h3>
      <div class="quote-box q-pa-md">
        <p class="text-weight-medium text-center">
          "Webová aplikácia je viac než len kód, je to neustále sa meniaci
          dialóg medzi technológiou a ľuďmi."
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import hello from 'src/assets/videos/hello.webm';

export default defineComponent({
  name: 'KromkaComponent',
  setup() {
    const webmSource = hello;
    const videoElement = ref<HTMLVideoElement | null>(null);
    const hasPlayed = ref(false); // Track if the video has already played

    onMounted(() => {
      if (videoElement.value) {
        videoElement.value.playbackRate = 0.7;

        // Function to handle stopping the video at the 3-second mark

        // Function to play the video when it enters the viewport
        const playVideo = (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasPlayed.value) {
              videoElement.value?.play();
              hasPlayed.value = true;
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

<style src="src/assets/styles/KromkaComponent.scss" />
