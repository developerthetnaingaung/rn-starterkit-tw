import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-500">
      <Text className='font-bold text-lg text-red-500'>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
