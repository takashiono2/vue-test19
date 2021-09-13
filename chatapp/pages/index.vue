<template>
  <div>
    <router-link class="btn btn-light" to="/form">
      投稿画面
    </router-link>
    <br><br>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" v-for="message in messages" :key="message.id">
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
      return {}
    },
    computed:{
      messages(){
        return this.$store.state.chat.messages
      }
    },
    async mounted(){
    },
    methods: {
      async submit() {
        this.$store.commit("chat/ADD_MESSAGE",this.form)
        this.$router.push("/")
      }
    }
  }
</script>

<style>
</style>