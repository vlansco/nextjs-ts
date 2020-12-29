import * as React from 'react'
import * as icons from './icons'

export type Icons = typeof icons
export type IconName = keyof Icons

interface IconProps {
  name: IconName
  style: string
}

/**
 * Icon
 */
export const Icon: React.FC<IconProps> = ({ name, style = '' }) => {
  const { viewBox, id } = icons[name]
  return (
      <svg viewBox={viewBox} className={`${style}`} fill="currentColor">
        <use xlinkHref={`#${id}`} href={`#${id}`} />
      </svg>
  )
}
