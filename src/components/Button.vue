
<script>
export default {
    props : {
        label : String,
    },
    methods : {
        exec() {
            this.$emit('onExec')
        }
    }
};
</script>



<template>
    <div class="flex flex-col px-8 py-4 ">
        <button
            @click="exec"
            class="px-4 py-4 bg-green-600 rounded-full text-white font-bold transition ease-in-out hover:bg-green-300">
            {{ label }}
        </button>
    </div>
</template>
