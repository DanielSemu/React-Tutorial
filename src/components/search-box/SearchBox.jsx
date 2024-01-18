import React from 'react'
import './SearchBox.css'
const SearchBox = ({placeholder , handlechange}) => {
  return (
    <input
    className='search'
          type="search"
          placeholder={placeholder}
          onChange={handlechange}
            
        />
    
  )
}

export default SearchBox
