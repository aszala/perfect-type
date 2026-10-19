import { SITE_URL } from './lib/config.js';

export const AVATAR_COUNT = 10;

export function avatarUrl(photo) {
  return `/profile-photos/photo${photo ?? 0}.png`;
}

export function formatWpm(wpm) {
  return wpm.toFixed(1);
}

export function formatDate(timestamp) {
  return timestamp?.toDate ? timestamp.toDate().toLocaleDateString() : '';
}

// Phones and tablets without a keyboard can't play; their keyboards don't send real key events.
export function isTouchOnly() {
  return window.matchMedia('(hover: none) and (pointer: coarse)').matches;
}

// Uses the native share sheet on phones, the clipboard everywhere else.
export async function shareScore(mode, wpm) {
  const text = `I typed ${formatWpm(wpm)} wpm on perfect type (${mode} mode) without a single mistake. can you?`;
  if (navigator.share && isTouchOnly()) {
    await navigator.share({ text, url: SITE_URL });
    return 'shared';
  }
  await navigator.clipboard.writeText(`${text} ${SITE_URL}`);
  return 'copied';
}
