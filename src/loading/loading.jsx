import React from 'react'
import { PacmanLoader } from 'react-spinners'
import "./loading.css"
const loading = () => {
  return (
    <div className='poki'>
      <PacmanLoader
        color='yellow'
        className="lolo"
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
       
              />
    </div>
  )
}

export default loading
