import { StatusBar } from "expo-status-bar";
import MaterialTopRouter from "./src/Router";
import { ThemeProvider } from "./src/context/ThemeContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Archived from "./src/pages/Archived";
import SelectContact from "./src/pages/SelectContact";
import { RootStackParamList } from "./src/constants/rootStackParamList";
import LinkedDevices from "./src/pages/LinkedDevices";
import StarredMessages from "./src/pages/StarredMessages";
import Messages from "./src/pages/Messages";
import Settings from "./src/pages/Settings";
import StatusPrivacy from "./src/pages/StatusPrivacy";
import { SearchProvider } from "./src/context/SearchContext";
import ChatSettings from "./src/pages/ChatSettings";
import Profile from "./src/pages/Profile";
import About from "./src/pages/About";
export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <SearchProvider>
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
            <Stack.Screen name="StarredMessages" component={StarredMessages} />
            <Stack.Screen name="Messages" component={Messages} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="StatusPrivacy" component={StatusPrivacy} />
            <Stack.Screen name="ChatSettings" component={ChatSettings} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="About" component={About} />
          </Stack.Navigator>
        </ThemeProvider>
      </SearchProvider>
    </NavigationContainer>
  );
}
