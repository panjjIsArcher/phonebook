<template>
  <Phonebook :users="users" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Phonebook  from "./components/phoneBook.vue";
import { users } from "./assets/mock/mock";
export default defineComponent({
  components: { Phonebook },
  data() {
    return {
      users
    }
  }
});
</script>
