<script lang="ts">
  import {
    nearestProxyIP,
    playerCount,
    initializeMinecraftData,
  } from "$lib/data/minecraft";
  import { onMount } from "svelte";

  let clickedCopy = $state(false);

  function copyIP() {
    navigator.clipboard.writeText($nearestProxyIP);
    clickedCopy = true;
    setTimeout(() => {
      clickedCopy = false;
    }, 1000);
  }

  onMount(() => {
    initializeMinecraftData();
  });
</script>

<div
  class="font-minecrafter relative flex flex-row items-center gap-4 cursor-pointer active:scale-95 hover:scale-102 transition-all"
  onclick={copyIP}
  onkeydown={(e) => (e.key === "Enter" || e.key === " " ? copyIP() : null)}
  role="button"
  tabindex="0"
>
  <div
    class="h-20 w-20 rounded-2xl bg-purple-800 relative flex items-center justify-center"
  >
    <span
      class="absolute -top-2 -left-2 text-sm text-[#3D0075] bg-white px-3 py-1 items-center rounded-full text-center font-bold shadow-lg shadow-purple-900/30"
    >
      {$playerCount}
    </span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="w-9 h-9 text-rose-200"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
        clip-rule="evenodd"
      />
    </svg>
  </div>
  <div class="items-center text-left flex flex-col">
    <p>
      PLAY NOW<br /><span class="text-xs">
        {#if clickedCopy}
          IP COPIED
        {:else}
          COPY IP
        {/if}
      </span>
    </p>
  </div>
</div>
