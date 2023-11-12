import { type RouteObject } from 'react-router-dom'
import { type QueryClient } from '@tanstack/react-query'

import { AppLayout } from './layout'
import { AppPhrasalVerbsPage } from './pages/phrasal-verbs'
import { AppLinksPage } from './pages/links'

export const routes = (_queryClient: QueryClient): RouteObject[] => [
  {
    path: '/app',
    element: <AppLayout />,
    children: [{
      path: 'phrasal-verbs',
      element: <AppPhrasalVerbsPage />
    }, {
      path: 'links',
      element: <AppLinksPage />
    }]
  }
]
