import React from 'react'

const Selector = ({onChange, value, options}) => {
  return (
      <select
      className='select' 
      value={value}
      onChange={event => onChange(event.target.value)}>
        <option disabled value="">filter</option>
        {options.map(option =>
        <option key={option.value} value={option.value}>
            {option.name}
            </option>)}
      </select>
  )
}

export default Selector
