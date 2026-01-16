import { useState } from 'react'

/**
 * Toggle for Beginner/Intermediate/Advanced view levels
 * @param {string} level - Current level: 'beginner' | 'intermediate' | 'advanced'
 * @param {Function} onLevelChange - Callback when level changes
 */
export default function ProgressiveDisclosure({ level = 'beginner', onLevelChange }) {
  const levels = [
    { id: 'beginner', label: 'Beginner' },
    { id: 'intermediate', label: 'Intermediate' },
    { id: 'advanced', label: 'Advanced' },
  ]

  const handleClick = (lvlId) => {
    if (onLevelChange && typeof onLevelChange === 'function') {
      onLevelChange(lvlId)
    } else {
      console.warn('ProgressiveDisclosure: onLevelChange is not a function', onLevelChange)
    }
  }

  return (
    <div className="flex items-center gap-2 p-1 bg-primary-100 rounded-lg border border-primary-200">
      {levels.map((lvl) => (
        <button
          key={lvl.id}
          type="button"
          onClick={() => handleClick(lvl.id)}
          className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
            level === lvl.id
              ? 'bg-white text-accent-600 shadow-sm'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
          }`}
        >
          {lvl.label}
        </button>
      ))}
    </div>
  )
}

