<template>
    <footer class="flex items-center justify-between py-12">
        <NuxtLink :to="`mailto:${email}`"
            class="text-sm text-zinc-700 hover:text-zinc-950 dark:text-zinc-50/80 hover:dark:text-zinc-50">
            {{ email }}
        </NuxtLink>
        <NuxtLink :to="`tel:${phone}`"
            class="text-sm text-zinc-700 hover:text-zinc-950 dark:text-zinc-50/80 hover:dark:text-zinc-50">
            {{ phone }}
        </NuxtLink>
    </footer>
</template>
