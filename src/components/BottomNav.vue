<template>
  <v-bottom-navigation class="color" dark flat>
    <v-btn value="recent" router to="/">
      <span>Recent</span>
      <v-icon>fa fa-history</v-icon>
    </v-btn>

    <v-btn value="favorites" router to="assessment">
      <span>Favorites</span>
      <v-icon>fa fa-heart</v-icon>
    </v-btn>

    <v-btn value="nearby">
      <span>Nearby</span>
      <v-icon>fa fa-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BottomNav extends Vue {
  @Prop() private color!: string;
}
</script>