'use client'

import { sidebarLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import React from 'react'

const Sidebar = () => {

  const pathname = usePathname()

  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit  flex-col justify-between bg-light-1 pt-28 text-black max-md:hidden lg:w-[264px]'>
      <div className='flex flex-1 flex-col gap-6'>
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.route || pathname.startsWith(link.route)

          return (
            <Link href={link.route} key={link.label}
            className={cn(
              'flex items-center gap-4 rounded-lg p-4 justify-center'
              {'bg-red-600': isActive}
            )}
            >
              {link.label}
            </Link>
          )

        })}

        
      </div>
    </section>
  )
}

export default Sidebar