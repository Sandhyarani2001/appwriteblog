import React from 'react'
import { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import {login} from '../store/authSlice'
import {useDispatch } from 'react-redux'
import {Button, Input, Logo} from './index'
import {useForm} from 'react-hook-form'

function SignUp() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register , handleSubmit} = useForm()

    // signUp method

    const create = async(data)=>{
        setError('')
        try {
           const userData= await authService.createAccount(data)
           if(userData){
            const userData = await authService.getCurrentUser()
            if(userData) dispatch(login(userData));
            navigate("/")
           }
        } catch (error) {
            setError(error.message)
        }
    }
  return (
    <div className='flex justify-center items-center text-black'>
      <div className={`mx-auto w-full max-w-lg 
      bg-gray-100 rounded-xl p-1 border border-black/10`}>

      
       <div className='mb-2 flex justify-center'>
            <span className='inline-block w-full max-w-[100px]'>
                <Logo width="100%"/>
            </span>
        </div>
        <h2 className='text-center text-2xl font-bold'
        >Sign in to your account
        </h2>

        <p className='mt-2 text-center text-base text-black/60'>
          Don't have any account?&nbsp;
          <Link to="/signup"
          className='font-medium text-primary transition-all
          duration-200 hover:underline'
          >Sign Up</Link>
        </p>

        {error && <p className='text-red-500 mt-8 text-center'>{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className='space-y-5'>
             <Input 
                label= "Full Name"
                placeholder = "Enter your full name"
                {...register("name",{
                    required:true,
                })}

             />

           <Input
           label= "Email: "
           placeholder= "Enyter your email"
           type="email"
           {...register("email",{
            require: true,
           })}
            />

            <Input
                label="password"
                type="password"
                placeholder="Enter your passWord"
                {...register("password",{required:true})}
            />
            <Button type="submit" className='w-full'>
              Create Account
            </Button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default SignUp
