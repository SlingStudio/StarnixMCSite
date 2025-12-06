<script lang="ts">
  import { onMount } from "svelte";
</script>

<svelte:head>
  <title>Privacy Policy - Starnix MC</title>
  <meta
    name="description"
    content="Privacy Policy for Starnix MC - Learn how we collect, use, and protect your data."
  />
</svelte:head>

<div class="flex justify-center px-4 py-16">
  <div class="flex flex-col gap-8 max-w-4xl w-full">
    <!-- Header -->
    <div class="flex flex-col gap-2 text-center">
      <h1 class="font-minecrafter text-3xl sm:text-4xl text-purple-900">
        Privacy Policy
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
          Welcome to Starnix MC. We are committed to protecting your privacy and
          ensuring transparency about how we collect, use, and safeguard your
          personal information. This Privacy Policy explains our practices
          regarding data collection and your rights under the General Data
          Protection Regulation (GDPR) and other applicable privacy laws.
        </p>
      </section>

      <!-- Information We Collect -->
      <section
        class="bg-white rounded-lg shadow-sm border border-purple-200 p-5"
      >
        <h2 class="text-lg font-minecrafter text-purple-900 mb-3">
          Information We Collect
        </h2>
        <div class="space-y-4">
          <div>
            <h3 class="text-base font-minecrafter text-purple-800 mb-2">
              1. Minecraft Data
            </h3>
            <p
              class="text-sm leading-relaxed text-purple-800/90 font-minecraftia mb-2"
            >
              When you play on our Minecraft server, we may collect:
            </p>
            <ul
              class="list-disc list-inside text-sm text-purple-800/90 font-minecraftia space-y-1 ml-3"
            >
              <li>Minecraft username (IGN - In-Game Name)</li>
              <li>Minecraft UUID (Unique User Identifier)</li>
              <li>In-game statistics and gameplay data</li>
              <li>Chat messages and commands</li>
            </ul>
          </div>

          <div>
            <h3 class="text-base font-minecrafter text-purple-800 mb-2">
              2. Network Information
            </h3>
            <p
              class="text-sm leading-relaxed text-purple-800/90 font-minecraftia mb-2"
            >
              We may collect:
            </p>
            <ul
              class="list-disc list-inside text-sm text-purple-800/90 font-minecraftia space-y-1 ml-3"
            >
              <li>IP addresses for security and moderation purposes</li>
              <li>Connection timestamps and duration</li>
              <li>Server performance data</li>
            </ul>
          </div>

          <div>
            <h3 class="text-base font-minecrafter text-purple-800 mb-2">
              3. Payment Information
            </h3>
            <p
              class="text-sm leading-relaxed text-purple-800/90 font-minecraftia"
            >
              When you make purchases through our store, payment processing is
              handled by Tebex. We do not directly collect or store your payment
              card information. Tebex collects and processes payment data in
              accordance with their{" "}
              <a
                href="https://checkout.tebex.io/terms"
                target="_blank"
                rel="noopener noreferrer"
                class="text-purple-600 hover:text-purple-900 underline underline-offset-2 transition-colors"
              >
                Terms of Service
              </a>{" "}
              and privacy policy. We may receive transaction confirmations, usernames,
              and purchase history from Tebex.
            </p>
          </div>

          <div>
            <h3 class="text-base font-minecrafter text-purple-800 mb-2">
              4. Website Data
            </h3>
            <p
              class="text-sm leading-relaxed text-purple-800/90 font-minecraftia mb-2"
            >
              Our website uses cookies to:
            </p>
            <ul
              class="list-disc list-inside text-sm text-purple-800/90 font-minecraftia space-y-1 ml-3"
            >
              <li>Improve site performance and reliability</li>
              <li>Enhance user experience</li>
              <li>Analyze site usage and traffic patterns</li>
            </ul>
            <p
              class="text-sm leading-relaxed text-purple-800/90 font-minecraftia mt-2"
            >
              These cookies are mandatory for the proper functioning of our
              website and services.
            </p>
          </div>
        </div>
      </section>

      <!-- How We Use Your Information -->
      <section
        class="bg-white rounded-lg shadow-sm border border-purple-200 p-5"
      >
        <h2 class="text-lg font-minecrafter text-purple-900 mb-3">
          How We Use Your Information
        </h2>
        <p
          class="text-sm leading-relaxed text-purple-800/90 font-minecraftia mb-2"
        >
          We use the collected information for the following purposes:
        </p>
        <ul
          class="list-disc list-inside text-sm text-purple-800/90 font-minecraftia space-y-1.5 ml-3"
        >
          <li>Providing and maintaining our Minecraft server services</li>
          <li>Processing purchases and delivering in-game items or perks</li>
          <li>Preventing cheating, griefing, and rule violations</li>
          <li>Improving server performance and user experience</li>
          <li>Communicating with you about server updates or issues</li>
          <li>Enforcing our Terms of Service and server rules</li>
          <li>Complying with legal obligations</li>
        </ul>
      </section>

      <!-- Data Retention -->
      <section
        class="bg-white rounded-lg shadow-sm border border-purple-200 p-5"
      >
        <h2 class="text-lg font-minecrafter text-purple-900 mb-3">
          Data Retention
        </h2>
        <p class="text-sm leading-relaxed text-purple-800/90 font-minecraftia">
          We retain your personal data only for as long as necessary to fulfill
          the purposes outlined in this Privacy Policy, unless a longer
          retention period is required or permitted by law. Gameplay data, chat
          logs, and transaction records may be retained for security,
          moderation, and legal compliance purposes.
        </p>
      </section>

      <!-- Your Rights (GDPR) -->
      <section
        class="bg-white rounded-lg shadow-sm border border-purple-200 p-5"
      >
        <h2 class="text-lg font-minecrafter text-purple-900 mb-3">
          Your Rights Under GDPR
        </h2>
        <p
          class="text-sm leading-relaxed text-purple-800/90 font-minecraftia mb-3"
        >
          As a GDPR-compliant service, you have the following rights:
        </p>
        <ul
          class="list-disc list-inside text-sm text-purple-800/90 font-minecraftia space-y-1.5 ml-3"
        >
          <li>
            <strong>Right to Access:</strong> Request a copy of the personal data
            we hold about you
          </li>
          <li>
            <strong>Right to Rectification:</strong> Request correction of inaccurate
            or incomplete data
          </li>
          <li>
            <strong>Right to Erasure:</strong> Request deletion of your personal data
            ("right to be forgotten")
          </li>
          <li>
            <strong>Right to Restriction:</strong> Request limitation of processing
            your data
          </li>
          <li>
            <strong>Right to Data Portability:</strong> Receive your data in a structured,
            commonly used format
          </li>
          <li>
            <strong>Right to Object:</strong> Object to processing of your personal
            data
          </li>
          <li>
            <strong>Right to Withdraw Consent:</strong> Withdraw consent at any time
            where processing is based on consent
          </li>
        </ul>
      </section>

      <!-- Data Deletion & Support -->
      <section
        class="bg-white rounded-lg shadow-sm border border-purple-200 p-5"
      >
        <h2 class="text-lg font-minecrafter text-purple-900 mb-3">
          Data Deletion & Support
        </h2>
        <p
          class="text-sm leading-relaxed text-purple-800/90 font-minecraftia mb-3"
        >
          If you wish to exercise any of your rights, including requesting
          deletion of your data, please open a support ticket in our Discord
          server. Our team will process your request in accordance with
          applicable data protection laws.
        </p>
        <div class="bg-purple-50 border-l-4 border-purple-400 p-3 rounded">
          <p class="text-sm text-purple-800/90 font-minecraftia">
            <strong class="text-purple-900">Need help?</strong> Join our Discord server
            (linked in the navigation bar) and open a support ticket. We handle all
            data requests and privacy concerns directly through Discord.
          </p>
        </div>
      </section>

      <!-- Data Security -->
      <section
        class="bg-white rounded-lg shadow-sm border border-purple-200 p-5"
      >
        <h2 class="text-lg font-minecrafter text-purple-900 mb-3">
          Data Security
        </h2>
        <p class="text-sm leading-relaxed text-purple-800/90 font-minecraftia">
          We implement appropriate technical and organizational measures to
          protect your personal data against unauthorized access, alteration,
          disclosure, or destruction. However, no method of transmission over
          the internet or electronic storage is 100% secure, and we cannot
          guarantee absolute security.
        </p>
      </section>

      <!-- Third-Party Services -->
      <section
        class="bg-white rounded-lg shadow-sm border border-purple-200 p-5"
      >
        <h2 class="text-lg font-minecrafter text-purple-900 mb-3">
          Third-Party Services
        </h2>
        <p
          class="text-sm leading-relaxed text-purple-800/90 font-minecraftia mb-3"
        >
          We use the following third-party service:
        </p>
        <ul
          class="list-disc list-inside text-sm text-purple-800/90 font-minecraftia space-y-1.5 ml-3"
        >
          <li>
            <strong>Tebex:</strong> Payment processing and store management.
            Please review their{" "}
            <a
              href="https://checkout.tebex.io/terms"
              target="_blank"
              rel="noopener noreferrer"
              class="text-purple-600 hover:text-purple-900 underline underline-offset-2 transition-colors"
            >
              Terms of Service
            </a>{" "}
            and privacy policy for information on how they handle your data.
          </li>
        </ul>
        <p
          class="text-sm leading-relaxed text-purple-800/90 font-minecraftia mt-3"
        >
          We are not responsible for the privacy practices of third-party
          services. We encourage you to review their privacy policies.
        </p>
      </section>

      <!-- Children's Privacy -->
      <section
        class="bg-white rounded-lg shadow-sm border border-purple-200 p-5"
      >
        <h2 class="text-lg font-minecrafter text-purple-900 mb-3">
          Children's Privacy
        </h2>
        <p class="text-sm leading-relaxed text-purple-800/90 font-minecraftia">
          Minecraft is enjoyed by players of all ages. If you are under the age
          of 16 (or the applicable age of consent in your jurisdiction), you
          must have parental or guardian consent to use our services. Parents or
          guardians may contact us via Discord to exercise rights on behalf of
          their children.
        </p>
      </section>

      <!-- Changes to This Policy -->
      <section
        class="bg-white rounded-lg shadow-sm border border-purple-200 p-5"
      >
        <h2 class="text-lg font-minecrafter text-purple-900 mb-3">
          Changes to This Privacy Policy
        </h2>
        <p class="text-sm leading-relaxed text-purple-800/90 font-minecraftia">
          We may update this Privacy Policy from time to time. We will notify
          you of any significant changes by posting the new Privacy Policy on
          this page and updating the "Last Updated" date. We encourage you to
          review this Privacy Policy periodically for any changes.
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
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or our data practices, please contact us by opening a
          support ticket in our Discord server. The Discord link can be found in
          the navigation bar at the top of this page.
        </p>
      </section>

      <!-- Disclaimer -->
      <section class="bg-purple-50 rounded-lg border border-purple-200 p-4">
        <p class="text-xs text-purple-700/90 font-minecraftia leading-relaxed">
          <strong>Disclaimer:</strong> Starnix MC is not affiliated with Mojang AB
          or Microsoft. Minecraft is a trademark of Mojang AB. This Privacy Policy
          applies only to Starnix MC services and does not cover Minecraft, Mojang,
          or Microsoft's data practices.
        </p>
      </section>
    </div>
  </div>
</div>
