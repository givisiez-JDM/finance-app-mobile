import { View } from 'react-native';
import Home from './src/pages/home/home'

if(__DEV__) {
  import("./ReactotronConfig")
}

export default function App() {
  return (
    <View>
      <Home />
    </View>
  );
}