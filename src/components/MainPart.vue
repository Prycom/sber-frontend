<script>

import configList from './config-list.vue';
import configNote from './config-note.vue';

export default {
    props: {
        data: Object,
    },
    methods: {
        storeInit(){
            console.log(1)
            this.$store.commit('contentSet', this.data)
            console.log(this.$store.state)
            console.log(this.data)
        }
    },
    mounted(){
        this.storeInit()
    }
}
</script>
<template>
    <div class="h-full px-8 py-4" id="main"><!---MAIN PART-->
            <ul>
                <li v-for="block in data" :key="block._uid">
                    <component :is="block.component" :name="block.name" :content="block.content"></component>
                </li>
            </ul>
        </div>
</template>
