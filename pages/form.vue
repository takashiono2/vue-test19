<template>
  <div>
    <form>
      <div class="form-group">
        <label>ユーザ名</label>
        <input v-model="form.name" type="text" class="form-control" readonly>
      </div>
      <div class="form-group">
        <textarea v-model="form.message" rows="3" class="form-control" />
      </div>
      <button @click.prevent="submit" type="submit" class="btn btn-primary">投稿</button>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: "some user",
          message: "",
        },
      }
    },
    methods: {
      async submit() {
      }
    }
  }
</script>

<style>
</style>