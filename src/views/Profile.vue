<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3 class="text-center">
        <img alt="Vue logo" src="../assets/logo.png" />
        {{aNum}}
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Profile extends Vue {
  public myString: string = '';
  private aNum: number = 12;
}
</script>
