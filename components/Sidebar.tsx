'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'

const Sidebar = () => {

  const pathname = usePathname()

  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit  flex-col justify-between bg-light-2 pt-28 text-white max-md:hidden lg:w-[264px]'>
      <div className='flex flex-1 flex-col gap-6'>
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.route || pathname.startsWith(link.route)

          return (
            <Link href={link.route} key={link.label}
            className={cn(
              'flex items-center gap-4 rounded-lg p-4 justify-center',
              {'bg-green-500': isActive}
            )}
            >

              <img src={link.imgURL} alt={link.label} width={24} height={24} />

              <p className='text-lg font-semibold max-lg:hidden'>{link.label}</p>
            </Link>
          )

        })}

        
      </div>
    </section>
  )
}

export default Sidebar