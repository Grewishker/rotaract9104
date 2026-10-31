// export const SITE_LIVE = import.meta.env.VITE_SITE_LIVE === "true";
// export const LAUNCH_DATE = import.meta.env.VITE_LAUNCH_DATE ?? null;

// // Dev-only diagnostic to help confirm env loading. Removed/ignored in production.
// if (import.meta.env.DEV) {
// 	// eslint-disable-next-line no-console
// 	console.info("[site config] VITE_SITE_LIVE=", import.meta.env.VITE_SITE_LIVE, "SITE_LIVE=", SITE_LIVE, "VITE_LAUNCH_DATE=", LAUNCH_DATE);
// }
export const SITE_LIVE = import.meta.env.VITE_SITE_LIVE === "true";
export const LAUNCH_DATE = import.meta.env.VITE_LAUNCH_DATE ?? null;

export function isLaunched(): boolean {
  if (SITE_LIVE) return true; // manual override always wins
  if (!LAUNCH_DATE) return false;
  const launch = new Date(LAUNCH_DATE);
  if (Number.isNaN(launch.getTime())) return false;
  return Date.now() >= launch.getTime();
}

if (import.meta.env.DEV) {
	// eslint-disable-next-line no-console
	console.info("[site config] VITE_SITE_LIVE=", import.meta.env.VITE_SITE_LIVE, "isLaunched()=", isLaunched(), "VITE_LAUNCH_DATE=", LAUNCH_DATE);
}