import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#25292e',
    },
    headerTintColor: 'white'
  }}>
        <Stack.Screen name="(tabs)" options = {{headerShown: false, }}/>
        <Stack.Screen name="not-found"/>
    </Stack>
);
}
