import type { BreadcrumbItem } from '@/types'
import type { ReactNode } from 'react'
import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout'

interface AppLayoutProps {
  children: ReactNode
  breadcrumbs?: BreadcrumbItem[]
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => (
  <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
    {children}
  </AppLayoutTemplate>
)
