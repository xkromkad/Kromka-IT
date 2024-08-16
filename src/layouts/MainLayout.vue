<template>
  <q-layout view="lHr Lpr fff">
    <q-header>
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

    <q-footer id="footer">
      <q-toolbar class="row footer-row q-pa-md">
        <div class="col-12 col-sm-6">
          <q-toolbar-title>Kromka<span class="dot">.</span>IT</q-toolbar-title>
          <p class="author">Copyright © 2024 Dávid Kromka</p>
          <p class="author">
            <a href="mailto:david@kromka.it">david@kromka.it</a>
          </p>
        </div>
        <div class="col-12 col-sm-6">
          <div class="row justify-end">
            <div class="footer-links k-background q-pa-sm">
              <a
                class="q-mx-md"
                href="https://github.com/xkromkad"
                title="Github Dávid Kromka"
                target="_blank"
              >
                <img
                  src="src/assets/icons/github.svg"
                  style="width: 3.5vw; max-width: 2rem; min-width: 1.9rem"
                  alt="Github Dávid Kromka"
                />
              </a>
              <a
                class="q-mx-md"
                href="https://www.linkedin.com/in/d%C3%A1vid-kromka-497978217"
                title="Linkedin Dávid Kromka"
                target="_blank"
              >
                <img
                  src="src/assets/icons/linkedin.svg"
                  style="width: 3.5vw; max-width: 2rem; min-width: 1.9rem"
                  alt="Linkedin Dávid Kromka"
                />
              </a>
              <a
                class="q-mx-md"
                href="https://www.instagram.com/davidkromka/"
                title="Instagram Dávid Kromka"
                target="_blank"
              >
                <img
                  src="src/assets/icons/instagram.svg"
                  style="width: 3.5vw; max-width: 2rem; min-width: 1.9rem"
                  alt="Instagram Dávid Kromka"
                />
              </a>
            </div>
          </div>
        </div>
      </q-toolbar>
    </q-footer>
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

#footer {
  background: #232323;
}

.footer-row {
  flex-wrap: wrap !important;
}

.dot {
  color: #ffb510;
}

.author {
  font-size: 14px;
  margin: 0;
  a {
    color: white;
  }
}

.footer-links {
  border-radius: 30px;
}
</style>
