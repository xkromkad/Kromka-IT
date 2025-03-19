<template>
  <div class="container">
    <div class="box">
      <div class="title">
        <span class="block"></span>
        <h2 class="kromkait">Kromka <span></span></h2>
        <h2 class="kromkait" style="margin-left: 1.5rem">IT</h2>
      </div>

      <div class="role">
        <div class="block"></div>
        <h3>Webové aplikácie</h3>
      </div>
    </div>
  </div>

  <div id="social-links">
    <div class="row">
      <a
        class="q-mx-md"
        href="https://github.com/xkromkad"
        title="Github Dávid Kromka"
        aria-label="Navštívte github Dávida Kromku"
        target="_blank"
      >
        <img
          loading="lazy"
          src="src/assets/icons/github.svg"
          style="width: 3.5vw; max-width: 2.8rem; min-width: 1.9rem"
          alt="Github Dávida Kromku"
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
          loading="lazy"
          src="src/assets/icons/linkedin.svg"
          style="width: 3.5vw; max-width: 2.8rem; min-width: 1.9rem"
          alt="Linkedin Dávida Kromku"
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
          loading="lazy"
          src="src/assets/icons/instagram.svg"
          style="width: 3.5vw; max-width: 2.8rem; min-width: 1.9rem"
          alt="Instagram Dávida Kromku"
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref, toRef, Ref } from 'vue';
import { Todo, Meta } from './models';

function useClickCount() {
  const clickCount = ref(0);
  function increment() {
    clickCount.value += 1;
    return clickCount.value;
  }

  return { clickCount, increment };
}

function useDisplayTodo(todos: Ref<Todo[]>) {
  const todoCount = computed(() => todos.value.length);
  return { todoCount };
}

export default defineComponent({
  name: 'ExampleComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    todos: {
      type: Array as PropType<Todo[]>,
      default: () => [],
    },
    meta: {
      type: Object as PropType<Meta>,
      required: true,
    },
    active: {
      type: Boolean,
    },
  },
  setup(props) {
    return { ...useClickCount(), ...useDisplayTodo(toRef(props, 'todos')) };
  },
});
</script>

<style src="src/assets/styles/examplecomponent.scss" />
