import React from 'react'
// import Navbar2 from './Navbar2'

function Navbar() {
  return (
    <nav className='mx-10 my-10 w-[1294px] h-[69px] left-[65px] top-[34px]'>
      <div className='container flex'>
        <div className=' flex menu-icon gap-4'>
          <img src="src\assets\menuicon.svg" alt="menuicon" />
          <img src="src\assets\logo.svg" alt="menuicon" />
        </div>

        <div className='font-krona items-center flex mx-4'>
          <div className='  mx-10'>
            <a href="">Home</a>
          </div>
          
          <div className="mx-10  left-[65px]">
            <label htmlFor="Categories" className="sr-only">
                Categories
            </label>
            <select
                className=" text-white rounded-none"
                name="Categories"
                id="Categories"
                defaultValue=""
            >
                <option value="" disabled>
                    Categories
                </option>
                <option value="Movies">Movies</option>
                <option value="Anime">Anime</option>
                <option value="TV Show">TV Show</option>
            </select>
        </div>


          <div className=' mx-10'>
            <a href="">Cart</a>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
