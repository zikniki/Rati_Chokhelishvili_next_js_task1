import React from 'react'
import Image from 'next/image'
import Card from '../molecules/card'

const main = () => {
    return (
        <div className="flex-shrink-0">
            <Image
                src="/bgimg.png"
                alt="bg"
                width={100}
                height={156}
                style={{ width: '100%' }}
            />
            <div className='flex flex-col justify-start min-h-[100vh] bg-[#EFFAFA]'>
                <Card />
            </div>
        </div>
    )
}

export default main