<template>
    <div class="fixed top-4 right-4">
        <UButton aria-label="button to switch theme dark to light" @click="toggleDark" variant="link" color="white"
            :icon="color.preference === 'dark' ? 'i-heroicons-sun' : 'i-heroicons-moon'" />
    </div>
</template>

<script setup>
const color = useColorMode();
function toggleDark() {
    color.preference = color.value === "dark" ? "light" : "dark";
}
</script>