<template>
  <Phonebook />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Phonebook from "./components/phoneBook.vue";

export default defineComponent({
  components: { Phonebook }
});
</script>
