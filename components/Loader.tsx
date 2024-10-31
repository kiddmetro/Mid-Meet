import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div>
        <Image
        src='/icons/loading-circle.svg'
        alt='loader'
        width={50}
        height={50}
        />
    </div>
  )
}

export default Loader