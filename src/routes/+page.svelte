<script lang="ts">
  import FeatureShowcase from "$lib/components/FeatureShowcase.svelte";
  import { features } from "$lib/data/features";
  import { nearestProxyIP } from "$lib/data/minecraft";
</script>

<svelte:head>
  <title>Home - Starnix MC</title>
  <meta
    name="description"
    content="Welcome to Starnix MC - A premier Minecraft RPG server with amazing features and a friendly community. Join and play with your friends!"
  />
</svelte:head>

<div class="flex justify-center px-4 py-12">
  <div class="flex flex-col gap-16 max-w-6xl w-full items-center">
    <!-- Welcome Section -->
    <div class="text-center space-y-4">
      <h1 class="font-minecrafter text-3xl text-purple-900">
        Welcome to Starnix MC
      </h1>
      <p
        class="text-base text-purple-700/90 font-minecraftia max-w-2xl mx-auto leading-relaxed"
      >
        StarnixMC is a Minecraft RPG server that has many features and a fun
        player base. You may join and play with your friends in our friendly
        server. Experience epic adventures, intense battles, and make lasting
        memories!
      </p>
    </div>

    <!-- Server Features Section -->
    <div class="w-full space-y-16">
      <div class="text-center space-y-2">
        <h2 class="font-minecrafter text-3xl sm:text-4xl text-purple-900">
          Server Features
        </h2>
        <p
          class="text-sm sm:text-base text-purple-700/90 font-minecraftia max-w-lg mx-auto"
        >
          Explore what makes Starnix MC unique
        </p>
      </div>

      <!-- Feature Showcases (Alternating Layout) -->
      {#each features as feature, index}
        <FeatureShowcase {feature} reverse={index % 2 !== 0} />
      {/each}
    </div>

    <!-- Call to Action -->
    <div
      class="bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg border border-purple-300 p-6 max-w-2xl w-full text-center shadow-sm"
    >
      <h3 class="font-minecrafter text-xl sm:text-2xl text-purple-900 mb-3">
        Ready to Join?
      </h3>
      <p class="text-sm sm:text-base text-purple-800/90 font-minecraftia mb-4">
        Connect now and start your adventure with friends in our amazing
        community!
      </p>
      <div class="space-y-3">
        <p
          class="text-base sm:text-lg font-minecrafter text-purple-900 bg-white/60 rounded-lg px-4 py-2 inline-block"
        >
          {$nearestProxyIP}
        </p>
        <p class="text-sm sm:text-base text-purple-700/90 font-minecraftia">
          <span class="text-purple-800 font-semibold">Bedrock Edition:</span>
          Add port
          <span
            class="font-minecrafter text-purple-900 bg-white/60 rounded px-2 py-1"
            >25565</span
          >
        </p>
      </div>
    </div>

    <div
      class="w-full space-y-6 items-center flex flex-col justify-center pt-[64px]"
    >
      <div class="text-center space-y-2">
        <h2 class="font-minecrafter text-3xl sm:text-4xl text-purple-900">
          Our Staff Team
        </h2>
        <p
          class="text-sm sm:text-base text-purple-700/90 font-minecraftia max-w-lg mx-auto"
        >
          Meet our dedicated team keeping Starnix MC running smoothly
        </p>
      </div>

      <div
        class="bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg border border-purple-300 p-6 text-center shadow-sm max-w-2xl"
      >
        <p
          class="text-sm sm:text-base text-purple-800/90 font-minecraftia mb-4"
        >
          Our amazing staff team works hard to ensure everyone has the best
          experience on Starnix MC!
        </p>
        <a
          href="/staff"
          class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-minecrafter px-6 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          Meet Our Staff
        </a>
      </div>
    </div>
  </div>
</div>
