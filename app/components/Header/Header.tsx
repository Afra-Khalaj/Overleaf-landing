import React from 'react'
import Link from 'next/link'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

const Header = () => {
  return (
    <div className='flex items-center px-6 pb-10'>
        <Link className='text text-4xl text-primary font-title' href="/">HPC LaTeX Editor</Link>
        <Link href="/templates" className='ml-auto text-xl hover:text-secondary'>Templates</Link>
        <Link href="/docs" className='ml-6 mr-6 text-xl hover:text-secondary'>Docs</Link>
        <PrimaryButton href="https://dev.latex.hpc.ipm.ac.ir">Login</PrimaryButton>
    </div>
  )
}

export default Header