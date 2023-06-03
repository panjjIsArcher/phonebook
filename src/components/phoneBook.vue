<template>
    <div class="phone-book">
        <ul>
            <li v-for="user in users" :key="user.name">
                {{ user.name }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { User } from "../types/type"
import { PropType, defineComponent } from "vue";

export default defineComponent({
    props: {
        users: {
            type: Array as PropType<Array<User>>,
            default: () => [],
            required: true
        }
    },
    computed: {
        list() {
            return []
        }
    }

});
</script>
<style lang="scss" scoped>
.phone-book {
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;

    >ul {
        overflow-y: overlay;
        height: 100%;
    }
}
</style>
