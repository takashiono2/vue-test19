<template>
  <div>
    <router-link class="btn btn-light" to="/form">
      投稿画面
    </router-link>
    <br><br>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="message in messages" :key="message">
        <div>
          {{ message.name }}
        </div>
        <div>
          {{ message.message }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        messages: [
          {
            name: "tanaka",
            message: "hello world!"
          },
          {
            name: "yamada",
            message: "hello world"
          }
        ]
      }
    },
    async mounted(){
    }
  }
</script>

<style>
</style>