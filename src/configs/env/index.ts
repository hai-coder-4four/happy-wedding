export const env = {
  BASE_URL: process.env.BASE_URL || "http://localhost:3000",
  MAPBOX_ACCESS_TOKEN:
    process.env.MAPBOX_ACCESS_TOKEN ||
    process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ||
    "",
};
