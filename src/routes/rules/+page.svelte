<script lang="ts">
  import RulesSection from "$lib/components/RulesSection.svelte";

  let openAccordions: Set<number> = new Set();

  const discordRules = [
    {
      title: "Be Respectful",
      description:
        "This means no mean, rude, or harassing comments. Treat others the way you want to be treated.",
      examples: [
        "✓ Engaging in friendly conversations",
        "✓ Being supportive and helpful to others",
        "✗ Making fun of someone's questions or ideas",
        "✗ Using derogatory or insulting language",
      ],
    },
    {
      title: "No Inappropriate Language",
      description:
        "Use of profanity should be kept to a reasonable minimum. Any derogatory language towards any user is prohibited. Swearing is permitted in casual channels only, while official help and code channels should be kept free of any profane language.",
      examples: [
        "✓ Casual swearing in general chat channels",
        "✓ Keeping help channels professional",
        "✗ Excessive profanity that disrupts conversation",
        "✗ Using slurs or derogatory terms",
      ],
    },
    {
      title: "No Spamming",
      description:
        "Do not send a lot of small messages right after each other. These disrupt chat and make it hard to scroll through the server. Please keep your messages at least 5 words long while chatting.",
      examples: [
        "✓ Combining thoughts into one message",
        "✓ Waiting for responses before sending more",
        "✗ Sending 'hi' 'how' 'are' 'you' in separate messages",
        "✗ Repeatedly posting the same message",
      ],
    },
    {
      title: "No NSFW Material",
      description:
        "No pornographic, adult, or other NSFW material. The server provides a safe place to share art, videos, and creative content – not inappropriate material.",
      examples: [
        "✓ Sharing creative builds and screenshots",
        "✓ Posting family-friendly memes",
        "✗ Posting sexually explicit content",
        "✗ Sharing graphic or disturbing images",
      ],
    },
    {
      title: "No Advertisements",
      description:
        "No invasive advertising, whether for other communities or streams. You can post your content in the media channel if it's relevant and provides actual value for the community.",
      examples: [
        "✓ Sharing relevant Minecraft content in media channels",
        "✓ Posting your builds or creations",
        "✗ DMing members with server invites",
        "✗ Promoting unrelated Discord servers",
      ],
    },
    {
      title: "No Offensive Names & Profile Pictures",
      description:
        "Keep your display name, username, and profile picture appropriate and respectful. This applies to both your Discord username and server nickname.",
      examples: [
        "✓ Using appropriate usernames and avatars",
        "✓ Changing offensive content when asked",
        "✗ Names with slurs or offensive terms",
        "✗ Profile pictures with inappropriate imagery",
      ],
    },
    {
      title: "No Server Raiding",
      description:
        "Server raiding is against Discord's Terms of Service. Any attempt to raid, coordinate raids, or bypass these rules can result in a permanent ban.",
      examples: [
        "✓ Reporting raid attempts to moderators",
        "✓ Being a positive community member",
        "✗ Organizing mass joins to spam",
        "✗ Coordinating disruptive behavior",
      ],
    },
    {
      title: "No Threats",
      description:
        "Threats of any kind are strictly prohibited and will result in immediate action. This includes threats of violence, doxxing, or other harmful actions.",
      examples: [
        "✓ Resolving conflicts peacefully",
        "✓ Reporting threatening behavior",
        "✗ Threatening to harm someone",
        "✗ Threatening to leak personal information",
      ],
    },
    {
      title: "No Ear Rape in Voice Channels",
      description:
        "Playing extremely loud, distorted, or disturbing audio in voice channels is prohibited. Keep volume levels reasonable and respectful.",
      examples: [
        "✓ Playing music at reasonable volumes",
        "✓ Using voice chat for conversation",
        "✗ Playing extremely loud sound effects",
        "✗ Using soundboards to annoy others",
      ],
    },
    {
      title: "No False or Misleading Information",
      description:
        "Fact-check any information you share and only share reliable sources. Spreading misinformation undermines trust and integrity within the community.",
      examples: [
        "✓ Verifying facts before sharing",
        "✓ Citing sources when sharing news",
        "✗ Spreading rumors without verification",
        "✗ Sharing fake screenshots or edited content",
      ],
    },
    {
      title: "Follow Channel-Specific Guidelines",
      description:
        "Each channel has specific guidelines for allowed content. Follow these guidelines and respect the purpose of each channel.",
      examples: [
        "✓ Reading channel descriptions before posting",
        "✓ Using appropriate channels for topics",
        "✗ Posting memes in support channels",
        "✗ Off-topic discussions in announcement channels",
      ],
    },
    {
      title: "No Hacks, Cheats, or Unauthorized Tools",
      description:
        "Sharing or distributing hacks, cheats, exploits, or other unauthorized tools and services is strictly prohibited.",
      examples: [
        "✓ Reporting exploits to staff privately",
        "✓ Playing fairly and legitimately",
        "✗ Sharing hack clients or cheating tools",
        "✗ Distributing cracked or pirated software",
      ],
    },
    {
      title: "No Viruses or Malicious Software",
      description:
        "Sharing or distributing viruses, malware, or other malicious software can harm the server and its members and is strictly prohibited.",
      examples: [
        "✓ Scanning files before sharing",
        "✓ Warning others about suspicious links",
        "✗ Sending infected files or programs",
        "✗ Sharing phishing links or scam websites",
      ],
    },
    {
      title: "No Illegal Content",
      description:
        "Sharing or distributing illegal drugs, controlled substances, or any other illegal content is strictly prohibited.",
      examples: [
        "✓ Keeping discussions legal and appropriate",
        "✓ Reporting illegal content to staff",
        "✗ Promoting or selling illegal substances",
        "✗ Sharing pirated content or illegal downloads",
      ],
    },
    {
      title: "No Scamming",
      description:
        "Scamming other players in DMs or in the server is not allowed. This includes fraudulent trades, fake giveaways, or deceptive practices.",
      examples: [
        "✓ Being honest in all transactions",
        "✓ Reporting suspected scammers",
        "✗ Promising items you don't intend to give",
        "✗ Creating fake giveaways or raffles",
      ],
    },
    {
      title: "No Harassment",
      description:
        "Harassing players in DMs or on the server is strictly forbidden. This includes persistent unwanted contact, bullying, or targeting individuals.",
      examples: [
        "✓ Respecting when someone asks to stop",
        "✓ Blocking and reporting harassers",
        "✗ Repeatedly messaging someone who asked you to stop",
        "✗ Targeting individuals with negative comments",
      ],
    },
  ];

  const minecraftRules = [
    {
      title: "No Griefing",
      description:
        "Don't destroy, damage, or grief other players' builds without permission. This includes breaking blocks, placing unwanted blocks, or damaging structures in any way.",
      examples: [
        "✓ Respecting other players' builds and property",
        "✓ Asking permission before modifying anything",
        "✓ Reporting griefing to staff immediately",
        "✗ Breaking blocks in someone's build",
        "✗ Placing lava/water to damage builds",
        "✗ Destroying farms or redstone contraptions",
      ],
    },
    {
      title: "No Spamming",
      description:
        "Don't spam chat with repeated messages, commands, or excessive use of caps. Keep chat clean and readable for everyone.",
      examples: [
        "✓ Sending messages at a reasonable pace",
        "✓ Using chat for meaningful communication",
        "✓ Waiting between command uses",
        "✗ Repeating the same message multiple times",
        "✗ Flooding chat with nonsense",
        "✗ Spamming commands rapidly",
      ],
    },
    {
      title: "No Advertising",
      description:
        "Don't advertise other servers, Discord servers, websites, or services without permission from staff. This includes sharing IPs or links to competing servers.",
      examples: [
        "✓ Talking about Starnix MC features",
        "✓ Sharing relevant game tips and resources",
        "✓ Asking staff before posting any links",
        "✗ Posting other Minecraft server IPs",
        "✗ Advertising Discord servers",
        "✗ Promoting commercial websites or services",
      ],
    },
    {
      title: "No Cursing/No Constant Cursing",
      description:
        "Keep language appropriate and family-friendly. Excessive cursing, profanity, or inappropriate language is not allowed. Occasional mild language may be tolerated but don't overdo it.",
      examples: [
        "✓ Using appropriate language in chat",
        "✓ Being respectful in communication",
        "✓ Keeping conversations family-friendly",
        "✗ Using excessive profanity",
        "✗ Cursing in every message",
        "✗ Using offensive or vulgar language",
      ],
    },
    {
      title: "No Trolling/Flaming",
      description:
        "Don't harass, troll, or flame other players. This includes provoking arguments, insulting others, or intentionally annoying players to get a reaction.",
      examples: [
        "✓ Being kind and helpful to other players",
        "✓ Resolving conflicts peacefully",
        "✓ Treating everyone with respect",
        "✗ Intentionally annoying or harassing players",
        "✗ Starting arguments or drama",
        "✗ Insulting or mocking other players",
      ],
    },
    {
      title: "No Banned Items (Tekkit Rule)",
      description:
        "Certain items may be banned on modded servers (like Tekkit) due to performance or exploit issues. Check the banned items list and don't craft, use, or distribute prohibited items.",
      examples: [
        "✓ Checking the banned items list",
        "✓ Reporting banned items if found",
        "✓ Using allowed alternatives",
        "✗ Crafting banned items",
        "✗ Using exploits with restricted items",
        "✗ Sharing banned items with other players",
      ],
    },
    {
      title: "No Asking for OP, Ranks, or Items",
      description:
        "Don't ask staff for operator status, ranks, or free items. Ranks are earned through gameplay, donations, or staff selection. Items should be obtained through legitimate gameplay.",
      examples: [
        "✓ Earning items through gameplay",
        "✓ Trading fairly with other players",
        "✓ Applying for staff positions properly",
        "✗ Asking for OP or creative mode",
        "✗ Begging for ranks or permissions",
        "✗ Requesting free items from staff",
      ],
    },
    {
      title: "Respect all Players",
      description:
        "Treat all players with respect regardless of their rank, skill level, or background. Be kind, helpful, and inclusive to create a positive community atmosphere.",
      examples: [
        "✓ Helping new players learn the server",
        "✓ Being patient and understanding",
        "✓ Creating a welcoming environment",
        "✗ Bullying or excluding players",
        "✗ Making fun of less experienced players",
        "✗ Being disrespectful or rude",
      ],
    },
    {
      title: "Obey Staff - They're the Law",
      description:
        "Listen to and follow instructions from all staff members. Staff decisions are final. If you disagree with a decision, appeal respectfully through proper channels, don't argue in-game.",
      examples: [
        "✓ Following staff instructions immediately",
        "✓ Respecting staff decisions",
        "✓ Using proper appeal channels if needed",
        "✗ Arguing with staff members",
        "✗ Ignoring staff warnings",
        "✗ Disrespecting or undermining staff",
      ],
    },
    {
      title: "No Racist or Sexist Remarks",
      description:
        "Absolutely no racism, sexism, homophobia, or discrimination of any kind. This includes slurs, hate speech, or discriminatory comments. Zero tolerance policy.",
      examples: [
        "✓ Treating everyone equally and fairly",
        "✓ Being inclusive and welcoming",
        "✓ Reporting discriminatory behavior",
        "✗ Using racial slurs or hate speech",
        "✗ Making sexist or discriminatory jokes",
        "✗ Harassing players based on identity",
      ],
    },
    {
      title: "No Mods/Hacks (including Auto-Click)",
      description:
        "Using hacked clients, x-ray, fly hacks, auto-clickers, or any unfair advantage mods is strictly prohibited. Only approved client-side mods are allowed (Optifine, minimaps, etc.).",
      examples: [
        "✓ Using Optifine or performance mods",
        "✓ Using minimap mods without cave mapping",
        "✓ Playing with vanilla mechanics",
        "✗ Using x-ray texture packs or mods",
        "✗ Using auto-clickers or macros",
        "✗ Using fly hacks, speed hacks, or kill aura",
      ],
    },
    {
      title: "No Full Caps Messages",
      description:
        "Don't type messages in ALL CAPS. It's considered shouting and makes chat harder to read. Use normal capitalization for better communication.",
      examples: [
        "✓ Using normal capitalization",
        "✓ Emphasizing with *asterisks* when needed",
        "✓ Writing clearly and respectfully",
        "✗ TYPING ENTIRE MESSAGES IN CAPS",
        "✗ SHOUTING IN CHAT REPEATEDLY",
        "✗ Using caps to bypass chat filters",
      ],
    },
    {
      title: "No 1x1 Towers",
      description:
        "Don't create 1x1 pillar towers (also called sky bridges or dirt pillars) that remain in the world. Clean up after yourself when building or exploring. Remove temporary pillars and scaffolding.",
      examples: [
        "✓ Building proper staircases or ladders",
        "✓ Removing temporary pillars after use",
        "✓ Using proper scaffolding that you clean up",
        "✗ Leaving 1x1 dirt/stone pillars everywhere",
        "✗ Creating ugly pillars in public areas",
        "✗ Not cleaning up temporary structures",
      ],
    },
    {
      title: "No Alt-Accounts are allowed!",
      description:
        "Using alternate (alt) accounts is not permitted. Each player should only use one account. Alt accounts are often used to bypass bans or gain unfair advantages.",
      examples: [
        "✓ Using only your main account",
        "✓ Reporting suspected alt accounts",
        "✓ Playing fairly with one account",
        "✗ Using multiple accounts for extra claims",
        "✗ Creating alts to bypass bans",
        "✗ Using alts for AFK farms or exploits",
      ],
    },
    {
      title: "Anti-AFK is not allowed!",
      description:
        "Using anti-AFK methods, machines, or techniques to avoid being kicked for inactivity is prohibited. This includes AFK pools, auto-walk, or any method to stay online while inactive.",
      examples: [
        "✓ Being actively present when playing",
        "✓ Logging out when you need to step away",
        "✓ Playing legitimately without automation",
        "✗ Using AFK pools or water streams",
        "✗ Using auto-walk or movement macros",
        "✗ Placing objects on keyboard to stay active",
      ],
    },
  ];

  const modAdminRules = [
    {
      title: "Be Responsible with Privileges",
      description:
        "As a Builder/Mod, you have been given special privileges and permissions. Use them responsibly and only for their intended purposes. Don't abuse your powers or use them for personal gain.",
      examples: [
        "✓ Using permissions to help players appropriately",
        "✓ Acting professionally and setting a good example",
        "✓ Following all player rules plus staff guidelines",
        "✗ Abusing creative mode or permissions",
        "✗ Using powers for personal advantage",
        "✗ Breaking player rules because you're staff",
      ],
    },
    {
      title: "Don't Spawn Blocks or Items for Players",
      description:
        "Do not spawn items, blocks, or resources for other players, even if they ask. Players should obtain items through legitimate gameplay, trading, or shops.",
      examples: [
        "✓ Directing players to shops or resources",
        "✓ Teaching players how to obtain items",
        "✓ Helping players learn game mechanics",
        "✗ Spawning diamonds or rare items for players",
        "✗ Giving players creative-spawned blocks",
        "✗ Using permissions to give unfair advantages",
      ],
    },
    {
      title: "Only Buy and Sell Legit Items When Trading",
      description:
        "When participating in the server economy or trading with players, only buy and sell items that were obtained legitimately through survival gameplay. Don't trade spawned or creative items.",
      examples: [
        "✓ Trading items you earned in survival",
        "✓ Buying from player shops legitimately",
        "✓ Maintaining economy balance and fairness",
        "✗ Selling spawned or creative items",
        "✗ Trading items obtained through staff powers",
        "✗ Manipulating the economy with spawned goods",
      ],
    },
    {
      title: "Only Help Build Using Legit Items and Blocks",
      description:
        "When helping other players with their builds, only use items and blocks that were obtained through legitimate survival gameplay. Don't use creative mode or spawned items to build for others.",
      examples: [
        "✓ Helping with designs and planning",
        "✓ Building with legitimately obtained materials",
        "✓ Teaching building techniques and strategies",
        "✗ Using creative mode to build for players",
        "✗ Spawning blocks to complete builds",
        "✗ Giving players unfair building advantages",
      ],
    },
    {
      title: "No Power Abuse",
      description:
        "Never abuse your staff powers, permissions, or position. This includes using powers for personal gain, punishing players unfairly, or giving yourself advantages. Power abuse will result in immediate demotion.",
      examples: [
        "✓ Using powers only for moderation duties",
        "✓ Being fair and impartial with all players",
        "✓ Reporting any misuse of powers by other staff",
        "✗ Using vanish mode to spy on players unfairly",
        "✗ Banning or muting players for personal reasons",
        "✗ Using staff commands for personal benefit",
      ],
    },
  ];
</script>

<svelte:head>
  <title>Rules - Starnix MC</title>
  <meta
    name="description"
    content="Community rules for Starnix MC Discord server and Minecraft server. Follow these guidelines to ensure a positive experience for everyone."
  />
</svelte:head>

<div class="flex justify-center px-4 py-16">
  <div class="flex flex-col gap-10 max-w-4xl w-full">
    <!-- Header -->
    <div class="flex flex-col gap-3 text-center">
      <h1 class="font-minecrafter text-3xl sm:text-4xl text-purple-900">
        Community Rules
      </h1>
      <p class="text-sm text-purple-700/90 font-minecraftia max-w-2xl mx-auto">
        Please read and follow these rules to ensure a positive experience for
        everyone in our community. Violations may result in warnings, mutes,
        kicks, or bans.
      </p>
    </div>

    <!-- Discord Rules Section -->
    <RulesSection
      title="Discord Rules"
      iconType="discord"
      rules={discordRules}
      bind:openAccordions
      startIndex={0}
    />

    <!-- Minecraft Player Rules Section -->
    <RulesSection
      title="Minecraft Server Rules - Player Rules"
      iconType="minecraft"
      rules={minecraftRules}
      bind:openAccordions
      startIndex={discordRules.length}
    />

    <!-- Minecraft Mod/Admin Rules Section -->
    <RulesSection
      title="Minecraft Server Rules - Mod/Admin Rules"
      iconType="minecraft"
      rules={modAdminRules}
      bind:openAccordions
      startIndex={discordRules.length + minecraftRules.length}
    />

    <!-- Important Notice -->
    <div
      class="bg-gradient-to-r from-red-100 to-red-50 rounded-lg border-2 border-red-400 p-6 text-center shadow-lg"
    >
      <div class="flex items-center justify-center gap-2 mb-3">
        <svg
          class="w-6 h-6 text-red-700"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
        <p class="text-base font-semibold text-red-950 font-minecrafter">
          IMPORTANT NOTICE
        </p>
      </div>
      <p
        class="text-sm text-red-900 font-minecraftia leading-relaxed font-medium"
      >
        Not following these rules will result in punishment accordingly,
        including warnings, mutes, kicks, temporary bans, or permanent bans
        depending on the severity of the violation. Staff decisions are final.
      </p>
    </div>

    <!-- Help Section -->
    <div
      class="bg-purple-50 rounded-lg border border-purple-200 p-5 text-center"
    >
      <p class="text-sm text-purple-800/90 font-minecraftia leading-relaxed">
        <span class="font-semibold text-purple-900"
          >Questions about the rules?</span
        >
        Open a support ticket in our Discord server and our staff team will be happy
        to help clarify any rules or answer your questions.
      </p>
    </div>
  </div>
</div>
