import { StatusBar } from "expo-status-bar";
import MaterialTopRouter from "./src/Router";
import { ThemeProvider } from "./src/context/ThemeContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Archived from "./src/pages/Archived";
import SelectContact from "./src/pages/SelectContact";
import { RootStackParamList } from "./src/constants/rootStackParamList";
import LinkedDevices from "./src/pages/LinkedDevices";
export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <ThemeProvider>
        <StatusBar style="light" translucent={false} />
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="MaterialTopRouter"
        >
          <Stack.Screen
            name="MaterialTopRouter"
            component={MaterialTopRouter}
          />
          <Stack.Screen name="Archived" component={Archived} />
          <Stack.Screen name="SelectContact" component={SelectContact} />
          <Stack.Screen name="LinkedDevices" component={LinkedDevices} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
