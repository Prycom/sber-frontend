<script>
export default{
    props : {
        name: String,
        content: String,
    },
    name: "config-note"
}
</script>

<template>
<div class="flex flex-row justify-between px-4 py-1">
    <h3 class="px-4">{{ name }}</h3>
    <input type="text" class="bg-[#10111e]"/>
</div>
</template>