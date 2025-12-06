<script lang="ts">
  import { page } from "$app/state";
</script>

<svelte:head>
  <title>{page.status} - Starnix MC</title>
  <meta
    name="description"
    content="Oops! Something went wrong on Starnix MC."
  />
</svelte:head>

<div class="flex justify-center px-4 py-12 min-h-[60vh]">
  <div class="flex flex-col gap-8 max-w-4xl w-full items-center text-center">
    <!-- Error Status -->
    <div class="space-y-4">
      <h1 class="font-minecrafter text-6xl sm:text-8xl text-purple-900">
        {page.status}
      </h1>

      {#if page.status === 404}
        <h2 class="font-minecrafter text-2xl sm:text-3xl text-purple-800">
          Page Not Found
        </h2>
        <p
          class="text-base sm:text-lg text-purple-700/90 font-minecraftia max-w-2xl mx-auto leading-relaxed"
        >
          Looks like you've wandered into uncharted territory! This page doesn't
          exist in our world.
        </p>
      {:else if page.status === 500}
        <h2 class="font-minecrafter text-2xl sm:text-3xl text-purple-800">
          Server Error
        </h2>
        <p
          class="text-base sm:text-lg text-purple-700/90 font-minecraftia max-w-2xl mx-auto leading-relaxed"
        >
          Oops! Our server encountered an unexpected error. Please try again
          later.
        </p>
      {:else}
        <h2 class="font-minecrafter text-2xl sm:text-3xl text-purple-800">
          {page.error?.message || "An Error Occurred"}
        </h2>
        <p
          class="text-base sm:text-lg text-purple-700/90 font-minecraftia max-w-2xl mx-auto leading-relaxed"
        >
          Something went wrong. Don't worry, it's not your fault!
        </p>
      {/if}
    </div>

    <!-- Error Details (in development) -->
    {#if page.error?.message && import.meta.env.DEV}
      <div
        class="bg-purple-100/50 rounded-lg border border-purple-300 p-6 max-w-2xl w-full text-left"
      >
        <h3 class="font-minecrafter text-lg text-purple-900 mb-2">
          Error Details:
        </h3>
        <p class="text-sm text-purple-800 font-minecraftia break-words">
          {page.error.message}
        </p>
      </div>
    {/if}

    <!-- Call to Action -->
    <div
      class="bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg border border-purple-300 p-6 max-w-2xl w-full space-y-4"
    >
      <h3 class="font-minecrafter text-xl sm:text-2xl text-purple-900">
        What can you do?
      </h3>
      <div class="space-y-3 text-sm sm:text-base font-minecraftia">
        <a
          href="/"
          class="block bg-purple-600 hover:bg-purple-700 text-white font-minecrafter px-6 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          Return Home
        </a>
        <div class="flex flex-col sm:flex-row gap-3">
          <a
            href="/support"
            class="flex-1 bg-purple-500 hover:bg-purple-600 text-white font-minecrafter px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Contact Support
          </a>
          <a
            href="/staff"
            class="flex-1 bg-purple-500 hover:bg-purple-600 text-white font-minecrafter px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Meet Our Staff
          </a>
        </div>
      </div>
    </div>

    <!-- Helpful Links -->
    <div class="text-center space-y-2">
      <p class="text-sm text-purple-700/90 font-minecraftia">
        Looking for something specific?
      </p>
      <div class="flex flex-wrap justify-center gap-2">
        <a
          href="/rules"
          class="text-purple-600 hover:text-purple-800 font-minecraftia text-sm underline"
        >
          Server Rules
        </a>
        <span class="text-purple-400">•</span>
        <a
          href="/vote"
          class="text-purple-600 hover:text-purple-800 font-minecraftia text-sm underline"
        >
          Vote for Us
        </a>
        <span class="text-purple-400">•</span>
        <a
          href="/privacy"
          class="text-purple-600 hover:text-purple-800 font-minecraftia text-sm underline"
        >
          Privacy Policy
        </a>
        <span class="text-purple-400">•</span>
        <a
          href="/terms"
          class="text-purple-600 hover:text-purple-800 font-minecraftia text-sm underline"
        >
          Terms of Service
        </a>
      </div>
    </div>
  </div>
</div>
