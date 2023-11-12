import { type QueryClient } from '@tanstack/react-query'
import { LandingHomePage } from './home'
import { type RouteObject } from 'react-router-dom'

export const routes = (_queryClient: QueryClient): RouteObject => ({
  index: true,
  element: <LandingHomePage />
})

const CRUD = {
  routes
}

export default CRUD
