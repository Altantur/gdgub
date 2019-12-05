<template>
  <v-container class="pa-0">
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs12 sm2 md2 lg2 class="pa-2">
        <v-img
          src="/img/devfest2019/kit/image02.png"
          lazy-src="/img/devfest2019/kit/image02.png"
          width="250"
          style="margin:0 auto;"
        ></v-img>
      </v-flex>
      <v-flex xs12 sm7 md7 lg7 class="pa-2 text-xs-center">
        <p class="google-font" style="font-size:350%;">About</p>
      </v-flex>
      <v-flex xs12 sm2 md2 lg2 class="pa-2">
        <v-img
          src="/img/devfest2019/kit/image03.png"
          lazy-src="/img/devfest2019/kit/image03.png"
          width="250"
          style="margin:0 auto;"
        ></v-img>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs0 sm1 md1 lg1 class="pa-2 text-xs-left"></v-flex>
      <v-flex xs4 sm3 md3 lg3 class="pa-2 text-xs-left">
        <p class="google-font" style="font-size:150%;"></p>
      </v-flex>
      <v-flex xs7 sm7 md7 lg7 class="pa-2 text-xs-left">
        <p class="google-font" style="font-size:200%; font-weight: bold;">GDG DevFest Ulaanbaatar 2019</p>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs0 sm1 md1 lg1 class="pa-2 text-xs-left"></v-flex>
      <v-flex xs4 sm3 md3 lg3 class="pa-2 text-xs-left">
        <p
          class="google-font"
          style="font-size:200%; font-weight: bold; color: #fabb01;"
        >Яриа</p>
        <p class="google-font" style="font-size:150%;">2019.12.15</p>
      </v-flex>
      <v-flex xs7 sm7 md7 lg7 class="pa-2 text-xs-left">
        <p style="font-size:130%; font-weight: bold; color: #537dbf;">Sessions, Live Hangouts</p>
        <p class="google-font">
          10:00 〜 15:00
          <br />
        </p>
        <p class="google-font">
         
          <br />
        </p>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs0 sm1 md1 lg1 class="pa-2 text-xs-left"></v-flex>
      <v-flex xs4 sm3 md3 lg3 class="pa-2 text-xs-left">
        <p
          class="google-font"
          style="font-size:200%; font-weight: bold; color: #fabb01;"
        >Хийж үзэх</p>
        <p class="google-font" style="font-size:150%;">2019.12.15</p>
      </v-flex>
      <v-flex xs7 sm7 md7 lg7 class="pa-2 text-xs-left">
        <p style="font-size:130%; font-weight: bold; color: #34a851;">Special Hands-on</p>
        <p class="google-font">
          14:00 〜 17:00
          <br />
        </p>
        <p class="google-font">
          <br />
        </p>
      </v-flex>
    </v-layout>
    <v-divider></v-divider>
  </v-container>
</template>

<script>
import ChapterDetails from "@/assets/data/chapterDetails.json";
export default {
  data() {
    return {
      chapterDetails: ChapterDetails
    };
  }
};
</script>
