<template>
    <div class="grid grid-cols-4 gap-4 mt-12">
        <template v-for="(image, index) in images" :key="index">
            <div class="col-span-full md:col-span-2 lg:col-span-1 group">
                <Image :src="image" />
            </div>
        </template>
    </div>
</template>

<script setup>
const app = useAppConfig();
const { data: { images } } = app
</script>
