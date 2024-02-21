import React, { useId } from 'react'

function Select({options,label,className,...props},ref) {
    const id = useId();

  return (
    <div>
      {label && <label htmlFor={id} className=''></label>}
      <select
      {...props}
      id= {id}
      ref={ref}
      className={`py-3 px-4  w-full bg-white rounded-lg text-black outline-none
       focus:bg-gray-50 duration-200 border border-gray-200 ${className}`}
       >

       {options?.map((option)=>(
        <option key={option} value={option}>
            {option}
        </option>
       ))}

      </select>
    </div>
  )
}

export default React.forwardRef(Select)
