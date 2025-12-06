<script lang="ts">
  const votingPartners = [
    {
      name: "Minecraft-MP",
      url: "https://minecraft-mp.com/server/346812/vote/",
      domain: "minecraft-mp.com",
    },
    {
      name: "Minecraft Server List",
      url: "https://minecraft-server.net/details/StarnixMC/",
      domain: "minecraft-server.net",
    },
    {
      name: "Minecraft Servers",
      url: "https://minecraftservers.org/server/677380",
      domain: "minecraftservers.org",
    },
    {
      name: "TopG",
      url: "https://topg.org/minecraft-servers/server-674622",
      domain: "topg.org",
    },
    {
      name: "Top Minecraft Servers",
      url: "https://topminecraftservers.org/vote/41289",
      domain: "topminecraftservers.org",
    },
    {
      name: "MC-Servers",
      url: "https://mc-servers.com/vote/5999",
      domain: "mc-servers.com",
    },
    {
      name: "MCList",
      url: "https://mclist.io/server/66958-play-starnixmc-xyz-indian-based-cracked-surv/vote",
      domain: "mclist.io",
    },
    {
      name: "MC Server Time",
      url: "https://mcservertime.com/server-starnixmc.2736/vote",
      domain: "mcservertime.com",
    },
  ];

  function getFaviconUrl(domain: string): string {
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  }
</script>

<svelte:head>
  <title>Vote - Starnix MC</title>
  <meta
    name="description"
    content="Vote for Starnix MC on server lists and help us grow! Support our server by voting daily on all platforms."
  />
</svelte:head>

<div class="flex justify-center px-4 py-16">
  <div class="flex flex-col gap-10 max-w-4xl w-full items-center">
    <!-- Header -->
    <div class="flex flex-col gap-3 text-center">
      <h1 class="font-minecrafter text-3xl sm:text-4xl text-purple-900">
        Vote for Us
      </h1>
      <p class="text-sm text-purple-700/90 font-minecraftia max-w-xl mx-auto">
        Support Starnix MC by voting on our partner sites. Vote daily to help us
        grow and earn in-game rewards!
      </p>
    </div>

    <!-- Voting Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
      {#each votingPartners as partner}
        <a
          href={partner.url}
          target="_blank"
          rel="noopener noreferrer"
          class="bg-white rounded-lg shadow-sm border border-purple-200 p-6 transition-all hover:shadow-md hover:border-purple-300 group"
        >
          <div class="flex items-center gap-4">
            <div
              class="flex-shrink-0 w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center border border-purple-100 group-hover:bg-purple-100 transition-colors"
            >
              <img
                src={getFaviconUrl(partner.domain)}
                alt={`${partner.name} favicon`}
                class="w-8 h-8"
                loading="lazy"
              />
            </div>
            <div class="flex-1 min-w-0">
              <h2
                class="font-minecrafter text-base text-purple-900 mb-1 truncate"
              >
                {partner.name}
              </h2>
              <p class="text-xs text-purple-700/80 font-minecraftia">
                Click to vote on {partner.domain}
              </p>
            </div>
            <div class="flex-shrink-0">
              <svg
                class="w-5 h-5 text-purple-400 group-hover:text-purple-600 transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </a>
      {/each}
    </div>

    <!-- Info Box -->
    <div
      class="bg-purple-50 rounded-lg border border-purple-200 p-5 max-w-2xl w-full text-center"
    >
      <p class="text-sm text-purple-800/90 font-minecraftia leading-relaxed">
        <span class="font-semibold text-purple-900">Thank you for voting!</span>
        Your support helps us reach more players and grow our community. Vote on all
        sites daily for maximum impact.
      </p>
    </div>
  </div>
</div>
