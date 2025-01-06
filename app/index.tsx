'use dom';

import { View } from 'react-native';
// Remember to import the global.css file in each DOM component.
import '../global.css';
import { Image} from 'expo-image'
import { Link } from 'expo-router';
export default function Page() {
  return (
    <div className="flex flex-1 justify-center items-center">
      <Link href='/auth'>
      <Image source={require('../assets/images/splash.png')} style={{height:300,width:300}}/>
      </Link>
    </div>
  );
}
