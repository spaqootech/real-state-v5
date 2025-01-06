import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'

const Auth = () => {
  return (
    <View className='flex-1 bg-white'>
        <Image source={require('../assets/images/onboarding.png')} style={{height:600,width:"100%"}}/>
        <div className="flex flex-col gap-4 p-10 text-center justify-center items-center">
          <p className="text-xl text-gray-500">WELCOME TO REAL STATE</p>
          <h1 className="text-4xl font-bold">Let's Get You Closer To Your Ideal Home</h1>
          <p className="text-xl text-gray-500">Login to Real State with Google</p>
          <button className="flex bg-gray-100 p-3 font-semibold text-xl">Sign Upwith Google</button>
        </div>
    </View>
  )
}

export default Auth