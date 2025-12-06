import { writable } from "svelte/store";

// Server proxy configurations
export const PROXIES = {
  india: "ind.starnixmc.xyz",
  singapore: "play.starnixmc.xyz",
} as const;

// Proxy locations (coordinates)
const PROXY_LOCATIONS = {
  india: { lat: 19.076, lon: 72.8777 }, // Mumbai
  singapore: { lat: 1.3521, lon: 103.8198 }, // Singapore
} as const;

// Store for the nearest proxy IP
export const nearestProxyIP = writable<string>(PROXIES.singapore);

// Store for player count
export const playerCount = writable<number>(25);

/**
 * Calculate distance between two coordinates using Haversine formula
 */
function getDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  const R = 6371; // Radius of Earth in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Detect the nearest proxy server based on user's geolocation
 */
export async function detectNearestProxy(): Promise<string> {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();

    if (data && data.latitude && data.longitude) {
      const userLat = data.latitude;
      const userLon = data.longitude;

      // Calculate distances to both proxies
      const indiaDist = getDistance(
        userLat,
        userLon,
        PROXY_LOCATIONS.india.lat,
        PROXY_LOCATIONS.india.lon,
      );
      const sgDist = getDistance(
        userLat,
        userLon,
        PROXY_LOCATIONS.singapore.lat,
        PROXY_LOCATIONS.singapore.lon,
      );

      // Determine nearest proxy
      const nearest = indiaDist < sgDist ? PROXIES.india : PROXIES.singapore;
      nearestProxyIP.set(nearest);
      return nearest;
    }
  } catch (error) {
    console.error("Error detecting location:", error);
  }

  // Default to Singapore proxy on error
  const defaultProxy = PROXIES.singapore;
  nearestProxyIP.set(defaultProxy);
  return defaultProxy;
}

/**
 * Fetch player count from Minecraft server
 */
export async function fetchPlayerCount(
  serverIP: string = PROXIES.singapore,
): Promise<number> {
  try {
    const response = await fetch(`https://api.mcsrvstat.us/3/${serverIP}`);
    const data = await response.json();

    if (data && data.players && typeof data.players.online === "number") {
      playerCount.set(data.players.online);
      return data.players.online;
    }
  } catch (error) {
    console.error("Error fetching Minecraft server data:", error);
  }

  // Default to 0 on error
  playerCount.set(0);
  return 0;
}

/**
 * Initialize Minecraft server data (detect proxy and fetch player count)
 */
export async function initializeMinecraftData(): Promise<void> {
  const proxy = await detectNearestProxy();
  await fetchPlayerCount(proxy);
}
