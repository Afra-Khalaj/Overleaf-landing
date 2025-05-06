import React from 'react'
import Link from 'next/link'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

const Header = () => {
  return (
    <div className='flex items-center px-6 pb-6'>
        <Link className='text text-4xl text-primary font-title font-semibold' href="/">HPC LaTeX Editor</Link>
        {/* <Link href="/docs" className='ms-auto text-xl hover:text-primary'>قالب‌ها</Link> */}
        <Link href="/templates" className='ms-auto me-6 text-xl hover:text-primary'>قالب‌ها</Link>
        <PrimaryButton href="https://dev.latex.hpc.ipm.ac.ir">ورود</PrimaryButton>
    </div>
  )
}

export default Header