<template>
  <v-bottom-navigation class="transparent" flat>
    <v-btn value="recent" router to="/">
      <span>Home</span>
      <v-icon>fa fa-history</v-icon>
    </v-btn>

    <v-btn value="favorites" router to="assessment">
      <span>Assessment</span>
      <v-icon>fa fa-running</v-icon>
    </v-btn>

    <v-btn value="profile" router to="profile">
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