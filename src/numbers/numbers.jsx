import React from 'react'
import { useStateContext } from "../context/contexts"

const Numbers = () => {
  const { setNumberChoosen, numberChoosen,addOne } = useStateContext()
  
  const changeNumbers = (e) => {
    const numbers = e.target.value
    setNumberChoosen(numbers)
  }
  console.log(addOne)
  return (
    <div>
            <select className='select' onChange={changeNumbers}>
                <option>Choose a Number</option>
                <option className='num' value={0}>1</option>
                <option value={1}>2</option>
                <option value={2}>3</option>
                <option value={3}>4</option>
                <option value={4}>5</option>
                <option value={5}>6</option>
                <option value={6}>7</option>
                <option value={7}>8</option>
                <option value={8}>9</option>
                <option value={9}>10</option>
                
      </select>
    </div>
  )
}

export default Numbers
