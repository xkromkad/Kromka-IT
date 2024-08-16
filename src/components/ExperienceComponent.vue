<template>
  <div class="row items-center q-gutter-sm">
    <h2 class="col-shrink">Skúsenosti</h2>
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
  <div class="full-width">
    <h3 class="education q-my-sm k-background">Vzdelanie</h3>
    <ul>
      <li style="--accent-color: #41516c">
        <div class="date">2024</div>
        <div class="description">
          <b>Blazor</b> ASP.NET Core Blazor školenie v školiacom stredisku
          <a href="https://www.gopas.sk" target="_blank">GOPAS</a>
        </div>
        <div class="description">
          <b>WinUI 3</b> 3-dňové školenie pod vedením Prof. Veikko Krypczyk z
          nemeckého školiaceho strediska
          <a href="https://www.it-visions.de" target="_blank">IT-Visions</a>
        </div>
        <div class="descr"></div>
      </li>
      <li style="--accent-color: #fbca3e">
        <div class="date">2023</div>
        <div class="description">
          <b>FIIT STU</b> Ukončenie bakalarského stupňa štúdia na
          <a href="https://www.fiit.stuba.sk" target="_blank"
            >Fakulte informatiky a informačných technológií</a
          >
          STU v Bratislave
        </div>
        <div class="description">
          <b>WCAG</b> Interné školenia tvorby bezbarierového webu na
          ministerstve informatizácie Slovenskej republiky
        </div>
        <div class="descr"></div>
      </li>
      <li style="--accent-color: #e24a68">
        <div class="date">2022</div>
        <div class="descr"></div>
      </li>
      <li style="--accent-color: #1b5f8c">
        <div class="date">2021</div>
        <div class="descr"></div>
      </li>
      <li style="--accent-color: #4cadad">
        <div class="date">2020</div>
        <div class="descr"></div>
      </li>
    </ul>
    <h3 class="education q-my-sm k-background">Práca</h3>
    <h3 class="education q-my-sm k-background">Technológie</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import rocket from 'src/assets/videos/rocket.webm';

export default defineComponent({
  name: 'ExperienceComponent',
  setup() {
    const webmSource = rocket;
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

<style src="src/assets/styles/ExperienceComponent.scss" />
