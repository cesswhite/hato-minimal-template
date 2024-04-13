<template>
    <img :src="props.src" class="w-full h-60 object-cover object-center cursor-pointer" alt="image-work"
        @click="showPreviewModal = true" loading="lazy">
    <UModal v-model="showPreviewModal" fullscreen>
        <div class="p-2 h-dvh relative">
            <div class="absolute top-4 right-4 z-10">
                <UButton variant="link" color="white" icon="i-heroicons-x-mark-20-solid"
                    @click="showPreviewModal = false" />
            </div>
            <img :src="props.src" class="w-full h-full object-cover object-center" alt="">
        </div>
    </UModal>
</template>

<script setup lang="ts">
const showPreviewModal = ref(false)

const props = defineProps<{
    src: string
}>()
</script>
