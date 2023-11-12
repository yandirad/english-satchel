import { type RouteObject } from 'react-router-dom'
import { type QueryClient } from '@tanstack/react-query'

import { AppLayout } from './layout'
import { AppPhrasalVebsPage } from './pages/phrasal-verbs'

export const routes = (_queryClient: QueryClient): RouteObject[] => [
  {
    path: '/app',
    element: <AppLayout />,
    children: [{
      path: 'phrasal-verbs',
      element: <AppPhrasalVebsPage />
    }]
  }
]
