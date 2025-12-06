<script lang="ts">
  const discordLink = "https://discord.gg/p47REYm7xN";

  const supportItems = [
    {
      title: "Appeal",
      description: "Submit an appeal for bans, mutes, or other punishments.",
      details: "and open a ticket to get started.",
      colSpan: "md:col-span-1",
    },
    {
      title: "Server Issues",
      description: "Report technical problems or server-related issues.",
      details: "and open a ticket for assistance.",
      colSpan: "md:col-span-1",
    },
    {
      title: "Store Issues",
      description:
        "Get help with purchases, payments, or store-related inquiries.",
      details:
        "and open a ticket, or email us at the address listed on our Tebex store.",
      colSpan: "md:col-span-2",
    },
  ];
</script>

<svelte:head>
  <title>Support - Starnix MC</title>
  <meta
    name="description"
    content="Get support for Starnix MC - Join our Discord server for help with appeals, store issues, and more."
  />
</svelte:head>

<div class="flex justify-center px-4 py-5">
  <div class="flex flex-col gap-10 max-w-4xl w-full items-center">
    <!-- Header -->
    <div class="flex flex-col gap-3 text-center">
      <h1 class="font-minecrafter text-3xl sm:text-4xl text-purple-900">
        Support
      </h1>
      <p class="text-sm text-purple-700/90 font-minecraftia max-w-xl mx-auto">
        Choose a category below to get help
      </p>
    </div>

    <!-- Support Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
      {#each supportItems as item}
        <div
          class="bg-white rounded-lg shadow-sm border border-purple-200 p-6 text-center transition-all hover:shadow-md hover:border-purple-300 {item.colSpan}"
        >
          <h2 class="font-minecrafter text-xl mb-3 text-purple-900">
            {item.title}
          </h2>
          <p
            class="text-sm text-purple-800/90 font-minecraftia mb-3 leading-relaxed"
          >
            {item.description}
          </p>
          <p class="text-xs text-purple-700/80 font-minecraftia">
            <a
              href={discordLink}
              target="_blank"
              rel="noopener noreferrer"
              class="font-medium underline underline-offset-2 hover:text-purple-900 transition-colors"
            >
              Join our Discord
            </a>
            {" "}{item.details}
          </p>
        </div>
      {/each}
    </div>
  </div>
</div>
