<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <ul>
      <li v-for="timer in timers" v-bind:key="timer.id">
        <Timer v-bind:timer="timer"/>
      </li>
    </ul>

  </div>
</template>

<script>
import Timer from "@/components/timer.vue";

// Get all timers from vuex store, then pass them into individual time components

export default {
  name: "home",
  components: {
    Timer
  },
  data: {
    timers: [
      { id: 1 },
      { id: 2 },
      { id: 3 }
    ]
  }
};
</script>
