import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return <Tabs screenOptions={{
    tabBarShowLabel: false, headerTitleAlign: 'center', tabBarActiveTintColor: '#D4AF37',
    headerStyle: {
      backgroundColor: '#004080',
    },
    headerTintColor: 'white',
    tabBarStyle: {
      backgroundColor: '#004080'
    }
  }}>
    <Tabs.Screen name="index" options={{
      headerTitle: "O que é tombamento?", tabBarIcon: ({ focused, color }) => (<AntDesign name="home" style={{marginTop:10}} size={24} color={focused ? '#F1D302' : '#cccccc'} />), tabBarItemStyle: {
        borderRightWidth: 2,
        borderColor: '#cccccc',
      }
    }} />
    <Tabs.Screen name="about" options={{ headerTitle: "Exemplos", tabBarIcon: ({ focused, color }) => (<Entypo name="info" style={{marginTop:10}} size={24} color={focused ? '#F1D302' : '#cccccc'} />) }} />
    <Tabs.Screen name="not-found" />
  </Tabs>
}
