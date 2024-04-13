<template>
    <div class="flex items-center gap-2">
        <NuxtLink v-if="_instagram" :to="_instagram" target="_blank">
            <UIcon name="i-simple-icons-instagram"
                class="text-xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
                dynamic />
        </NuxtLink>
        <NuxtLink v-if="_x" :to="_x" target="_blank">
            <UIcon name="i-simple-icons-x"
                class="text-xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
                dynamic />
        </NuxtLink>
        <NuxtLink v-if="_facebook" :to="_facebook" target="_blank">
            <UIcon name="i-simple-icons-facebook"
                class="text-xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
                dynamic />
        </NuxtLink>
        <NuxtLink v-if="_github" :to="_github" target="_blank">
            <UIcon name="i-simple-icons-github"
                class="text-xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
                dynamic />
        </NuxtLink>
        <NuxtLink v-if="_tiktok" :to="_tiktok" target="_blank">
            <UIcon name="i-simple-icons-tiktok"
                class="text-xl text-zinc-800/60 dark:text-zinc-50/60 dark:hover:text-zinc-50 hover:text-zinc-950"
                dynamic />
        </NuxtLink>
    </div>
</template>