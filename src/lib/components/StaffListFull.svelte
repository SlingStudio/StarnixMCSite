<script lang="ts">
  import type { StaffData } from "$lib/data/staff";

  interface Props {
    staff: StaffData;
  }

  let { staff }: Props = $props();

  const getMinecraftAvatar = (username: string) =>
    `https://minotar.net/avatar/${username}/128`;
</script>

<div class="flex flex-col gap-10 w-full items-center">
  <!-- Header -->
  <div class="text-center space-y-2">
    <h1 class="font-minecrafter text-3xl sm:text-4xl text-purple-900">
      Staff Team
    </h1>
    <p
      class="text-sm sm:text-base text-purple-700/90 font-minecraftia max-w-lg mx-auto"
    >
      Meet our dedicated staff team who keep Starnix MC running smoothly and
      ensure everyone has a great experience!
    </p>
  </div>

  <!-- Staff Roles -->
  {#each Object.entries(staff) as [role, roleData]}
    {#if roleData.staffs.length > 0}
      <div class="w-full">
        <!-- Role Header -->
        <div class="flex items-center gap-3 mb-4">
          <div
            class="w-1.5 h-8 rounded-full"
            style="background-color: {roleData.roleColor};"
          ></div>
          <h2
            class="font-minecrafter text-xl sm:text-2xl"
            style="color: {roleData.roleColor};"
          >
            {role}
          </h2>
          <div class="flex-1 h-px bg-purple-200"></div>
        </div>

        <!-- Staff Grid -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {#each roleData.staffs as member}
            <div
              class="bg-white rounded-lg border-2 p-4 text-center shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105"
              style="border-color: {roleData.roleColor};"
            >
              <div class="flex justify-center mb-3">
                <div
                  class="relative p-1 rounded-lg"
                  style="background-color: {roleData.roleColor};"
                >
                  <img
                    src={getMinecraftAvatar(member.userName)}
                    alt="{member.userName}'s Minecraft avatar"
                    class="w-24 h-24 rounded-md bg-gray-100 transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    onerror={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "https://crafatar.com/avatars/MHF_Steve?size=128&overlay";
                    }}
                  />
                </div>
              </div>
              <h3
                class="font-minecrafter text-base truncate"
                style="color: {roleData.roleColor};"
              >
                {member.userName}
              </h3>
              <p class="text-xs text-purple-700/80 font-minecraftia truncate">
                {member.discordUsername}
              </p>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  {/each}

  <!-- Info Box -->
  <div
    class="bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg border border-purple-300 p-4 max-w-xl w-full text-center shadow-sm"
  >
    <p class="text-sm sm:text-base text-purple-900 font-minecraftia">
      <span class="font-semibold">Want to join our staff team?</span> We're always
      looking for dedicated players to help us grow. Keep an eye on our Discord for
      staff applications!
    </p>
  </div>
</div>
