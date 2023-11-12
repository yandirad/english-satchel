import {
  RouterProvider
} from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { useRouter } from './hooks/useRouter'
import { ThemeProvider } from './context/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 1,
      staleTime: 5 * 1000
    }
  }
})

function AppWithSession (): JSX.Element {
  const { router } = useRouter({ queryClient })

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster />
    </QueryClientProvider>
  )
}

export default function App (): JSX.Element {
  return (
      <ThemeProvider defaultTheme="system" storageKey="ui-theme">
        <AppWithSession />
      </ThemeProvider>
  )
}


/*
import PlaygroundPage from './features/tetris'

function App () {
  return (
    <div className="min-h-full w-full h-full bg-gradient-to-r from-background/90 to-muted/50  dark:bg-hero-pattern bg-hero-pattern2">
      <PlaygroundPage />
    </div>
  )
}

export default App
*/