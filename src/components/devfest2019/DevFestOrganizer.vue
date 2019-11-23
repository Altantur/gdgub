<template>
  <v-container class="pa-0">
    <!-- Organizerタイトル -->
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
        <p class="google-font display-2">Organizers</p>
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
    <!-- Organizer -->
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs10 sm8 md6 lg4 class="text-xs-center">
        <v-img src="/img/devfest2019/gdgub.png"
        lazy-src="/img/devfest2019/gdgub.png"
        ></v-img>
      </v-flex>
      <v-flex xs10 sm8 md6 lg4 class="pa-2 text-xs-center">
          <v-img src="/img/devfest2019/gdgub.png"
        lazy-src="/img/devfest2019/gdgub.png"
        ></v-img>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ChapterDetails from "@/assets/data/chapterDetails.json";
export default {
  data() {
    return {
      socialLinks:ChapterDetails.socialLinks
    };
  }
};
</script>
