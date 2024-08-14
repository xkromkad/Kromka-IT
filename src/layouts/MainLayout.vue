<template>
  <q-layout view="lHr Lpr lFF">
    <q-header elevated>
      <q-toolbar class="text-light toolbar">
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
          v-if="$q.screen.gt.sm"
        >
          <q-tab
            v-for="link in essentialLinks"
            :key="link.name"
            class="q-mx-sm"
            :name="link.name"
            :label="link.title"
          />
        </q-tabs>
        <q-btn
          v-if="$q.screen.lt.md"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer dark side="right" v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header style="color: #ffb510"
          >Menu &lt;/&gt;</q-item-label
        >

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
    name: 'kromka',
    title: 'Kromka IT',
    caption: '',
    icon: '',
    link: '#',
  },
  {
    name: 'experience',
    title: 'Skúsenosti',
    caption: '',
    icon: '',
    link: '#experience',
  },
  {
    name: 'projects',
    title: 'Portfólio',
    caption: '',
    icon: '',
    link: '#projects',
  },
  {
    name: 'contact',
    title: 'Kontakt',
    caption: '',
    icon: '',
    link: '#contact',
  },
  {
    name: 'blog',
    title: 'Blog',
    caption: '',
    icon: '',
    link: '#blog',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    var model = ref('kromka');

    const leftDrawerOpen = ref(false);

    return {
      model,
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

.toolbar {
  background: #232323;
}
</style>
