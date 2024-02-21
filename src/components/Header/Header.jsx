import React from 'react'
import {Container, Logo, LogoutButton} from '../index'
import { Link, useNavigate } from 'react-router-dom'
import {useSelector } from 'react-redux'

function Header() {
 
  const authStatus = useSelector((state)=> state.auth.status)
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: 'Login',
      slug: "/Login",
      active: !authStatus
    },
    {
      name: 'SignUp',
      slug: "/signUp",
      active: !authStatus
    },
    {
      name: 'All Post ',
      slug: "/all-posts",
      active: authStatus
    },
    {
      name: 'Add Post',
      slug: "/add-post",
      active: authStatus
    }

  ]


  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='90px'/>
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item)=>
             item.active ? (
              <li key={item.name}>
                <button
                onClick={()=> navigate(item.slug)}
                className='inline-block px-6 py-2 bg-transparent
                duration-200 hover:bg-blue-100 hover:text-black rounded-full'
                >{item.name}</button>
              </li>
             ) : null
            )}
            {authStatus && (
              <li>
                <LogoutButton/>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header

