import { useEffect, useState } from 'react'
import type React from 'react'
import cn from '../utils/cn'

interface StoplightPhase {
  id: string
  colorClass?: string
  durationMs: number
  isOff?: boolean;
}

type StoplightSequenceStep = Partial<Record<string, boolean>>

interface StoplightProps {
  phases: StoplightPhase[]
  sequence: StoplightSequenceStep[]
}

const Stoplight: React.FC<StoplightProps> = ({ phases, sequence }) => {
  const [sequenceIndex, setSequenceIndex] = useState(0)

  const validSequence = sequence.filter((step) =>
    phases.some((phase) => step[phase.id]),
  )

  useEffect(() => {
    if (!phases.length || !validSequence.length) {
      return
    }

    const currentStep = validSequence[sequenceIndex % validSequence.length]
    const currentPhase = phases.find((phase) => currentStep[phase.id])

    if (!currentPhase) {
      return
    }

    const timeout = setTimeout(() => {
      setSequenceIndex((previous) => (previous + 1) % validSequence.length)
    }, currentPhase.durationMs)

    return () => {
      clearTimeout(timeout)
    }
  }, [phases, sequence, sequenceIndex, validSequence])

  if (!phases.length || !validSequence.length) {
    return null
  }

  const activeStep = validSequence[sequenceIndex % validSequence.length]

  return (
    <div className='flex flex-col items-center gap-2 rounded-lg bg-slate-800 p-4 shadow-lg'>
      {phases.filter((phase) => !phase.isOff).map((phase, idx) => {
        return (
          <div
            key={`${phase.id}-${idx}`}
            className={cn(
              'h-16 w-16 rounded-full transition-opacity duration-300',
              phase.colorClass,
              activeStep?.[phase.id] ? 'opacity-100' : 'opacity-25',
            )}
          />)
      })}
    </div>
  )
}

export type { StoplightPhase }
export { Stoplight }

