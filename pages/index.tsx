import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FaFacebookF , FaLinkedinIn , FaGoogle , FaRegEnvelope} from 'react-icons/fa';
import {MdLockOutline} from 'react-icons/md';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gray-500">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <div className="rounded-2xl bg-green-200 flex w-3/4" >
          <div className="w-2/5 py-48 px-12">
            <h2 className='text-5xl font-light mb-2'>Welcome!</h2>
            <div className='border-4 border-black w-20 inline-block mb-2'></div>
            <p className='mb-8'>Join us by Signing up</p>
            <a href='#' className='border-2 border-black rounded-full py-2 px-10 font-bold hover:bg-slate-200' >Sign Up</a>

            

            </div>
            <div className="w-3/5 bg-white rounded-tr-2xl rounded-br-2xl text-white-500">
              <div className='text-left font-semibold text-4xl'>
                Open<span className='text-sky-500'>play</span></div>
              <div className='py-16'>
                <h2 className='text-green font-bold text-3xl mb-2'>Sign in to your account</h2>
                <div className='border-4 border-black w-28 inline-block mb-2'></div>
                <div className='flex justify-center my-2'>
                  <a href='#' className='border-2  border-grey-700 p-2 mx-1 rounded-full'>
                    <FaFacebookF className='text-sm' />
                  </a>
                  <a href='#' className='border-2  border-grey-700 p-2 mx-1 rounded-full'>
                    <FaLinkedinIn className='text-sm' />
                  </a>
                  <a href='#' className='border-2  border-grey-700 p-2 mx-1 rounded-full'>
                    <FaGoogle className='text-sm' />
                  </a>
                </div>
                <p> or use your personal Email to Sign in</p>
                <div className='flex flex-col items-center my-2'>

                  <div className='bg-sky-50 w-64 p-3 flex items-center mb-3'><FaRegEnvelope className='text-grey-400 mr-2 ' />
                  <input type='email' name='email' placeholder='Email' className='bg-grey-100 text-sm outline-none flex-1'/>
                  </div>
                  <div className='bg-sky-50 w-64 p-3 flex items-center mb-3'><MdLockOutline className='text-grey-400 mr-2 ' />
                  <input type='password' name='password' placeholder='Password' className='bg-grey-100 text-sm outline-none flex-1'/>
                  </div>
                  <div className='flex w-64 mb-5 justify-between'>
                    <label className='flex items-center text-xs'><input type='checkbox' name='remember mr-2'/>Remember me</label>
                    <a href='#' className='text-xs hover:bg-slate-100'>Forgot Password</a>
                  </div>
                  <a href='#' className='border-2 border-black rounded-full py-2 px-10 font-bold my-2 hover:bg-slate-200' >Sign In</a>



                </div>
              </div>
            </div>
            </div>
            
        
        
        
      </main>

      
    </div>
  )
}

export default Home
