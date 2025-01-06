import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { Link } from 'expo-router'

const Auth = () => {
  return (
    <View className='flex-1 bg-white'>
        <Image source={require('../assets/images/onboarding.png')} style={{height:550,width:"100%"}}/>
        <div className="flex flex-col gap-4 p-10 text-center justify-center items-center">
          <p className="text-xl text-gray-500">WELCOME TO REAL STATE</p>
          <h1 className="text-4xl font-bold">Let's Get You Closer To Your Ideal Home</h1>
          <p className="text-xl text-gray-500">Login to Real State with Google</p>
          <Link href='/home'>
          <button className="flex justify-center gap-3 items-center rounded-full border border-gray-500 p-4 font-semibold text-xl w-[400px]">
        <Image source={require('../assets/icons/google.png')} style={{height:30,width:30}}/>
            Sign Upwith Google</button>
            </Link>
        </div>
    </View>
  )
}

export default Auth