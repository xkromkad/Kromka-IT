<template>
  <q-page class="row justify-evenly">
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component>
    <kromka-component />
    <portfolio-component />
    <experience-component />
    <contact-component />
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';
import KromkaComponent from 'components/KromkaComponent.vue';
import PortfolioComponent from 'components/PortfolioComponent.vue';
import ExperienceComponent from 'components/ExperienceComponent.vue';
import ContactComponent from 'components/ContactComponent.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    ExampleComponent,
    KromkaComponent,
    PortfolioComponent,
    ExperienceComponent,
    ContactComponent,
  },
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
