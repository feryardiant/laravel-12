import type { LucideIcon } from 'lucide-vue-next'

declare module '@inertiajs/core' {
  export interface PageProps {
    name: string
    quote: { message: string, author: string }
    auth: Auth
  }
}

export interface Auth {
  user: User
}

export interface BreadcrumbItem {
  title: string
  href: string
}

export interface NavItem {
  title: string
  href: string
  icon?: LucideIcon
  isActive?: boolean
}

export interface User {
  id: number
  name: string
  email: string
  avatar?: string
  email_verified_at: string | null
  created_at: string
  updated_at: string
}

export type BreadcrumbItemType = BreadcrumbItem
