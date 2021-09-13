<template>
  <div>
    <a class="btn btn-light" @click="login">
      ログイン
    </a>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    methods: {
      async login(){
        this.$router.push("/")
      }
    }
  }
</script>

<style>
</style>