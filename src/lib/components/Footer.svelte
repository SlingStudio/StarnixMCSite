<script lang="ts">
  import Logo from "$lib/assets/icon.png";

  const currentYear = new Date().getFullYear();

  let footerLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms and Conditions", href: "/terms" },
  ];

  function handleLinkClick(event: MouseEvent) {
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
</script>

<div
  class="w-full font-minecrafter text-white relative mt-auto overflow-visible"
  style="background-image: url('/background.jpg'); background-size: cover; background-position: center;"
>
  <div class="absolute inset-0 bg-purple-950/80 backdrop-blur-lg"></div>
  <div class="relative z-10">
    <svg
      class="relative block w-full h-32 md:h-40"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <!-- White background above the wave -->
      <path
        fill="white"
        d="M0,0 L1440,0 L1440,42.7 C1344,85,1248,171,1152,213.3 C1056,256,960,256,864,261.3 C768,267,672,277,576,256 C480,235,384,181,288,160 C192,139,96,149,48,154.7 L0,160 Z"
      ></path>

      <!-- Transparent wave area (optional for clarity, can omit) -->
      <path
        fill="transparent"
        d="M0,160L48,154.7C96,149,192,139,288,160C384,181,480,235,576,256C672,277,768,267,864,261.3C960,256,1056,256,1152,213.3C1248,171,1344,85,1392,42.7L1440,0L0,0Z"
      ></path>
    </svg>
  </div>

  <footer class="relative z-10 [view-transition-name:footer]">
    <!-- Footer content -->
    <div class="relative z-10 flex flex-col items-center py-16 px-6 space-y-6">
      <!-- Logo (floating above footer) -->
      <div
        class="absolute -top-16 md:-top-20 flex justify-center w-full z-30 overflow-visible"
      >
        <a href="/">
          <img
            src={Logo}
            alt="Starnix Logo"
            class="h-28 md:h-36 animate-float duration-200 drop-shadow-lg"
          />
        </a>
      </div>

      <div class="pt-2"></div>

      <!-- Links -->
      <div
        class="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base"
      >
        {#each footerLinks as link (link.href)}
          <a
            href={link.href}
            onclick={handleLinkClick}
            class="text-purple-200/80 hover:text-purple-100 hover:scale-105 transition-all duration-300"
          >
            {link.name}
          </a>
        {/each}
      </div>

      <!-- Copyright -->
      <div class="text-center text-purple-300/80 text-sm md:text-base pt-2">
        <p>© {currentYear} Starnix MC. All rights reserved.</p>
      </div>

      <!-- Disclaimer -->
      <div class="text-center text-purple-200/60 text-xs md:text-sm max-w-lg">
        <p>
          We are not affiliated with Mojang AB. Minecraft is a trademark of
          Mojang AB.
        </p>
      </div>

      <!-- Created by -->
      <div
        class="text-center text-purple-400/50 hover:text-purple-400/90 transition-colors text-xs pt-2"
      >
        <a href="https://daysling.com">Created by daysling</a>
      </div>
    </div>
  </footer>
</div>
