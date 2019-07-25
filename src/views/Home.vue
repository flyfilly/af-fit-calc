<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    {{aNum}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  public myString: string = '';
  private aNum: number = 12;

  private mounted() {
    console.log('i am mounted');
  }
}
</script>
