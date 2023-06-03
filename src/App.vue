<template>
  <Phonebook :list="list" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Phonebook  from "./components/phoneBook.vue";
import { list } from "./assets/mock/mock";
export default defineComponent({
  components: { Phonebook },
  data() {
    return {
      list
    }
  }
});
</script>
