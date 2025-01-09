<template>
  <div class="row items-center q-gutter-sm q-mt-xl" id="projects">
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

  <!-- Container for centering -->
  <div class="q-pb-xl q-px-lg">
    <div class="portfolio-list">
      <!-- Render each project card -->
      <q-card
        v-for="(item, index) in portfolioItems"
        :key="index"
        class="project-card"
        flat
        bordered
      >
        <q-card-section class="flex-grow">
          <!-- Project Image -->
          <q-img
            v-if="item.image"
            :src="item.image"
            :alt="item.title"
            style="max-height: 160px; object-fit: cover"
          />
          <!-- Project Title and Type -->
          <div class="text-h6 q-mt-sm">
            <b>{{ item.title }}</b>
          </div>
          <div class="text-subtitle2 text-grey-7">{{ item.type }}</div>
          <!-- Project Description -->
          <p class="text-body1 q-my-sm">
            {{ item.description }}
          </p>
        </q-card-section>

        <q-separator />

        <q-card-section class="notes-section">
          <div
            v-for="(note, noteIndex) in item.notes"
            :key="noteIndex"
            class="text-caption text-grey-8"
          >
            • {{ note }}
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions class="actions-section">
          <q-btn
            v-if="item.projectUrl"
            :href="item.projectUrl"
            no-caps
            target="_blank"
            label="Zobraziť"
            class="q-ml-sm k-background"
          />
          <q-btn
            v-if="item.githubUrl"
            :href="item.githubUrl"
            flat
            target="_blank"
            class="q-ml-sm"
          >
            <img
              src="src/assets/icons/github.svg"
              style="width: 3.5vw; max-width: 2rem; min-width: 1.9rem"
              alt="Github Dávid Kromka"
            />
          </q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import {
  QCard,
  QCardSection,
  QCardActions,
  QSeparator,
  QBtn,
  QImg,
} from 'quasar';

import laptop from 'src/assets/videos/laptop.webm';

export default defineComponent({
  name: 'PortfolioComponent',
  components: {
    QCard,
    QCardSection,
    QCardActions,
    QSeparator,
    QBtn,
    QImg,
  },
  setup() {
    const webmSource = laptop;
    const videoElement = ref<HTMLVideoElement | null>(null);
    const hasPlayed = ref(false);

    // Projects to display in the portfolio
    const portfolioItems = [
      {
        title: 'Predškoláčik',
        type: 'Web',
        description: 'Vzdelávacia platforma pre materské školy s umelou inteligenciou.',
        notes: ['Vzdelávanie', 'Umelá inteligencia', 'Učenie hrou'],
        projectUrl: 'https://predskolacik.kromka.it/',
        githubUrl: '',
        image: 'src/assets/images/predskolacik.png', // Add image if available
      },
      {
        title: 'Sql Injection Lab',
        type: 'Web',
        description:
          'Laboratórium na bezpečné a legálne trénovanie svojich zručností v útokoch SQL Injection!',
        notes: ['SQL Injection', 'Informačná bezpečnosť', 'Vzdelávanie'],
        projectUrl: 'https://sqlinjectionlab.kromka.it/',
        githubUrl: 'https://github.com/xkromkad/SQLInjectionLab',
        image: 'src/assets/images/sqlinjection.png', // Add image if available
      },
      {
        title: 'Mirka a Dávid',
        type: 'Web',
        description:
          'Svadobná stránka s informáciami pre hostí a možnosťou nahrávanie fotiek. Svadbu sme si užili, len sa bežte pozrieť 😍!',
        notes: [
          'Svadobná stránka',
          'Informácie pre hostí',
          'Zdieľanie fotografií',
        ],
        projectUrl: 'https://mirkaadavid.kromka.it/',
        githubUrl: 'https://github.com/xkromkad/mirkaadavid',
        image: 'src/assets/images/svadba.png',
      },
      {
        title: 'Toxipred - tímová stránka',
        type: 'Web',
        description:
          'Tímová sránka do súťaže TP CUP na FIIT STU. Cieľom projektu bolo vytvoriť predikčný model na odhaľovanie genotoxicity látok.',
        notes: [
          'Školský projekt',
          'Reprezentatívna stránka tímu',
          'Umelá inteligencia',
        ],
        projectUrl: 'https://toxipred.kromka.it',
        githubUrl: 'https://github.com/xkromkad/Toxipred',
        image: 'src/assets/images/toxipred_team.png',
      },
      {
        title: 'Toxipred - predikcia genotoxicity',
        type: 'Web',
        description:
          'Voľne dostupné nástroje na predikciu fototoxicity a genotoxicity látok pomocou strojového učenia. Projekt vznikol v spolupráci 2 tímov v súťaži TP CUP na FIIT STU. Bol som jedným z členov tímu, ktorý sa zaoberal predikciou genotoxicity.',
        notes: [
          'Školský projekt',
          'Predikcia genotoxicity',
          'Umelá inteligencia',
        ],
        projectUrl: 'https://mltox.fiit.stuba.sk',
        githubUrl: '',
        image: 'src/assets/images/toxipred.png',
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

    return { webmSource, videoElement, portfolioItems };
  },
});
</script>

<style lang="scss" scoped>
.portfolio-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px; /* Adjust spacing between cards as needed */
  padding-top: 1rem;
  justify-content: center; /* Center the cards horizontally */
}

.project-card {
  max-width: 360px;
  flex: 1 1 300px; /* Makes the cards responsive */
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  }
}

.notes-section {
  flex-grow: 1; /* Ensures notes section takes up available space */
}

.actions-section {
  justify-content: flex-end; /* Aligns buttons to the right */
}

.text-h6,
.text-subtitle2,
.text-body1,
.text-caption {
  margin-left: 0.5rem; /* Consistent left margin */
}
</style>

<style src="src/assets/styles/PortfolioComponent.scss" />
