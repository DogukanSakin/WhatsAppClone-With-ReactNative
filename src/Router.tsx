import React, { useContext, useLayoutEffect, useState } from "react";
import { View } from "react-native";
import WhatsappText from "./components/texts/WhatsappText";
import ThemeContext from "./context/ThemeContext";
import themeStyles, { stylesConstants } from "./constants/styles";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import PopUpMenu from "./components/PopUpMenu";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Calls from "./pages/Calls";
import Chats from "./pages/Chats";
import Status from "./pages/Status";
import colors from "./constants/colors";
import {
  callsPageActions,
  chatsPageActions,
  statusPageActions,
} from "./constants/actions";
import Action from "./models/Action";
import {
  getFocusedRouteNameFromRoute,
  useRoute,
} from "@react-navigation/native";
import Input from "./components/Input";
export default function Router({ navigation }: any) {
  const route = useRoute();
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof themeStyles;
  const Tab = createMaterialTopTabNavigator();
  const [searchBarVisible, setSearchBarVisible] = useState<boolean>(false);
  const [currentRouteName, setCurrentRouteName] = useState<string>("Chats");
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const menuAction = (selectedAction?: Action) => {
    if (currentRouteName === "Chats") {
      switch (selectedAction?.actionName) {
        case "New Group":
          return navigation.navigate("SelectContact", {
            headerText: "New Group",
          });
        case "New Boardcast":
          return navigation.navigate("SelectContact", {
            headerText: "New Boardcast",
          });
        case "Linked Devices":
          return navigation.navigate("LinkedDevices");
        case "Starred Messages":
          return navigation.navigate("StarredMessages");
      }
    }
  };
  const ChatsPage = () => (
    <Chats
      navigation={navigation}
      searchInChat={currentRouteName === "Chats" ? searchInputValue : ""}
    />
  );
  const StatusPage = () => <Status />;
  const CallsPage = () => <Calls />;
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    searchBarVisible === true && setSearchBarVisible(false);
    routeName && setCurrentRouteName(routeName);
  }, [navigation, route]);

  const tabViewTitle = (focused: boolean, title: string) => (
    <WhatsappText
      text={title}
      overrideStyles={[
        stylesConstants.smallText,
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
    <View style={stylesConstants.container}>
      <View style={themeStyles[currentTheme].header}>
        {searchBarVisible === true ? (
          <View style={stylesConstants.rowContainer}>
            <AntDesign
              onPress={() => setSearchBarVisible(false)}
              name="arrowleft"
              size={24}
              color={
                theme === "dark"
                  ? colors.darkPrimaryComponentColor
                  : colors.lightComponentColor
              }
            />
            <Input
              placeholder="Search..."
              onChangeText={(text: string) => setSearchInputValue(text)}
            />
          </View>
        ) : (
          <>
            <View style={themeStyles[currentTheme].headerInnerContainer}>
              <WhatsappText
                fontFamily="bold"
                text="WhatsApp"
                overrideStyles={themeStyles[currentTheme].headerText}
              ></WhatsappText>

              <View style={stylesConstants.rowSpaceBetweenContainer}>
                <Feather
                  name="camera"
                  size={20}
                  style={themeStyles[currentTheme].icon}
                ></Feather>
                <Ionicons
                  onPress={() => setSearchBarVisible(true)}
                  name="search-outline"
                  size={20}
                  style={themeStyles[currentTheme].icon}
                />
                <PopUpMenu
                  actions={
                    currentRouteName === "Chats"
                      ? chatsPageActions
                      : currentRouteName === "Status"
                      ? statusPageActions
                      : callsPageActions
                  }
                  onActionPress={menuAction}
                />
              </View>
            </View>
          </>
        )}
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
          component={ChatsPage}
          options={{
            tabBarLabel: ({ focused }) => tabViewTitle(focused, "Chats"),
          }}
        />
        <Tab.Screen
          name="Status"
          component={StatusPage}
          options={{
            tabBarLabel: ({ focused }) => tabViewTitle(focused, "Status"),
          }}
        />
        <Tab.Screen
          name="Calls"
          component={CallsPage}
          options={{
            tabBarLabel: ({ focused }) => tabViewTitle(focused, "Calls"),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
