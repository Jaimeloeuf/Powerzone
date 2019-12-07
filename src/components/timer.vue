<template>
  <div class="timer">
  </div>
</template>

<script>
export default {
	name: "Timer",
	// Might want to allow props to be passed in to create timers, else, perhaps there will also be default values
	props: {
		name: String,
		description: String,
		time: Number
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
