<template>
  <div class="w-full relative h-full pt-12 bg-zinc-50 dark:bg-zinc-950">
    <img src="/shadow.png"
      class="fixed object-cover object-center w-full h-full left-0 top-0 z-10 dark:mix-blend-soft-light opacity-50"
      alt="shadow-background" loading="lazy">
    <div class="relative z-20">
      <SwitchMode />
      <UContainer>
        <div class="flex flex-col gap-2 items-center justify-center">
          <PhotoProfile />
          <MyInfo />
          <SocialNetwork />
          <Gallery />
        </div>
        <Footer />
      </UContainer>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Hato - Minimal Portfolio Web',
  ogTitle: 'Hato - Minimal Portfolio Web',
  description:
    'Hato - Minimal Portfolio Web for Freelance, Photographer & Artist',
  ogDescription:
    'Hato - Minimal Portfolio Web for Freelance, Photographer & Artist',
  ogImage: "https://res.cloudinary.com/dkr1hluva/image/upload/v1713023084/og/og-hato_roec1l.jpg",
  ogImageSecureUrl: 'https://res.cloudinary.com/dkr1hluva/image/upload/v1713023084/og/og-hato_roec1l.jpg',
  ogUrl: 'https://res.cloudinary.com/dkr1hluva/image/upload/v1713023084/og/og-hato_roec1l.jpg',
  twitterImage: "https://res.cloudinary.com/dkr1hluva/image/upload/v1713023084/og/og-hato_roec1l.jpg",
  twitterCard: "summary_large_image",
  ogImageWidth: 1280,
  ogImageHeight: 720,
});
</script>
