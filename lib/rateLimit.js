// A simple limit on how often one visitor can send a message.
// It keeps its records in memory, so it resets when the server restarts and is not
// shared between servers. It stops casual abuse. For stronger protection on a busy
// site, swap it for a shared store such as Upstash Redis.

const hits = new Map();

export function rateLimit(key, { limit = 5, windowMs = 10 * 60 * 1000 } = {}) {
  const now = Date.now();
  const recent = (hits.get(key) || []).filter((time) => now - time < windowMs);

  if (recent.length >= limit) {
    hits.set(key, recent);
    return false; // too many attempts
  }

  recent.push(now);
  hits.set(key, recent);

  // Keep memory small: forget visitors who have not been seen for a while.
  if (hits.size > 5000) {
    for (const [k, times] of hits) {
      if (times.every((time) => now - time >= windowMs)) hits.delete(k);
    }
  }
  return true;
}
