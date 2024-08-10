<template>
  <q-page class="row justify-evenly">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
    <h2 class="full-width"><span class="fancy">Portfólio</span></h2>
    <h2 class="full-width"><span class="fancy">Skúsenosti</span></h2>
    <h2 class="full-width"><span class="fancy">Kontakt</span></h2>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { ExampleComponent },
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    return { todos, meta };
  },
});
</script>

<style>
h2 {
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  font-size: 3rem;
  text-align: center;
  line-height: 1;
}

/*.fancy {
  @supports (background-clip: text) or (-webkit-background-clip: text) {
    background-image: url("data:image/svg+xml,%3Csvg width='2250' height='900' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath fill='%23ff9000' d='M0 0h2255v899H0z'/%3E%3Ccircle cx='366' cy='207' r='366' fill='%23ffb510'/%3E%3Ccircle cx='1777.5' cy='318.5' r='477.5' fill='%23ffb510'/%3E%3Ccircle cx='1215' cy='737' r='366' fill='%23b58d0a'/%3E%3C/g%3E%3C/svg%3E%0A");
    background-size: 110% auto;
    background-position: center;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
}*/
</style>
