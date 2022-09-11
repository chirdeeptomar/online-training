import { Text } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'


type Props = {}

const Logo = (props: Props) => {
    return (
        <div className='logo'>
            <Image src={"/logo.jpg"} alt={"Logo"} height={60} width={80}></Image>
            <Text weight={'bold'} size={24} color={"darkgreen"}>Hello Society</Text>
        </div>
    )
}

export default Logo