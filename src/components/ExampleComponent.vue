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
      <a class="q-mx-md" href="https://github.com/xkromkad" target="_blank">
          <img src="src/assets/icons/github.svg" style="width: 3.5vw; max-width: 2.8rem; min-width: 1.9rem;" alt="Github" />
      </a>
      <a class="q-mx-md" href="https://www.linkedin.com/in/d%C3%A1vid-kromka-497978217" target="_blank">
          <img src="src/assets/icons/linkedin.svg" style="width: 3.5vw; max-width: 2.8rem; min-width: 1.9rem;" alt="Instagram" />
      </a>
      <a class="q-mx-md" href="https://www.instagram.com/davidkromka/" target="_blank">
          <img src="src/assets/icons/instagram.svg" style="width: 3.5vw; max-width: 2.8rem; min-width: 1.9rem;" alt="Instagram" />
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

<style>
@import url('https://fonts.googleapis.com/css?family=Lato:300,400|Poppins:300,400,800&display=swap');

* {
  margin: 0;
  padding: 0;
}

body,
html {
  overflow: hidden;
}

.container {
  width: 100%;
  height: 100vh;
  background: #232323;

  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    min-width: 250px;
    min-height: 250px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .title {
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      height: 50px;

      .block {
        width: 0%;
        height: inherit;
        background: #ffb510;
        position: absolute;
        animation: mainBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
        display: flex;
      }

      h1 {
        letter-spacing: 0.5rem;
        font-family: 'Poppins';
        color: #fff;
        font-size: 70px;
        -webkit-animation: mainFadeIn 2s forwards;
        -o-animation: mainFadeIn 2s forwards;
        animation: mainFadeIn 2s forwards;
        animation-delay: 1.6s;
        opacity: 0;
        display: flex;
        align-items: baseline;
        position: relative;

        span {
          width: 0px;
          height: 0px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;

          background: #ffb510;
          -webkit-animation: load 0.6s cubic-bezier(0.74, 0.06, 0.4, 0.92)
            forwards;
          animation: popIn 0.8s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
          animation-delay: 2s;
          margin-left: 5px;
          margin-top: -10px;
          position: absolute;
          bottom: 13px;
          right: -12px;
          margin-bottom: 10px;
        }
      }

      @media screen and (max-width: 1200px) {
        h1 {
          font-size: 50px;
          span {
            margin-bottom: 15px;
          }
        }
      }

      @media screen and (max-width: 600px) {
        h1 {
          font-size: 40px;
          span {
            margin-bottom: 18px;
          }
        }
      }
    }

    .role {
      margin-top: 0.5rem;
      width: 100%;
      position: relative;
      display: flex;
      align-items: center;
      height: 30px;

      .block {
        width: 0%;
        height: inherit;
        background: #00eefd;
        position: absolute;
        animation: secBlock 2s cubic-bezier(0.74, 0.06, 0.4, 0.92) forwards;
        animation-delay: 2s;
        display: flex;
      }

      p {
        animation: secFadeIn 2s forwards;
        animation-delay: 3.2s;
        opacity: 0;
        font-weight: 400;
        font-family: 'Lato';
        color: #ffffff;
        font-size: 17px;
        text-transform: uppercase;
        letter-spacing: 8px;
      }
      @media screen and (max-width: 1200px) {
        p {
          font-size: 14px;
        }
      }
      @media screen and (max-width: 600px) {
        p {
          font-size: 12px;
        }
      }
    }
  }
}

@keyframes mainBlock {
  0% {
    width: 0%;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes secBlock {
  0% {
    width: 0%;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}

@keyframes mainFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes popIn {
  0% {
    width: 0px;
    height: 0px;
    background: #e9d856;
    border: 0px solid #ddd;
    opacity: 0;
  }
  50% {
    width: 10px;
    height: 10px;
    background: #e9d856;
    opacity: 1;
    bottom: 45px;
  }
  65% {
    width: 7px;
    height: 7px;
    bottom: 0px;
    width: 15px;
  }
  80% {
    width: 10px;
    height: 10px;
    bottom: 20px;
  }
  100% {
    width: 7px;
    height: 7px;
    background: #e9d856;
    border: 0px solid #222;
    bottom: 13px;
  }
}

@keyframes secFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.5;
  }
}

footer {
  max-width: 28rem;
  min-width: 15rem;
  width: 10vw;
  min-height: 3.5rem;
  max-height: 5rem;
  height: 5vw;
  background: #ffb510;
  position: absolute;
  right: 0;
  bottom: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: top 0.8s forwards;
  animation-delay: 4s;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: #232323;
    font-family: 'Poppins';

    i {
      margin-right: 25px;
      font-size: 22px;
      color: #232323;
      animation: icon 2s forwards;
      animation-delay: 4s;
      opacity: 0;
    }
  }
}

@keyframes top {
  0% {
    opacity: 0;
    bottom: -80px;
  }
  100% {
    opacity: 1;
    bottom: 0px;
  }
}

@keyframes icon {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: scale(1.3) rotate(-02deg);
  }
  100% {
    opacity: 1;
    bottom: 0px;
  }
}
</style>
