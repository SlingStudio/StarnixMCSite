export interface Feature {
  title: string;
  description: string;
  media: string;
  type: "image" | "video";
}

export const features: Feature[] = [
  {
    title: "Lobby",
    description:
      "Welcome to our stunning lobby! Start your adventure in a beautifully crafted space designed to impress and guide you to all our exciting game modes.",
    media: "/lobby.jpg",
    type: "image",
  },
  {
    title: "Crate Area",
    description:
      "Discover amazing rewards in our crate area! Open mystery crates to unlock exclusive items, rare cosmetics, and powerful gear to enhance your gameplay.",
    media: "/crate.MP4",
    type: "video",
  },
  {
    title: "Bloodbath",
    description:
      "Enter the ultimate PvP arena! Test your combat skills against other players in intense battles. Only the strongest survive in this action-packed battleground.",
    media: "/bloodbath.MP4",
    type: "video",
  },
  {
    title: "Pinata",
    description:
      "Join the fun in our unique Pinata event! Break pinatas to collect valuable loot and special prizes. A community favorite that brings players together!",
    media: "/pinata.MP4",
    type: "video",
  },
  {
    title: "Spawn",
    description:
      "Explore our magnificent spawn area! A central hub where your journey begins, featuring shops, portals, and everything you need to get started.",
    media: "/spawn.MP4",
    type: "video",
  },
];
