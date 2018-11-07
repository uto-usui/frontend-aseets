<template>
  <div>
    <h2>{{ message }}</h2>
    <p>{{ count }}</p>
    <p><button @click="onClick">+</button></p>
  </div>
</template>

<script>
export default {
  name: 'SubComponent',
  props: {
    message: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      count: 0,
    }
  },
  async mounted() {
    await this.timer(2000)
    await this.timer(1000)
    console.log(3000)
  },
  methods: {
    onClick() {
      console.log('click')
      this.count += 1
    },
    timer(time) {
      return new Promise(resolve => setTimeout(resolve, time))
    },
  },
}
</script>

<style scoped>
h2 {
  font-size: 2vw;
}
</style>
