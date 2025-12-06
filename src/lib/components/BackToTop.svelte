<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  let isVisible = false;

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  onMount(() => {
    const handleScroll = () => {
      isVisible = window.scrollY > 300;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
</script>

{#if isVisible}
  <button
    on:click={scrollToTop}
    class="fixed bottom-8 right-8 z-50 bg-purple-600 hover:bg-purple-700 text-white w-8 h-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 rounded-lg flex items-center justify-center"
    aria-label="Back to top"
    transition:fade={{ duration: 300, easing: (t) => 1 - Math.pow(1 - t, 3) }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="3"
      stroke="currentColor"
      class="size-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m4.5 15.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  </button>
{/if}
