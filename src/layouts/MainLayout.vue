<template>
  <q-layout view="lHr Lpr lFF">
    <q-header elevated class="k-background">
      <q-toolbar class="text-light">
        <q-toolbar-title>
          <q-img
            class="q-mt-sm cursor-pointer q-hoverable"
            src="src/assets/icons/kromka.png"
            spinner-color="white"
            style="max-width: 4rem; border-radius: 10%"
          />
        </q-toolbar-title>
        <q-space />
        <q-tabs
          class="header-item"
          no-caps
          v-model="model"
          v-if="$q.screen.gt.xs"
        >
          <q-tab class="q-mx-sm" name="kromka" label="Kromka IT" />
          <q-tab class="q-mx-sm" name="projects" label="Portfólio" />
          <q-tab class="q-mx-sm" name="experience" label="Skúsenosti" />
          <q-tab class="q-mx-sm" name="contact" label="Kontakt" />
          <q-tab class="q-mx-sm" name="blog" label="Blog" />
        </q-tabs>
        <q-btn
          v-if="$q.screen.lt.sm"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer side="right" v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev',
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev',
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev',
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    var model = ref('kromka');

    const options = [
      { label: 'Kromka IT', value: 'kromka' },
      { label: 'Portfólio', value: 'projects' },
      { label: 'O mne', value: 'about' },
    ];

    const leftDrawerOpen = ref(false);

    return {
      model,
      options,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style>
.q-header {
  height: 0rem;
}

.title {
  margin-top: 5rem;
  font-size: calc(15vw - 1rem);
  letter-spacing: 1rem;
  font-weight: 1000;
}

.header-item {
  font-size: 15px;
  letter-spacing: 0.2rem;
}

.q-tab--active {
  color: #ffb510;
}
</style>
