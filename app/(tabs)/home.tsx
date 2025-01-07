'use dom';

import { Text, TextInput, View } from 'react-native';
// Remember to import the global.css file in each DOM component.
import '../../global.css';
import { Image} from 'expo-image'
import { Link } from 'expo-router';

const home = () => {
  return (
    <div className="flex flex-col flex-1 gap-5 p-5">

        <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-3">
        <Image  source={require('../../assets/images/avatar.png')} style={{height:60,width:60}}/>
        <div className="flex flex-col">
            <p className="text-gray-500">Good Morning</p>
            <h3 className="text-xl font-semibold">Spaqoo</h3>
        </div>
        </div>
        <Image  source={require('../../assets/icons/bell.png')} style={{height:30,width:30}}/>

        </div>


        <div className="flex bg-gray-200 p-4 py-2 rounded items-center justify-between gap-3">
        <Image source={require('../../assets/icons/search.png')} style={{height:30,width:30}}/>
        <input className='flex-1 py-2 text-xl bg-transparent border-transparent' placeholder='Search Something'/>
        <Image source={require('../../assets/icons/filter.png')} style={{height:30,width:30}}/>
        </div>

        <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">Featured</h3>
            <h3 className="text-2xl font-bold text-blue-500">See All</h3>
        </div>

        <div className="relative border h-[400px] w-[300px] rounded-3xl">
          <Image source={require('../../assets/images/new-york.png')} className='absolute' style={{height:400, width:300}}/>
        <div className="absolute top-0 border h-[400px] w-[300px] rounded-2xl p-7 flex flex-col justify-between bg-black-transparent">
          <div className="p-1 rounded-full bg-white"></div>
          <div className="flex flex-col">
            <div className="text-white text-3xl font-semibold">Skardu</div>
            <div className="text-white text-2xl">New York , Skd</div>
            <div className="flex justify-between items-center">
            <div className="text-white text-3xl font-semibold">Skardu</div>
            <Image source={require('../../assets/icons/heart.png')} className='absolute' style={{height:30, width:30}}/>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default home