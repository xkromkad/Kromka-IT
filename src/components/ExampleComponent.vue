<template>
  <div class="container">
    <div class="box">
      <div class="title">
        <span class="block"></span>
        <h1>Kromka <span></span></h1>
        <h1 style="margin-left: 1.5rem">IT</h1>
      </div>

      <div class="role">
        <div class="block"></div>
        <p>Webové aplikácie</p>
      </div>
    </div>
  </div>

  <footer>
    <div class="row">
      <a
        class="q-mx-md"
        href="https://github.com/xkromkad"
        title="Github Dávid Kromka"
        target="_blank"
      >
        <img
          src="src/assets/icons/github.svg"
          style="width: 3.5vw; max-width: 2.8rem; min-width: 1.9rem"
          alt="Github Dávida Kromku"
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
          style="width: 3.5vw; max-width: 2.8rem; min-width: 1.9rem"
          alt="Linkedin Dávida Kromku"
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
          style="width: 3.5vw; max-width: 2.8rem; min-width: 1.9rem"
          alt="Instagram Dávida Kromku"
        />
      </a>
    </div>
  </footer>
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
