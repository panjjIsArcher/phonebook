<template>
  <Phonebook :users="users" @check="check" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Phonebook from "./components/phoneBook.vue";
import { users } from "./assets/mock/mock";
import { User } from "./types/type";
export default defineComponent({
  components: { Phonebook },
  data() {
    return {
      users
    }
  },
  methods: {
    check(user: User) {
      this.$emit("nodeClick", user)
    }
  }
});
</script>
