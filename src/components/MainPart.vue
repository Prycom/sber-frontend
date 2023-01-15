<script>

import configList from './config-list.vue';
import configNote from './config-note.vue';

export default {
    props: {
        data: Object,
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
