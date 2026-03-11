import { useEffect, useState } from 'react'
import './App.css'
import cn from './utils/cn'

const lights = [
  { id: 'green', colorClass: 'bg-emerald-500', durationMs: 5000 },
  { id: 'yellow', colorClass: 'bg-yellow-400', durationMs: 1000 },
  { id: 'pink', colorClass: 'bg-pink-500', durationMs: 1500 },
  { id: 'red', colorClass: 'bg-red-500', durationMs: 2000 },
] as const

function App() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % lights.length)
    }, lights[activeIndex].durationMs)

    return () => clearTimeout(timeout)
  }, [activeIndex])

  return (
    <div className='flex flex-col items-center justify-center gap-6 w-screen h-screen bg-slate-900 text-white'>
      <h1 className='text-3xl font-semibold tracking-wide'>stoplight</h1>
      <div className='flex flex-col items-center gap-4'>
        <div className='flex flex-col items-center gap-2 rounded-lg bg-slate-800 p-4 shadow-lg'>
          {lights.map((light, index) => (
            <div
              key={light.id}
              className={cn(
                'h-16 w-16 rounded-full transition-opacity duration-300',
                light.colorClass,
                index === activeIndex ? 'opacity-100' : 'opacity-25',
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
