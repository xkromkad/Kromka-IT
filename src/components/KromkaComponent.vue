<template>
  <div class="row full-width q-mt-xl" style="max-width: 1200px" id="kromka">
    <div class="col-md-6 col-12 text-center img-container">
      <q-img
        src="src/assets/images/david.png"
        width="25rem"
        alt="Dávid Kromka - Webový vývojár a softvérový inžinier"
        loading="lazy"
      ></q-img>
    </div>
    <div class="col-md-6 col-12 text-container">
      <h2 class="q-mx-md" style="font-size: 1.7rem; line-height: initial">
        Ahoj!
        <div class="video-background-hello" style="display: inline">
          <video
            ref="videoElement"
            :src="webmSource"
            muted
            playsinline
            aria-label="Video animované privítanie Dávida Kromku"
          ></video>
          Volám sa
        </div>
      </h2>
      <br />
      <h1
        class="main-title"
        style="line-height: initial; font-size: 1.7rem; font-weight: 600"
      >
        Dávid Kromka
      </h1>

      <div class="justify-center text-center q-ma-md">
        <p class="text-weight-medium text-center">
          Špecializujem sa na vývoj moderných
          <span class="quotation-bold k-background">webových aplikácií</span>,
          od ich návrhu až po nasadenie. Pracoval som na viacerých
          <span class="quotation-bold k-background"
            >medzinárodných projektoch</span
          >. Úspešne som absolvoval štúdium na
          <a
            style="color: black"
            href="https://www.fiit.stuba.sk/"
            target="_blank"
            aria-label="Navštívte stránku Fakulty informatiky a informačných technológií"
          >
            Fakulte informatiky a informačných technológií</a
          >
          STU v Bratislave, kde som si osvojil pokročilé technológie a metodiky
          vývoja softvéru. Neustále sa vzdelávam a hľadám nové výzvy, ktoré mi
          umožnia posúvať hranice digitálnych riešení.
        </p>

        <q-btn
          no-caps
          unelevated
          rounded
          aria-label="Viac informácií o mne"
          class="k-background q-mt-md"
        >
          <div>Viac o mne</div>
          <q-icon class="q-ml-sm" size="1.5rem" name="o_expand_circle_down" />
        </q-btn>
        <q-btn
          no-caps
          unelevated
          round
          aria-label="Kontaktujte ma"
          class="k-background q-mt-md q-ml-sm"
          icon="o_mail"
        >
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
