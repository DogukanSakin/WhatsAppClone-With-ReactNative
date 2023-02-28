import React, { useContext, useLayoutEffect, useState } from "react";
import { View, SafeAreaView } from "react-native";
import WhatsappText from "./components/texts/WhatsappText";
import ThemeContext from "./context/ThemeContext";
import themeStyles, { stylesConstants } from "./constants/styles";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";
import PopUpMenu from "./components/PopUpMenu";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Calls from "./pages/Calls";
import Chats from "./pages/Chats";
import Status from "./pages/ContactStatus";
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
import SearchContext from "./context/SearchContext";
import AlertModal from "./components/modals/AlertModal";
export default function Router({ navigation }: any) {
  const route = useRoute();
  const { theme } = useContext(ThemeContext);
  const currentTheme = theme as keyof typeof themeStyles;
  const Tab = createMaterialTopTabNavigator();
  const [searchBarVisible, setSearchBarVisible] = useState<boolean>(false);
  const [currentRouteName, setCurrentRouteName] = useState<string>("Chats");
  const [alertModalVisible, setAlertModalVisible] = useState<boolean>(false);
  const handleModalVisible = () => setAlertModalVisible(!alertModalVisible);
  const { setSearchValue } = useContext(SearchContext);
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
        case "Settings":
          return navigation.navigate("Settings");
      }
    } else if (currentRouteName === "Status") {
      switch (selectedAction?.actionName) {
        case "Settings":
          return navigation.navigate("Settings");
        case "Status Privacy":
          return navigation.navigate("StatusPrivacy");
      }
    } else {
      switch (selectedAction?.actionName) {
        case "Settings":
          return navigation.navigate("Settings");
        case "Clear call log":
          return setAlertModalVisible(true);
      }
    }
  };

  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
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
    <SafeAreaView style={stylesConstants.container}>
      {alertModalVisible && (
        <AlertModal isVisible={alertModalVisible} onClose={handleModalVisible}>
          <WhatsappText
            text="Do you want to clear your entire call log?"
            overrideStyles={[
              stylesConstants.middleText,
              {
                marginBottom: 20,
                color:
                  theme === "dark"
                    ? colors.darkPrimaryComponentColor
                    : colors.darkSecondaryComponentColor,
              },
            ]}
          ></WhatsappText>
        </AlertModal>
      )}
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
              onChangeText={(text: string) => setSearchValue(text)}
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
    </SafeAreaView>
  );
}
