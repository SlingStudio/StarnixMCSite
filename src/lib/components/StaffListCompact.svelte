<script lang="ts">
  import type { StaffData } from "$lib/data/staff";

  interface Props {
    staff: StaffData;
  }

  let { staff }: Props = $props();

  const getMinecraftAvatar = (username: string) =>
    `https://minotar.net/avatar/${username}/64`;
</script>

<div class="w-full space-y-6">
  <!-- Section Header -->
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

  <!-- Compact Staff List -->
  <div class="space-y-6">
    {#each Object.entries(staff) as [role, roleData]}
      {#if roleData.staffs.length > 0}
        <div class="w-full">
          <!-- Role Header (Compact) -->
          <div class="flex items-center gap-2 mb-3">
            <div
              class="w-1 h-6 rounded-full"
              style="background-color: {roleData.roleColor};"
            ></div>
            <h3
              class="font-minecrafter text-lg sm:text-xl"
              style="color: {roleData.roleColor};"
            >
              {role}
            </h3>
          </div>

          <!-- Compact Staff Cards -->
          <div class="flex flex-wrap gap-3">
            {#each roleData.staffs as member}
              <div
                class="bg-white rounded-lg border-2 p-3 flex items-center gap-3 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                style="border-color: {roleData.roleColor};"
              >
                <div
                  class="relative p-0.5 rounded"
                  style="background-color: {roleData.roleColor};"
                >
                  <img
                    src={getMinecraftAvatar(member.userName)}
                    alt="{member.userName}'s avatar"
                    class="w-12 h-12 rounded bg-gray-100"
                    loading="lazy"
                    onerror={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "https://crafatar.com/avatars/MHF_Steve?size=64&overlay";
                    }}
                  />
                </div>
                <div class="flex flex-col min-w-0">
                  <h4
                    class="font-minecrafter text-sm truncate"
                    style="color: {roleData.roleColor};"
                  >
                    {member.userName}
                  </h4>
                  <p
                    class="text-xs text-purple-700/70 font-minecraftia truncate"
                  >
                    {member.discordUsername}
                  </p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/if}
    {/each}
  </div>

  <!-- Join Staff CTA -->
  <div
    class="bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg border border-purple-300 p-4 text-center shadow-sm"
  >
    <p class="text-sm sm:text-base text-purple-900 font-minecraftia">
      <span class="font-semibold">Want to join our staff team?</span> Keep an eye
      on our Discord for applications!
    </p>
  </div>
</div>
