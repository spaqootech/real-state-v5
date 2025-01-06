'use dom';

import { Text, View } from 'react-native';
// Remember to import the global.css file in each DOM component.
import '../../global.css';
import { Image} from 'expo-image'
import { Link } from 'expo-router';

const home = () => {
  return (
    <View>
      <Text>home</Text>
    </View>
  )
}

export default home