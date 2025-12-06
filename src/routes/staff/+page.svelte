<script lang="ts">
  import StaffListCompact from "$lib/components/StaffListCompact.svelte";
  import StaffListFull from "$lib/components/StaffListFull.svelte";
  import { staff } from "$lib/data/staff";
</script>

<svelte:head>
  <title>Staff Team - Starnix MC</title>
  <meta
    name="description"
    content="Meet the Starnix MC staff team. Our dedicated team of owners, admins, moderators, helpers, and builders work hard to make your experience great."
  />
</svelte:head>

<div class="flex justify-center px-4 py-12">
  <div class="max-w-6xl w-full">
    <StaffListCompact {staff} />
  </div>
</div>
