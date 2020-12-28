import * as React from 'react'
import * as icons from './icons'

export type Icons = typeof icons
export type IconName = keyof Icons

interface IconProps {
  name: IconName
  style?: string
}

/**
 * Icon
 */
export const Icon: React.SFC<IconProps> = ({ name, style = 'justify-center h-10 w-10 rounded-lg bg-indigo-500 text-white' }) => {
  const { viewBox, id } = icons[name]
  return (
    <span className={`${style}`}>
      <svg viewBox={viewBox} className="h-4 w-4">
        <use xlinkHref={`#${id}`} href={`#${id}`} />
      </svg>
    </span>
  )
}
