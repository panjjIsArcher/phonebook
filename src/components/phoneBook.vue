<template>
    <div class="phone-book">
        <ul>
            <li v-for="i in list" :key="i.phonetic">
                <h5>{{ i.phonetic }}</h5>
                <ul>
                    <li v-for="user in i.group" :key="user.name" @click="nodeClick(user)">
                        {{ user.name }}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { List, User } from "../types/type"
import { PropType, defineComponent } from "vue";
import { transform } from "../utils/transform"
export default defineComponent({
    props: {
        users: {
            type: Array as PropType<Array<User>>,
            default: () => [],
            required: true
        }
    },
    computed: {
        list(): Array<List> {
            return transform(this.users).filter(user => user.group.length)
        }
    },
    methods: {
        nodeClick(user: User) {
            this.$emit("check", user)
        }
    }

});
</script>
<style lang="scss" scoped>
.phone-book {
   
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;

    >ul {
        overflow-y: overlay;
        height: 100%;
        color: #363636;

        >li {
            >h5 {
                text-indent: 10px;
                font-size: 14px;
                background-color: #F9F9F9;
                line-height: 18px;
                font-weight: normal;
            }

            >ul {
                >li {
                    font-size: 16px;
                    text-indent: 10px;
                    outline: 1px solid rgba(#e4e0e0, 0.5);
                    padding: 10px 0;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
