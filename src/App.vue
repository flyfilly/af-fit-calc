<template>
  <v-app dark>
    <v-content>
      <v-app-bar color="transparent" flat dark>
        <v-toolbar-title>Hello</v-toolbar-title>
      </v-app-bar>
      <v-container>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </v-container>
    </v-content>
    <BottomNav color="blue darken-4"></BottomNav>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BottomNav from '@/components/BottomNav.vue';

@Component({
  components: {
    BottomNav,
  },
})
export default class App extends Vue {}
</script>


<style lang="less">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>