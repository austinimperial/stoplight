import type React from 'react'
import './App.css'
import { Stoplight } from './components/Stoplight'
import type { StoplightPhase } from './components/Stoplight'

type AppProps = object

const phases1: StoplightPhase[] = [
  { id: 'green', colorClass: 'bg-emerald-500', durationMs: 1000 },
  { id: 'yellow', colorClass: 'bg-yellow-400', durationMs: 1000 },
  { id: 'red', colorClass: 'bg-red-500', durationMs: 1000 },
] as const

const phases2: StoplightPhase[] = [
  { id: 'green', colorClass: 'bg-emerald-500', durationMs: 1000 },
  { id: 'yellow', colorClass: 'bg-yellow-400', durationMs: 1000 },
  { id: 'red', colorClass: 'bg-red-500', durationMs: 1000 },
] as const

const phases3: StoplightPhase[] = [
  { id: 'green', colorClass: 'bg-emerald-500', durationMs: 1000 },
  { id: 'off', durationMs: 1000, isOff: true },
  { id: 'yellow', colorClass: 'bg-yellow-400', durationMs: 1000 },
  { id: 'red', colorClass: 'bg-red-500', durationMs: 1000 },
] as const

const phases4: StoplightPhase[] = [
  { id: 'green', colorClass: 'bg-emerald-500', durationMs: 1000 },
  { id: 'yellow', colorClass: 'bg-yellow-400', durationMs: 1000 },
  { id: 'red', colorClass: 'bg-red-500', durationMs: 1000 },
] as const

const phases5: StoplightPhase[] = [
  { id: 'red1', colorClass: 'bg-red-500', durationMs: 1000 },
  { id: 'red2', colorClass: 'bg-red-500', durationMs: 1000 },
  { id: 'red3', colorClass: 'bg-red-500', durationMs: 1000 },
] as const

const sequence1 = [
  { green: true },
  { yellow: true },
  { red: true },
]

const sequence2 = [
  { green: true },
  { red: true },
  { yellow: true },
]

const sequence3 = [
  { red: true },
  { off: true },
]

const sequence4 = [
  { green: true, yellow: true },
  { red: true },
]

const sequence5 = [
  { red1: true },
  { red2: true },
  { red3: true },
]

const App: React.FC<AppProps> = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-6 w-screen h-screen bg-slate-900 text-white'>
      <h1 className='text-3xl font-semibold tracking-wide'>stoplight</h1>
      <div className='flex items-center gap-4'>
        <Stoplight phases={phases1} sequence={sequence1} />
        <Stoplight phases={phases2} sequence={sequence2} />
        <Stoplight phases={phases3} sequence={sequence3} />
        <Stoplight phases={phases4} sequence={sequence4} />
        <Stoplight phases={phases5} sequence={sequence5} />
      </div>
    </div>
  )
}

export default App
