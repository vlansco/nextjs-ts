import { Icon } from '@components/icon/Icon'
import React from 'react'

interface CounterProps {
  count: number
  add: () => void
  remove: () => void
}

export const Counter: React.FC<CounterProps> = ({ count, add, remove }) => {
  const onAdd = () => add()
  const onRemove = () => remove()
  return (
    <div>
      <p className="text-4xl font-normal pb-1.5">Count: <span className="font-bold text-indigo-600">{count}</span></p>
      <div className="flex flex-row space-x-2 ">
        <button className="btn-blue w-1/12" onClick={onAdd}>
            <Icon name={'plus'} style={'-ml-1 mr-2 h-4 w-4'}/> Add
          </button>
          <button className="btn-green w-1/12" onClick={onRemove}>
            <Icon name={'minus'} style={'-ml-1 mr-2 h-4 w-4'} /> Remove
          </button>
        </div>
    </div>
  )
}
