'use client'
// @preserveUnusedImports
import { getProviders } from 'next-auth/react';
import Image from 'next/image';
import Link from "next/link";
import { useEffect, useState } from 'react';
// import { useState , useEffect } from "react";
import { signIn } from 'next-auth/react';
// import {signIn, singOut, useSession , getProviders} from 'next-auth'
const Nav = () => {

const isUserLoggedIn = true;
const [toggle,setToggleDropdown] = useState(false);
const [providers , setProviders] = useState(null);

useEffect(()=>{
const setProviderss = async ()=>{
    const response = await getProviders();
    setProviders(response);
}

setProviderss();

},[])

const signOut = ()=>{
    console.log('signout clicked')
}

  return (
    <nav className="flex-between w-full mb-16 pt-3 ">

        <Link href={'/'} className="flex gap-2 flex-center">
            
            <Image src={'/assets/images/logo.svg'} width={'30'} height={'30'} className='object-contain'></Image>
            <p className='logo_text'>Promptopia</p>
        </Link>

<div className='sm:flex hidden'>
{isUserLoggedIn ? <div className='flex gap-3 md:gap-5'>
    <Link href={'/create-prompt'} className='black_btn'>Create Post</Link>
    <button type='button' onClick={signOut} className='outline_btn'>Sign Out</button>
    <Link href={'/profile'}> <Image src={'/assets/images/logo.svg'} width={'37'} height={'37'} className='rounded-full' alt=''></Image> </Link>
</div> : <>

{providers && Object.values(providers).map((provider)=>{
    return <button type='button' key={provider.name} onClick={signIn(provider.id)} className='black_btn'>SignIn</button>
})}

</> }
</div>


{/* Mobile Navigation */}

<div className='sm:hidden flex relative'>
{isUserLoggedIn ? <div className='flex'><Image src={'assets/images/logo.svg'} width={'37'} height={'37'} className='rounded-full' alt='' onClick={()=>{setToggleDropdown((prev)=>!prev)}}></Image>
{toggle ? <div className='dropdown'><Link href={'/profile'} className='dropdown_link' onClick={()=>setToggleDropdown(false)}>My Profile</Link> <Link href={'/create-prompt'} className='dropdown_link' onClick={()=>setToggleDropdown(false)}>Create Prompt</Link> <button type='button' onClick={()=>setToggleDropdown(false)} className='mt-5 w-full black_btn'>Sign Out</button> </div> : ''}
</div> : <>

{providers && Object.values(providers).map((provider)=>{
    return <button type='button' key={provider.name} onClick={signIn(provider.id)} className='black_btn'>SignIn</button>
})}

</>
}
</div>
    </nav>
  )
}

export default Nav