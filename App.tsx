import { StatusBar } from "expo-status-bar";
import MaterialTopRouter from "./src/MaterialTopRouter";
import { ThemeProvider } from "./src/context/ThemeContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Archived from "./src/pages/Archived";
import NewGroup from "./src/pages/NewGroup";
export default function App() {
  const Stack = createNativeStackNavigator();
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
          <Stack.Screen name="NewGroup" component={NewGroup} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}
