import { ModeToggle } from '@/components/mode-toggle'
import { Outlet } from 'react-router-dom'

export function MarketingLayout () {
  return (
    <div className="h-full w-full bg-slate-50 dark:bg-background bg-hero-pattern2 dark:bg-hero-pattern">
      <div className="flex min-h-screen flex-col ">

        <header className="border-b bg-background dark:bg-background flex">
          <div className='container mx-auto flex items-center justify-between py-2 px-2 md:px-16 '>

            <div className='flex'>Satchel</div>
            <div className='flex-grow' />
            <nav className="flex items-center gap-2">
              <ModeToggle />
            </nav>
          </div>
        </header>

        <main className="flex-1 border-b">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
