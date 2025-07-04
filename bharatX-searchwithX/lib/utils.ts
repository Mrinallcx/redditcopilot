// /lib/utils.ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Globe, Book, TelescopeIcon } from 'lucide-react'
import { ChatsCircleIcon, CodeIcon, MemoryIcon, RedditLogoIcon, YoutubeLogoIcon, XLogoIcon } from '@phosphor-icons/react'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type SearchGroupId = 'web' | 'x' | 'academic' | 'youtube' | 'reddit' | 'analysis' | 'chat' | 'extreme' | 'memory';

export const searchGroups = [
  {
    id: 'reddit' as const,
    name: 'Reddit',
    description: 'Search Reddit posts',
    icon: RedditLogoIcon,
    show: true,
  },
] as const;

export type SearchGroup = typeof searchGroups[number];

export function invalidateChatsCache() {
  if (typeof window !== 'undefined') {
    const event = new CustomEvent('invalidate-chats-cache');
    window.dispatchEvent(event);
  }
}