<template>
    <div class="flex items-center gap-4">
        <NuxtLink v-if="_instagram" :to="_instagram" target="_blank" aria-label="Go to social network">
            <UIcon name="i-simple-icons-instagram"
                class="text-2xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
                dynamic />
        </NuxtLink>
        <NuxtLink v-if="_x" :to="_x" target="_blank">
            <UIcon name="i-simple-icons-x"
                class="text-2xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
                dynamic />
        </NuxtLink>
        <NuxtLink v-if="_facebook" :to="_facebook" target="_blank" aria-label="Go to social network">
            <UIcon name="i-simple-icons-facebook"
                class="text-2xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
                dynamic />
        </NuxtLink>
        <NuxtLink v-if="_github" :to="_github" target="_blank" aria-label="Go to social network">
            <UIcon name="i-simple-icons-github"
                class="text-2xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
                dynamic />
        </NuxtLink>
        <NuxtLink v-if="_tiktok" :to="_tiktok" target="_blank" aria-label="Go to social network">
            <UIcon name="i-simple-icons-tiktok"
                class="text-2xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
                dynamic />
        </NuxtLink>
        <NuxtLink v-if="website" :to="website" target="_blank" aria-label="Go to social network">
            <UIcon name="i-heroicons-globe-alt"
                class="text-2xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
                dynamic />
        </NuxtLink>
    </div>
</template>