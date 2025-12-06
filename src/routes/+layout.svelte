<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/icon.png";
  import { onNavigate } from "$app/navigation";

  import Navbar from "$lib/components/Navbar.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import BackToTop from "$lib/components/BackToTop.svelte";

  let { children } = $props();

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="flex flex-col">
  <Navbar />
  <main
    class="px-4 w-full flex flex-col items-center [view-transition-name:main-content]"
  >
    {@render children()}
  </main>
  <Footer />
  <BackToTop />
</div>
