import {
  useRouteError,
  createBrowserRouter,
  isRouteErrorResponse
} from 'react-router-dom'
import { type QueryClient } from '@tanstack/react-query'
import { routes as appRoutes } from '@/features/app/routes'
import { routes as landingRoutes } from '@/features/landing/routes'

export function ErrorPage (): JSX.Element {
  const error = useRouteError()
  console.error(error)

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <h1>404</h1>
      )
    }
  }

  return (
    <div id="error-page">
      <h1>Oops ....!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{isRouteErrorResponse(error) && (error.statusText)}</i>
      </p>
    </div>
  );
}

interface GetRouterProps {
  queryClient: QueryClient
}
const getRouter = ({ queryClient }: GetRouterProps): ReturnType<typeof createBrowserRouter> => createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    // element: <BasicLayout />,
    children: [
      ...landingRoutes(queryClient),
      ...appRoutes(queryClient)
    ]
  }
], {
  basename: '/english-satchel/'
})

interface HookProps {
  queryClient: QueryClient
}

interface HookReturn {
  router: ReturnType<typeof createBrowserRouter>
}

export const useRouter = ({ queryClient }: HookProps): HookReturn => {
  const router = getRouter({ queryClient })

  return {
    router
  }
}
