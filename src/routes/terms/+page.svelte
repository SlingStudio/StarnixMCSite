<script lang="ts">
  import { onMount } from "svelte";
</script>

<svelte:head>
  <title>Terms of Service - Starnix MC</title>
  <meta
    name="description"
    content="Terms of Service for Starnix MC - Read our terms and conditions for using our Minecraft server."
  />
</svelte:head>

<div class="flex justify-center px-4 py-16">
  <div class="flex flex-col gap-8 max-w-4xl w-full">
    <!-- Header -->
    <div class="flex flex-col gap-2 text-center">
      <h1 class="font-minecrafter text-3xl sm:text-4xl text-purple-900">
        Terms of Service
      </h1>
      <p class="text-xs text-purple-700/80 font-minecraftia">
        Last Updated: {new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>

    <!-- Content -->
    <div class="space-y-6">
      <!-- Introduction -->
      <section
        class="bg-white rounded-lg shadow-sm border border-purple-200 p-5"
      >
        <h2 class="text-lg font-minecrafter text-purple-900 mb-3">
          Introduction
        </h2>
        <p class="text-sm leading-relaxed text-purple-800/90 font-minecraftia">
          Welcome to Starnix MC! By accessing or using our Minecraft server,
          website, and related services, you agree to be bound by these Terms of
          Service. Please read these terms carefully before using our services.
          If you do not agree with any part of these terms, you must not use our
          services.
        </p>
      </section>

      <!-- Acceptance of Terms -->
      <section
        class="bg-white rounded-lg shadow-sm border border-purple-200 p-5"
      >
        <h2 class="text-lg font-minecrafter text-purple-900 mb-3">
          Acceptance of Terms
        </h2>
        <p class="text-sm leading-relaxed text-purple-800/90 font-minecraftia">
          By connecting to our Minecraft server, visiting our website, or making
          purchases through our store, you acknowledge that you have read,
          understood, and agree to be bound by these Terms of Service and our
          Privacy Policy. If you are under the age of 16 (or the applicable age
          of consent in your jurisdiction), you must have parental or guardian
          consent to use our services.
        </p>
      </section>

      <!-- Server Rules and Conduct -->
      <section
        class="bg-white rounded-lg shadow-sm border border-purple-200 p-5"
      >
        <h2 class="text-lg font-minecrafter text-purple-900 mb-3">
          Server Rules and Conduct
        </h2>
        <p
          class="text-sm leading-relaxed text-purple-800/90 font-minecraftia mb-3"
        >
          By using our Minecraft server, you agree to:
        </p>
        <ul
          class="list-disc list-inside text-sm text-purple-800/90 font-minecraftia space-y-1.5 ml-3"
        >
          <li>Follow all server rules as posted on our website and Discord</li>
          <li>
            Treat other players, staff, and community members with respect
          </li>
          <li>
            Not use cheats, hacks, exploits, or unauthorized modifications
          </li>
          <li>Not engage in griefing, harassment, or disruptive behavior</li>
          <li>
            Not spam chat, advertise other servers, or share inappropriate
            content
          </li>
          <li>Not attempt to bypass bans or punishments</li>
          <li>
            Comply with Mojang's Terms of Service and End User License Agreement
          </li>
        </ul>
        <p
          class="text-sm leading-relaxed text-purple-800/90 font-minecraftia mt-3"
        >
          Violation of these rules may result in warnings, temporary
          suspensions, or permanent bans at the discretion of our staff team.
        </p>
      </section>

      <!-- Account and Access -->
      <section
        class="bg-white rounded-lg shadow-sm border border-purple-200 p-5"
      >
        <h2 class="text-lg font-minecrafter text-purple-900 mb-3">
          Account and Access
        </h2>
        <p
          class="text-sm leading-relaxed text-purple-800/90 font-minecraftia mb-3"
        >
          You are responsible for maintaining the security of your Minecraft
          account. We reserve the right to suspend or terminate access to our
          services for any reason, including but not limited to:
        </p>
        <ul
          class="list-disc list-inside text-sm text-purple-800/90 font-minecraftia space-y-1.5 ml-3"
        >
          <li>Violation of these Terms of Service or server rules</li>
          <li>Fraudulent activity or payment disputes</li>
          <li>Abusive or harmful behavior toward our community</li>
          <li>Use of compromised or shared accounts</li>
          <li>Technical or security concerns</li>
        </ul>
      </section>

      <!-- Purchases and Payments -->
      <section
        class="bg-white rounded-lg shadow-sm border border-purple-200 p-5"
      >
        <h2 class="text-lg font-minecrafter text-purple-900 mb-3">
          Purchases and Payments
        </h2>
        <p
          class="text-sm leading-relaxed text-purple-800/90 font-minecraftia mb-3"
        >
          Our store is powered by Tebex, a third-party payment processor. All
          purchases are subject to Tebex's{" "}
          <a
            href="https://checkout.tebex.io/terms"
            target="_blank"
            rel="noopener noreferrer"
            class="text-purple-600 hover:text-purple-900 underline underline-offset-2 transition-colors"
          >
            Terms of Service
          </a>. By making a purchase, you agree to the following:
        </p>
        <ul
          class="list-disc list-inside text-sm text-purple-800/90 font-minecraftia space-y-1.5 ml-3"
        >
          <li>All sales are final and non-refundable unless required by law</li>
          <li>
            Purchased items, ranks, or perks are digital goods with no
            real-world monetary value
          </li>
          <li>
            We reserve the right to modify, remove, or discontinue any items or
            perks at any time
          </li>
          <li>Chargebacks or payment disputes may result in a permanent ban</li>
          <li>
            Items are tied to your Minecraft username and are non-transferable
          </li>
          <li>
            You will not receive refunds if you are banned for violating our
            terms
          </li>
        </ul>
        <div class="bg-purple-50 border-l-4 border-purple-400 p-3 rounded mt-3">
          <p class="text-sm text-purple-800/90 font-minecraftia">
            <strong class="text-purple-900">Important:</strong> Purchases support
            our server hosting and development. All virtual items have no cash value
            and cannot be exchanged for real money.
          </p>
        </div>
      </section>

      <!-- Refund Policy -->
      <section
        class="bg-white rounded-lg shadow-sm border border-purple-200 p-5"
      >
        <h2 class="text-lg font-minecrafter text-purple-900 mb-3">
          Refund Policy
        </h2>
        <p class="text-sm leading-relaxed text-purple-800/90 font-minecraftia">
          Due to the nature of digital goods, all purchases are generally final
          and non-refundable. Exceptions may be made at our sole discretion in
          cases of technical errors, duplicate purchases, or as required by
          applicable consumer protection laws. To request a refund, open a
          support ticket in our Discord server within 7 days of purchase with a
          detailed explanation.
        </p>
      </section>

      <!-- Intellectual Property -->
      <section
        class="bg-white rounded-lg shadow-sm border border-purple-200 p-5"
      >
        <h2 class="text-lg font-minecrafter text-purple-900 mb-3">
          Intellectual Property
        </h2>
        <p
          class="text-sm leading-relaxed text-purple-800/90 font-minecraftia mb-3"
        >
          All content on our server and website, including but not limited to
          logos, designs, custom plugins, maps, and text, is the property of
          Starnix MC or its licensors and is protected by copyright and
          intellectual property laws.
        </p>
        <p class="text-sm leading-relaxed text-purple-800/90 font-minecraftia">
          Minecraft is a trademark of Mojang AB. We are not affiliated with,
          endorsed by, or associated with Mojang AB or Microsoft. All Minecraft
          content is subject to Mojang's Terms of Service and EULA.
        </p>
      </section>

      <!-- User-Generated Content -->
      <section
        class="bg-white rounded-lg shadow-sm border border-purple-200 p-5"
      >
        <h2 class="text-lg font-minecrafter text-purple-900 mb-3">
          User-Generated Content
        </h2>
        <p class="text-sm leading-relaxed text-purple-800/90 font-minecraftia">
          By playing on our server, you may create content such as builds, chat
          messages, and other in-game creations. By creating this content, you
          grant Starnix MC a non-exclusive, worldwide, royalty-free license to
          use, display, and modify this content for server operations,
          promotional purposes, and community features. We reserve the right to
          remove any content that violates our rules or terms.
        </p>
      </section>

      <!-- Data Collection and Privacy -->
      <section
        class="bg-white rounded-lg shadow-sm border border-purple-200 p-5"
      >
        <h2 class="text-lg font-minecrafter text-purple-900 mb-3">
          Data Collection and Privacy
        </h2>
        <p
          class="text-sm leading-relaxed text-purple-800/90 font-minecraftia mb-3"
        >
          We collect and process certain data to provide and improve our
          services, including:
        </p>
        <ul
          class="list-disc list-inside text-sm text-purple-800/90 font-minecraftia space-y-1.5 ml-3"
        >
          <li>Minecraft usernames and UUIDs</li>
          <li>IP addresses for security and moderation</li>
          <li>Gameplay data and statistics</li>
          <li>Purchase history and transaction data (via Tebex)</li>
          <li>Website cookies for performance and user experience</li>
        </ul>
        <p
          class="text-sm leading-relaxed text-purple-800/90 font-minecraftia mt-3"
        >
          For detailed information about our data practices, please review our
          <a
            href="/privacy"
            class="text-purple-600 hover:text-purple-900 underline underline-offset-2 transition-colors"
          >
            Privacy Policy
          </a>. We are GDPR compliant and respect your privacy rights.
        </p>
      </section>

      <!-- Limitation of Liability -->
      <section
        class="bg-white rounded-lg shadow-sm border border-purple-200 p-5"
      >
        <h2 class="text-lg font-minecrafter text-purple-900 mb-3">
          Limitation of Liability
        </h2>
        <p
          class="text-sm leading-relaxed text-purple-800/90 font-minecraftia mb-3"
        >
          Starnix MC is provided "as is" without warranties of any kind. To the
          fullest extent permitted by law:
        </p>
        <ul
          class="list-disc list-inside text-sm text-purple-800/90 font-minecraftia space-y-1.5 ml-3"
        >
          <li>
            We do not guarantee uninterrupted or error-free service availability
          </li>
          <li>We are not liable for any loss of data, items, or progress</li>
          <li>
            We are not responsible for third-party services including Tebex and
            Discord
          </li>
          <li>
            We are not liable for damages arising from use of our services
          </li>
          <li>
            Server resets, wipes, or updates may occur with or without notice
          </li>
        </ul>
      </section>

      <!-- Server Availability -->
      <section
        class="bg-white rounded-lg shadow-sm border border-purple-200 p-5"
      >
        <h2 class="text-lg font-minecrafter text-purple-900 mb-3">
          Server Availability
        </h2>
        <p class="text-sm leading-relaxed text-purple-800/90 font-minecraftia">
          We strive to maintain high server uptime and reliability, but we
          cannot guarantee continuous availability. The server may be
          temporarily unavailable due to maintenance, updates, technical issues,
          or unforeseen circumstances. We are not liable for any inconvenience
          or losses resulting from server downtime.
        </p>
      </section>

      <!-- Modifications to Services -->
      <section
        class="bg-white rounded-lg shadow-sm border border-purple-200 p-5"
      >
        <h2 class="text-lg font-minecrafter text-purple-900 mb-3">
          Modifications to Services
        </h2>
        <p class="text-sm leading-relaxed text-purple-800/90 font-minecraftia">
          We reserve the right to modify, suspend, or discontinue any aspect of
          our services at any time without prior notice. This includes but is
          not limited to server features, game modes, ranks, items, and store
          offerings. No refunds will be provided for discontinued features or
          items unless required by law.
        </p>
      </section>

      <!-- Changes to Terms -->
      <section
        class="bg-white rounded-lg shadow-sm border border-purple-200 p-5"
      >
        <h2 class="text-lg font-minecrafter text-purple-900 mb-3">
          Changes to These Terms
        </h2>
        <p class="text-sm leading-relaxed text-purple-800/90 font-minecraftia">
          We may update these Terms of Service from time to time. We will notify
          you of significant changes by posting the updated terms on this page
          and updating the "Last Updated" date. Your continued use of our
          services after changes are posted constitutes acceptance of the
          updated terms.
        </p>
      </section>

      <!-- Dispute Resolution -->
      <section
        class="bg-white rounded-lg shadow-sm border border-purple-200 p-5"
      >
        <h2 class="text-lg font-minecrafter text-purple-900 mb-3">
          Dispute Resolution
        </h2>
        <p class="text-sm leading-relaxed text-purple-800/90 font-minecraftia">
          If you have any disputes, concerns, or issues with our services,
          please contact us first by opening a support ticket in our Discord
          server. We are committed to resolving issues amicably and in
          accordance with applicable laws, including GDPR requirements.
        </p>
      </section>

      <!-- Contact Us -->
      <section
        class="bg-white rounded-lg shadow-sm border border-purple-200 p-5"
      >
        <h2 class="text-lg font-minecrafter text-purple-900 mb-3">
          Contact Us
        </h2>
        <p class="text-sm leading-relaxed text-purple-800/90 font-minecraftia">
          If you have any questions, concerns, or requests regarding these Terms
          of Service, please contact us by opening a support ticket in our
          Discord server. The Discord link can be found in the navigation bar at
          the top of this page.
        </p>
      </section>

      <!-- Severability -->
      <section
        class="bg-white rounded-lg shadow-sm border border-purple-200 p-5"
      >
        <h2 class="text-lg font-minecrafter text-purple-900 mb-3">
          Severability
        </h2>
        <p class="text-sm leading-relaxed text-purple-800/90 font-minecraftia">
          If any provision of these Terms of Service is found to be
          unenforceable or invalid, that provision will be limited or eliminated
          to the minimum extent necessary, and the remaining provisions will
          remain in full force and effect.
        </p>
      </section>

      <!-- Entire Agreement -->
      <section
        class="bg-white rounded-lg shadow-sm border border-purple-200 p-5"
      >
        <h2 class="text-lg font-minecrafter text-purple-900 mb-3">
          Entire Agreement
        </h2>
        <p class="text-sm leading-relaxed text-purple-800/90 font-minecraftia">
          These Terms of Service, together with our Privacy Policy and any other
          policies referenced herein, constitute the entire agreement between
          you and Starnix MC regarding the use of our services.
        </p>
      </section>

      <!-- Disclaimer -->
      <section class="bg-purple-50 rounded-lg border border-purple-200 p-4">
        <p class="text-xs text-purple-700/90 font-minecraftia leading-relaxed">
          <strong>Disclaimer:</strong> Starnix MC is not affiliated with Mojang AB
          or Microsoft. Minecraft is a trademark of Mojang AB. These Terms of Service
          apply only to Starnix MC services and do not supersede Mojang's Terms of
          Service or EULA.
        </p>
      </section>
    </div>
  </div>
</div>
