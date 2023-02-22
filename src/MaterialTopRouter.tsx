import React, { useContext } from "react";
import { View } from "react-native";
import WhatsappText from "./components/texts/WhatsappText";
import ThemeContext from "./context/ThemeContext";
import styles from "./constants/styles";
import { Ionicons, Feather } from "@expo/vector-icons";
import PopUpMenu from "./components/PopUpMenu";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Calls from "./pages/Calls";
import Chats from "./pages/Chats";
import Status from "./pages/Status";
import colors from "./constants/colors";
import { chatsPageActions } from "./constants/actions";
export default function Router() {
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof styles;
  const Tab = createMaterialTopTabNavigator();
  const tabViewTitle = (focused: boolean, title: string) => (
    <WhatsappText
      text={title}
      overrideStyles={[
        styles[currentTheme].smallText,
        {
          color: focused
            ? theme === "dark"
              ? colors.greenComponentColor
              : colors.lightComponentColor
            : theme === "dark"
            ? colors.darkPrimaryComponentColor
            : colors.lightInactiveColor,
        },
      ]}
    />
  );

  return (
    <View style={styles[currentTheme].container}>
      <View style={styles[currentTheme].header}>
        <View style={styles[currentTheme].headerInnerContainer}>
          <WhatsappText
            fontFamily="bold"
            text="WhatsApp"
            overrideStyles={styles[currentTheme].headerText}
          ></WhatsappText>

          <View style={styles[currentTheme].rowSpaceBetweenContainer}>
            <Feather
              name="camera"
              size={20}
              style={styles[currentTheme].icon}
            ></Feather>
            <Ionicons
              name="search-outline"
              size={20}
              style={styles[currentTheme].icon}
            />
            <PopUpMenu actions={chatsPageActions} />
          </View>
        </View>
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor:
              theme === "dark"
                ? colors.greenComponentColor
                : colors.lightComponentColor,
          },

          tabBarStyle: {
            backgroundColor:
              theme === "dark" ? colors.headerDark : colors.headerLight,
          },
        }}
      >
        <Tab.Screen
          name="Chats"
          component={Chats}
          options={{
            tabBarLabel: ({ focused }) => tabViewTitle(focused, "Chats"),
          }}
        />
        <Tab.Screen
          name="Status"
          component={Status}
          options={{
            tabBarLabel: ({ focused }) => tabViewTitle(focused, "Status"),
          }}
        />
        <Tab.Screen
          name="Calls"
          component={Calls}
          options={{
            tabBarLabel: ({ focused }) => tabViewTitle(focused, "Calls"),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
