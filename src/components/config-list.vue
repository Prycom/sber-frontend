<script>

import configNote from './config-note.vue';

export default{
    props : {
        content : {
            type : Object,
        },
        name: String,
    },
    name: "config-list"
}

</script>

<template>
    <div class="px-4 py-4">
        <h3 class="text-lg text-gray-300">{{ name }}</h3>
        <ul class="">
            <li v-for="block in content" :key="block._uid">
                <component :is="block.component" :name="block.name" :content="block.content"></component>
            </li>
        </ul>
    </div>
</template>
