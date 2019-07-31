<template>
  <v-bottom-navigation class="pa-0 ma-0" flat>
    <v-btn value="recent" style="height:56px !important;" router to="/">
      <span>Journal</span>
      <v-icon>fa fa-book</v-icon>
    </v-btn>

    <v-btn value="favorites" style="height:56px !important;" router to="assessment">
      <span>Assessment</span>
      <v-icon>fa fa-running</v-icon>
    </v-btn>

    <v-btn value="profile" style="height:56px !important;" router to="profile">
      <span>Profile</span>
      <v-icon>fa fa-id-card</v-icon>
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