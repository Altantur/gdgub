<template>
  <v-container class="pa-0">
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs12 md9 lg9 class="pa-2 text-xs-center">
        <p class="google-font" style="font-size:350%;">DevFest гэж юу вэ?</p>
      </v-flex>
    </v-layout>
    <v-layout wrap align-center justify-center row fill-height class="my-0">
      <v-flex xs12 sm2 md2 lg2 class="pa-2 text-xs-center">
        <v-img
          src="/img/devfest2019/kit/and_icon.png"
          lazy-src="/img/devfest2019/kit/and_icon.png"
          class
          width="80"
          style="margin:0 auto;"
        ></v-img>
      </v-flex>
      <v-flex xs12 sm6 md6 lg6 class="pa-2 my-0 text-xs-center">
        <p class="google-font" style="font-size:250%;">What's DevFest?</p>
      </v-flex>
      <v-flex xs12 sm2 md2 lg2 class="pa-2 text-xs-center">
        <v-img
          src="/img/devfest2019/kit/go_icon.png"
          lazy-src="/img/devfest2019/kit/go_icon.png"
          class
          width="80"
          style="margin:0 auto;"
        ></v-img>
      </v-flex>
    </v-layout>
    <v-layout wrap align-center justify-center row fill-height class="my-3">
      <v-flex xs12 md9 lg9 class="pa-2 text-xs-center">
        <p
          class="google-font"
        > Дэлхийн 140 оронд 1000 гаруй хотуудад болдог энэхүү арга хэмжээ нь Хөгжүүлэгчид сурсан мэдсэн зүйлсээ бусадтайгаа хуваалцаж баярлах өдөр юм.
        Хамтдаа нэг өдөр Machine Learning, Web, Android, Flutter, Firebase, Google Cloud Platform(GCP), Go сэдвүүдээр амьсгалах болно.
        </p>
        <p
          class="google-font"
        >The DevFest, or 'Developer Festival', is a technical conference for developers. It is aimed at students, professionals or simply curious techies.</p>
      </v-flex>
    </v-layout>
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
