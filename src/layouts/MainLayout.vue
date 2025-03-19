<template>
  <q-layout view="lHr Lpr fff">
    <q-header>
      <q-toolbar class="text-light toolbar">
        <q-toolbar-title>
          <q-img
            loading="lazy"
            alt="Kromka IT logo"
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
            @click="scrollToElement(link.name)"
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
          @click="scrollToElement(link.name)"
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
          <p class="author">Made with ❤️ in Slovakia</p>
          <p class="author">
            <a
              aria-label="Pošlite mail na emailovú adresu Dávida Kromku"
              href="mailto:david@kromka.it"
              >david@kromka.it</a
            >
          </p>
        </div>
        <div class="col-12 col-sm-6">
          <div class="row justify-end">
            <div class="footer-links k-background q-pa-sm">
              <a
                class="q-mx-md"
                href="https://github.com/xkromkad"
                title="Github Dávid Kromka"
                aria-label="Navštívte github Dávida Kromku"
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
                aria-label="Navštívte linkedin Dávida Kromku"
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
                aria-label="Navštívte instagram Dávida Kromku"
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
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import { useMeta } from 'quasar';

const linksList = [
  { name: 'kromka', title: 'Kromka IT', link: '#kromka' },
  { name: 'experience', title: 'Skúsenosti', link: '#experience' },
  { name: 'projects', title: 'Portfólio', link: '#projects' },
  { name: 'contact', title: 'Kontakt', link: '#contact' },
];

export default defineComponent({
  name: 'MainLayout',
  components: {
    EssentialLink,
  },
  setup() {
    const model = ref('kromka');
    const leftDrawerOpen = ref(false);

    
    // NEW: track whether we’re in the middle of a manual scroll triggered by a tab click
    const isManualScrolling = ref(false);
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

    const scrollToElement = (tabValue: string) => {
      model.value = tabValue;
      isManualScrolling.value = true;

      const target = document.getElementById(tabValue);
      const headerHeight = 80;

      if (target) {
        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = targetPosition - headerHeight;

        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

        history.pushState(null, '', `#${tabValue}`); // Update the URL
      }

      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isManualScrolling.value = false;
      }, 700);
    };

    const onScroll = () => {
      if (isManualScrolling.value) return;

      const scrollOffset = 200;
      let currentSection = '';

      for (const link of linksList) {
        const sectionEl = document.getElementById(link.name);
        if (sectionEl) {
          const sectionTop = sectionEl.offsetTop;
          if (window.scrollY + scrollOffset >= sectionTop) {
            currentSection = link.name;
          }
        }
      }

      if (currentSection && currentSection !== model.value) {
        model.value = currentSection;
        history.pushState(null, '', `#${currentSection}`); // Update the URL
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', onScroll);

      // Scroll to section if URL has a hash
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setTimeout(() => scrollToElement(hash), 200);
      }
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', onScroll);
    });

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    return {
      scrollToElement,
      model,
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer,
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
