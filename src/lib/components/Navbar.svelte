<script lang="ts">
  import Logo from "$lib/assets/icon.png";
  import Discord from "./Discord.svelte";
  import Minecraft from "./Minecraft.svelte";
  import { onMount } from "svelte";
  import { slide } from "svelte/transition";

  let navigationItems = [
    { name: "Home", href: "/" },
    { name: "Vote", href: "/vote" },
    { name: "Store", href: "https://shop.starnixmc.xyz/", external: true },
    { name: "Rules", href: "/rules" },
    { name: "Support", href: "/support" },
  ];
  let middle = Math.floor(navigationItems.length / 2);

  let isMenuOpen = false;
</script>

<div
  class="w-full font-minecrafter flex flex-col items-center text-xl text-white relative [view-transition-name:header]"
  style="background-image: url('/background.jpg'); background-size: cover; background-position: center;"
>
  <!-- Dark tint & blur -->
  <div class="absolute inset-0 bg-black/40"></div>
  <div class="absolute inset-0 bg-purple-950/50 backdrop-blur-md"></div>

  <!-- Desktop nav -->
  <nav
    class="hidden md:flex w-3/5 justify-center items-center p-6 gap-6 relative z-10"
  >
    {#each navigationItems as item, index}
      {#if index === middle}
        <div
          class="mx-5 capitalize bg-amber-400 hover:bg-amber-300 transition-colors p-3 px-7 rounded-full text-[#3D0075] font-semibold shadow-lg shadow-amber-600/30"
        >
          <a
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            >{item.name}</a
          >
        </div>
      {:else}
        <div
          class="mx-5 capitalize text-purple-100 hover:text-purple-200 transition-colors"
        >
          <a
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            >{item.name}</a
          >
        </div>
      {/if}
    {/each}
  </nav>

  <!-- Mobile nav: Hamburger -->
  <div
    class="md:hidden w-full flex justify-center items-center p-4 relative z-10 bg-black/40"
  >
    <button
      class="text-white focus:outline-none text-3xl"
      on:click={() => (isMenuOpen = !isMenuOpen)}
    >
      {#if isMenuOpen}
        ✕
      {:else}
        ☰
      {/if}
    </button>
  </div>

  <!-- Mobile menu items -->
  {#if isMenuOpen}
    <div
      transition:slide={{ duration: 300 }}
      class="md:hidden absolute top-16 left-0 w-full flex flex-col items-center bg-black/80 backdrop-blur-md py-4 space-y-4 z-20"
    >
      {#each navigationItems as item, index}
        <div
          class="capitalize text-purple-100 hover:text-purple-200 transition-colors"
        >
          <a
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            >{item.name}</a
          >
        </div>
      {/each}
    </div>
  {/if}

  <!-- Middle row with Minecraft, Logo, Discord -->
  <div
    class="w-4/5 justify-center md:justify-between flex items-center p-6 mb-12 relative z-10"
  >
    <div class="hidden md:block">
      <Minecraft />
    </div>

    <a href="/">
      <img
        src={Logo}
        alt="Starnix Logo"
        class="h-44 mr-4 animate-float duration-200 drop-shadow-purple-800/60 drop-shadow-lg [view-transition-name:logo]"
      />
    </a>
    <div class="hidden md:block"><Discord /></div>
  </div>

  <!-- Bottom SVG wave -->
  <div
    class="absolute -bottom-1 left-0 w-full mt-2 overflow-hidden leading-[0]"
  >
    <svg
      class="relative block w-full h-20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill="white"
        fill-opacity="1"
        d="M0,224L80,202.7C160,181,320,139,480,138.7C640,139,800,181,960,181.3C1120,181,1280,139,1360,117.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  </div>
</div>
