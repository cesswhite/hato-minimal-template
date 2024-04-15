<template>
    <NuxtImg :src="`/unsplash/photo-${props.src}`"
        :placeholder="img(`/unsplash/photo-${props.src}`, { h: 20, w: 20, blur: 16, q: 90 })" fit="cover"
        class="size-60 object-center object-cover cursor-pointer transform-gpu transition-all ease-in-out duration-150 will-change-transform group-hover:scale-102 group-hover:group-odd:rotate-2 group-hover:group-even:-rotate-2"" alt="
        image-work" @click="showPreviewModal = true" loading="lazy" />
    <UModal v-model="showPreviewModal" fullscreen>
        <div class="p-4 h-dvh relative">
            <div class="absolute top-4 right-4 z-10">
                <UButton aria-label="button to close full preview" variant="link" color="white"
                    icon="i-heroicons-x-mark-20-solid" class="ring-1 ring-blue-200" @click="showPreviewModal = false" />
            </div>
            <NuxtImg :src="`/unsplash/photo-${props.src}`"
                :placeholder="img(`/unsplash/photo-${props.src}`, { h: 20, w: 20, blur: 16, q: 90 })" fit="cover"
                class="size-full object-center object-cover" loading="lazy" />
        </div>
    </UModal>
</template>

<script setup lang="ts">
const showPreviewModal = ref(false)
const img = useImage()

const props = defineProps<{
    src: string
}>()
</script>
