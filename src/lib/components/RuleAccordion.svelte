<script lang="ts">
  import { slide } from "svelte/transition";

  interface Props {
    rule: { title: string; description: string; examples: string[] };
    index: number;
    isOpen: boolean;
    accentColor?: "purple" | "green" | "discord";
    onToggle: () => void;
  }

  let {
    rule,
    index,
    isOpen,
    accentColor = "purple",
    onToggle,
  }: Props = $props();

  let isPurple = $derived(accentColor === "purple");
  let isGreen = $derived(accentColor === "green");
  let isDiscord = $derived(accentColor === "discord");
</script>

<div
  class="bg-white rounded-lg shadow-sm border overflow-hidden transition-all hover:shadow-md {isPurple
    ? 'border-purple-200 hover:border-purple-300'
    : isDiscord
      ? 'border-indigo-200 hover:border-indigo-300'
      : 'border-green-200 hover:border-green-300'}"
>
  <button
    onclick={onToggle}
    class="w-full p-4 flex items-center justify-between text-left transition-colors {isPurple
      ? 'hover:bg-purple-50/50'
      : isDiscord
        ? 'hover:bg-indigo-50/50'
        : 'hover:bg-green-50/50'}"
  >
    <div class="flex items-center gap-3 flex-1 min-w-0">
      <span
        class="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-minecrafter text-xs {isPurple
          ? 'bg-purple-100 text-purple-700'
          : isDiscord
            ? 'bg-indigo-100 text-indigo-700'
            : 'bg-green-100 text-green-700'}"
      >
        {index + 1}
      </span>
      <h3
        class="font-minecrafter text-sm truncate {isPurple
          ? 'text-purple-900'
          : isDiscord
            ? 'text-indigo-900'
            : 'text-green-900'}"
      >
        {rule.title}
      </h3>
    </div>
    <svg
      class="w-5 h-5 flex-shrink-0 transition-transform {isPurple
        ? 'text-purple-600'
        : isDiscord
          ? 'text-indigo-600'
          : 'text-green-600'} {isOpen ? 'rotate-180' : ''}"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>

  {#if isOpen}
    <div
      class="px-4 pb-4 pt-2 border-t {isPurple
        ? 'border-purple-100'
        : isDiscord
          ? 'border-indigo-100'
          : 'border-green-100'}"
      transition:slide={{ duration: 250 }}
    >
      <p
        class="text-sm font-minecraftia leading-relaxed mb-3 {isPurple
          ? 'text-purple-800/90'
          : isDiscord
            ? 'text-indigo-800/90'
            : 'text-green-800/90'}"
      >
        {rule.description}
      </p>

      <div
        class="rounded-lg p-3 border {isPurple
          ? 'bg-purple-50/50 border-purple-100'
          : isDiscord
            ? 'bg-indigo-50/50 border-indigo-100'
            : 'bg-green-50/50 border-green-100'}"
      >
        <p
          class="text-xs font-semibold font-minecraftia mb-2 {isPurple
            ? 'text-purple-900'
            : isDiscord
              ? 'text-indigo-900'
              : 'text-green-900'}"
        >
          Examples:
        </p>
        <ul class="space-y-1.5">
          {#each rule.examples as example, i (i)}
            {@const isPositive = example.startsWith("✓")}
            <li class="text-xs font-minecraftia flex items-start gap-2">
              <span class={isPositive ? "text-green-600" : "text-red-600"}>
                {example.charAt(0)}
              </span>
              <span
                class="flex-1 px-2 py-0.5 rounded {isPositive
                  ? 'text-green-700 bg-green-50'
                  : 'text-red-700 bg-red-50'}"
              >
                {example.substring(2)}
              </span>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  {/if}
</div>
