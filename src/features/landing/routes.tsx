import { type RouteObject } from 'react-router-dom'
import { type QueryClient } from '@tanstack/react-query'
import HomePage from './pages/home'

import { MarketingLayout } from './layout'

export const routes = (queryClient: QueryClient): RouteObject[] => [
  {
    path: '',
    element: <MarketingLayout />,
    children: [
      HomePage.routes(queryClient)
    ]
  }
]
