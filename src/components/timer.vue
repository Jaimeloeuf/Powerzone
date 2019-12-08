<template>
  <div class="timer">
    <span id="timerName">
      {{ timer.name }}
    </span>

    <span id="timerDescription">
      {{ timer.description }}
    </span>

    <span id="timeLeft">
      {{ timer.time }}
    </span>

    <button id="pause"></button>

    <button id="reset"></button>

    <button id="delete"></button>

    <!--

      Features to add
      - Pause timer button
      - Delete timer button
      - Reset timer button

      Future features
      - Share timer button
    -->
  </div>
</template>

<script>
// import timer from "@/timer.js";

export default {
  name: "Timer",
  // Might want to allow props to be passed in to create timers, else, perhaps there will also be default values
  props: {
    timer: {
      validator: function (timer) {
        // If timer id does not exist or is falsey, return false
        if (!timer.id) {
          return false;
        }

        timer.name = timer.name || "";
        timer.description = timer.description || "";
        timer.time = timer.time || 0;

        // Return true to indicate prop validation passed
        return true;
      }
    }
  }
};

/*
  timer object counts down.
  I need the UI to update every second
    Callback method?
*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
