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
    const portfolioItems = [
      {
        title: 'Sql Injection Lab',
        type: 'Web',
        description:
          'Laboratórium na bezpečné a legálne trénovanie svojich zručností v útokoch SQL Injection.!',
        notes: ['SQL Injection', 'Informačná bezpečnosť', 'Vzdelávanie'],
        projectUrl: 'https://sqlinjectionlab.kromka.it/',
        githubUrl: 'https://github.com/xkromkad/SQLInjectionLab',
        image: '',
      },
      {
        title: 'Mirka a Dávid',
        type: 'Web',
        description:
          'Svadobná stránka s informáciami pre hostí a možnosťou nahrávať fotky zo svadby pre svadobčanov. Svadbu sme si užili, len sa bežte pozrieť!',
        notes: [
          'Svadobná stránka',
          'Informácie pre hostí',
          'Zdieľanie fotografií',
        ],
        projectUrl: 'https://mirkaadavid.kromka.it/',
        githubUrl: 'https://github.com/xkromkad/mirkaadavid',
        image: '',
      },
      {
        title: 'Toxipred - tímová stránka',
        type: 'Web',
        description:
          'Reprezentatívna stránka tímu do súťaže TP CUP 2023/2024 na FIIT STU. Cieľom projektu bolo vytvoriť predikčný model na odhaľovanie genotoxicity látok.',
        notes: [
          'Školský projekt',
          'Reprezentatívna stránka tímu',
          'Umelá inteligencia',
        ],
        projectUrl: 'https://toxipred.kromka.it',
        githubUrl: 'https://github.com/xkromkad/Toxipred',
        image: '',
      },
      {
        title: 'Toxipred - predikcia genotoxicity',
        type: 'Web',
        description:
          'Voľne dostupné nástroje na predikciu fototoxicity a genotoxicity látok pomocou strojového učenia. Projekt vznikol v spolupráci 2 tímov v súťaži TP CUP na FIIT STU. Bol som jedným z lenov tímu, ktorý sa zaoberal predikciou genotoxicity.',
        notes: [
          'Školský projekt',
          'Predikcia genotoxicity',
          'Umelá inteligencia',
        ],
        projectUrl: 'https://mltox.fiit.stuba.sk',
        githubUrl: '',
        image: '',
      },
    ];

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
