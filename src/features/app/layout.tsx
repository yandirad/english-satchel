import { ModeToggle } from '@/components/mode-toggle'
import { Link, Outlet } from 'react-router-dom'

export function AppLayout () {
  return (
    <div className="h-full w-full bg-slate-50 dark:bg-background bg-hero-pattern2 dark:bg-hero-pattern">
      <div className="flex min-h-screen flex-col ">

        <header className="border-b bg-background dark:bg-background flex">
          <div className='container mx-auto flex items-center justify-between py-2 px-2 md:px-16 '>

            <div className='flex'>
              <Link to='/'>
                <h1 className='text-semibold'>
                  Satchel
                </h1>
              </Link>
            </div>
            <div className='flex-grow' />
            <nav className="flex items-center gap-2">
              <ModeToggle />
            </nav>
          </div>
        </header>

        <main className="flex-1 border-b container mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
