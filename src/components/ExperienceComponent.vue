<template>
  <div class="row items-center q-gutter-sm" id="experience">
    <h2 class="col-shrink">Skúsenosti</h2>
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
  <div class="full-width">
    <h3 class="education q-my-sm k-background">Vzdelanie</h3>
    <ul>
      <li style="--accent-color: #41516c">
        <div class="date">2024</div>
        <div class="description">
          <b>Blazor</b> ASP.NET Core Blazor školenie v školiacom stredisku
          <a
            aria-label="Navštívte stránku školiaceho strediska GOPAS"
            href="https://www.gopas.sk"
            target="_blank"
            >GOPAS</a
          >
        </div>
        <div class="description">
          <b>WinUI 3</b> 3-dňové školenie pod vedením Prof. Veikko Krypczyk z
          nemeckého školiaceho strediska
          <a href="https://www.it-visions.de" target="_blank">IT-Visions</a>
        </div>
        <div class="descr"></div>
      </li>
      <li style="--accent-color: #41516c">
        <div class="date">2023</div>
        <div class="description">
          <b>FIIT STU</b> Ukončenie bakalarského stupňa štúdia na
          <a
            aria-label="Navštívte stránku Fakulty informatiky a informačných technológií STU"
            href="https://www.fiit.stuba.sk"
            target="_blank"
            >Fakulte informatiky a informačných technológií</a
          >
          STU v Bratislave
        </div>
        <div class="description">
          <b>WCAG</b> Interné školenia tvorby bezbarierového webu na
          ministerstve informatizácie Slovenskej republiky
        </div>
        <div class="descr"></div>
      </li>
      <li style="--accent-color: #41516c">
        <div class="date">2022</div>
        <div class="description">
          <b>Tvorba webu 5</b> Kurz Tvorba, programovanie webstránok V. -
          jQuery, interaktivita a úvod do JavaScriptu v školiacom stredisku
          <a
            aria-label="Navštívte stránku IT learning Slovakia"
            href="www.itlearning.sk"
            target="_blank"
            >IT Learning Slovakia</a
          >
        </div>
        <div class="description">
          <b>Tvorba webu 4</b> Kurz Tvorba, programovanie webstránok IV. -
          responzívny dizajn, media pravidlá, flex a grid rozloženie v školiacom
          stredisku
          <a
            aria-label="Navštívte stránku IT learning Slovakia"
            href="www.itlearning.sk"
            target="_blank"
            >IT Learning Slovakia</a
          >
        </div>
        <div class="description">
          <b>Tvorba webu 3</b> Kurz Tvorba, programovanie webstránok III. -
          expert HTML a CSS, pokročilé selektory, médiá a formuláre v školiacom
          stredisku
          <a
            aria-label="Navštívte stránku IT learning Slovakia"
            href="www.itlearning.sk"
            target="_blank"
            >IT Learning Slovakia</a
          >
        </div>
        <div class="description">
          <b>MS SQL</b> Kurz Microsoft SQL Server pre vývojárov III. -
          programovanie databázy v školiacom stredisku
          <a
            aria-label="Navštívte stránku IT learning Slovakia"
            href="www.itlearning.sk"
            target="_blank"
            >IT Learning Slovakia</a
          >
        </div>
        <div class="description">
          <b>Bootstrap</b> Kurz Bootstrap I. pre začiatočníkov - responzívny
          HTML, CSS a JS framework formuláre v školiacom stredisku
          <a
            aria-label="Navštívte stránku IT learning Slovakia"
            href="www.itlearning.sk"
            target="_blank"
            >IT Learning Slovakia</a
          >
        </div>
        <div class="descr"></div>
      </li>
      <li style="--accent-color: #41516c">
        <div class="date">2021</div>
        <div class="description">
          <b>DAŠ-ka</b> Ukončenie
          <a
            aria-label="Navštívte stránku diecéznej animátorskej školy vo Važci"
            href="https://komisia.sk/diecezna-animatorska-skola/"
            target="_blank"
            >diecéznej animátorskej školy</a
          >
          vo Važci zameranej na témy v oblasti vedenia ľudí v tíme a kresťanský
          život
        </div>
        <div class="description">
          <b>Vzdelávanie</b> Kurzy zamerané na metodiku vzdelávania mládeže v
          informatike a príprava vzdelávacích materiálov v medzinárodnej škole
          programovania
          <a
            aria-label="Navštívte stránku školy programovania Algorithmics"
            href="https://slovakia.alg.academy/svk"
            target="_blank"
            >Algorithmics</a
          >
        </div>
        <div class="descr"></div>
      </li>
      <li style="--accent-color: #41516c">
        <div class="date">2020</div>
        <div class="description">
          <b>FIIT STU</b> Začiatok bakalarského stupňa štúdia na
          <a
            aria-label="Navštívte stránku Fakulty informatiky a informačných technológií STU"
            href="https://www.fiit.stuba.sk"
            target="_blank"
            >Fakulte informatiky a informačných technológií</a
          >
          STU v Bratislave
        </div>
        <div class="description">
          <b>GPUK</b> Ukončenie stredoškolského vzdelania na
          <a
            aria-label="Navštívte stránku Gymnázia Kukučínova v Poprade"
            href="https://gpuk.edupage.org"
            target="_blank"
            >Gymnázium Kukučínova</a
          >
          v Poprade
        </div>
        <div class="descr"></div>
      </li>
    </ul>
    <h3 class="education q-my-sm k-background">Práca</h3>
    <div class="work-background">
      <table>
        <thead>
          <tr>
            <th>Zamestnávateľ</th>
            <th>Trvanie</th>
            <th>Pozícia</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a
                href="https://sensystems.sk"
                target="_blank"
                aria-label="Navštívte stránku spoločnosti SEN Systems"
                >SEN Systems</a
              >
            </td>
            <td>2022 - súčasnosť</td>
            <td>Full-stack developer (.NET, MS SQL)</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://mirri.gov.sk"
                target="_blank"
                aria-label="Navštívte stránku Ministerstva investícií, regionálneho rozvoja a informatizácie SR"
                >Ministerstvo investícií, regionálneho rozvoja a informatizácie
                SR</a
              >
            </td>
            <td>2023</td>
            <td>Tester prístupnosti webových sídel a mobilných aplikácií</td>
          </tr>
          <tr>
            <td>
              <a
                href="https://slovakia.alg.academy/svk"
                target="_blank"
                aria-label="Navštívte stránku Algorithmics Slovensko"
                >Algorithmics</a
              >
            </td>
            <td>2022</td>
            <td>
              Lektor programovania v jazyku <b>Python</b> a <b>Scratch</b>, prekladateľ z anglického do slovenského jazyka
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3 class="education q-my-sm k-background">Technológie</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import rocket from 'src/assets/videos/rocket.webm';
export default defineComponent({
  name: 'ExperienceComponent',
  setup() {
    const webmSource = rocket;
    const videoElement = ref<HTMLVideoElement | null>(null);
    const hasPlayed = ref(false);

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

    return { webmSource, videoElement };
  },
});
</script>

<style src="src/assets/styles/ExperienceComponent.scss" />
