import { Redis } from "@upstash/redis";

// Liest die Zugangsdaten aus der Umgebung. Unterstuetzt sowohl die Upstash- als auch die
// KV-Variablennamen, je nachdem wie die Integration die Variablen setzt.
export function getRedis(): Redis | null {
  const url =
    process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}
