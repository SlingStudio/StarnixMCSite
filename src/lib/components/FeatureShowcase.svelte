<script lang="ts">
  interface Feature {
    title: string;
    description: string;
    media: string;
    type: "image" | "video";
  }

  interface Props {
    feature: Feature;
    reverse?: boolean;
  }

  let { feature, reverse = false }: Props = $props();
</script>

<div
  class="flex flex-col {reverse
    ? 'lg:flex-row-reverse'
    : 'lg:flex-row'} gap-8 items-center"
>
  <!-- Text Content -->
  <div class="flex-1 space-y-4">
    <h3 class="font-minecrafter text-2xl sm:text-3xl text-purple-900">
      {feature.title}
    </h3>
    <p
      class="text-sm sm:text-base text-purple-800/90 font-minecraftia leading-relaxed"
    >
      {feature.description}
    </p>
  </div>

  <!-- Media Content -->
  <div class="flex-1 w-full">
    <div
      class="relative bg-white rounded-lg shadow-lg border-2 border-purple-200 overflow-hidden aspect-video hover:shadow-xl transition-shadow duration-300"
    >
      {#if feature.type === "image"}
        <img
          src={feature.media}
          alt={feature.title}
          class="w-full h-full object-cover"
          loading="lazy"
        />
      {:else}
        <video
          src={feature.media}
          class="w-full h-full object-cover"
          autoplay
          loop
          muted
          playsinline
        >
          <track kind="captions" />
          Your browser does not support the video tag.
        </video>
      {/if}
    </div>
  </div>
</div>
