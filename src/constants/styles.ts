import { StyleSheet, Dimensions } from "react-native";
import colors from "./colors";
const deviceSize = Dimensions.get("window");
const stylesConstants = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
  },
  rowSpaceBetweenContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowAlignContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 30,
  },
  popUpMenu: {
    width: deviceSize.width / 2,
  },
  bigText: {
    fontSize: 20,
  },
  middleText: {
    fontSize: 16,
  },
  smallText: {
    fontSize: 14,
  },
  smallestText: {
    fontSize: 12,
  },
  tabViewPage: {
    padding: 20,
    flex: 1,
  },
  bottomText: {
    color: colors.darkPrimaryComponentColor,
  },
  endcryptedIcon: {
    marginRight: 4,
    color: colors.darkPrimaryComponentColor,
  },
  cardImageOrIconContainer: {
    borderRadius: 200,
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
});
export default {
  dark: StyleSheet.create({
    ...stylesConstants,
    header: {
      ...stylesConstants.header,
      backgroundColor: colors.headerDark,
    },
    icon: {
      ...stylesConstants.icon,
      color: colors.darkPrimaryComponentColor,
    },
    popUpMenu: {
      ...stylesConstants.popUpMenu,
      backgroundColor: colors.headerDark,
    },
    menuText: {
      ...stylesConstants.middleText,
      color: colors.lightComponentColor,
    },
    tabViewPage: {
      ...stylesConstants.tabViewPage,
      backgroundColor: colors.darkSecondaryComponentColor,
    },
    headerInnerContainer: {
      ...stylesConstants.rowSpaceBetweenContainer,
      marginBottom: 10,
    },
    headerText: {
      ...stylesConstants.bigText,
      color: colors.darkPrimaryComponentColor,
    },
    pageInnerContainer: {
      ...stylesConstants.rowAlignContainer,
      marginLeft: 20,
    },
    pageInnerText: {
      ...stylesConstants.middleText,
      color: colors.lightComponentColor,
    },
  }),
  light: StyleSheet.create({
    ...stylesConstants,
    header: {
      ...stylesConstants.header,
      backgroundColor: colors.headerLight,
    },
    icon: {
      ...stylesConstants.icon,
      color: colors.lightComponentColor,
    },
    popUpMenu: {
      ...stylesConstants.popUpMenu,
      backgroundColor: colors.lightComponentColor,
    },
    menuText: {
      ...stylesConstants.middleText,
      color: colors.darkSecondaryComponentColor,
    },
    tabViewPage: {
      ...stylesConstants.tabViewPage,
      backgroundColor: colors.lightComponentColor,
    },
    endcryptedText: {
      ...stylesConstants.bottomText,
    },
    headerInnerContainer: {
      ...stylesConstants.rowSpaceBetweenContainer,
      marginBottom: 10,
    },
    headerText: {
      ...stylesConstants.bigText,
      color: colors.lightComponentColor,
    },
    pageInnerContainer: {
      ...stylesConstants.rowAlignContainer,
      marginLeft: 20,
    },
    pageInnerText: {
      ...stylesConstants.middleText,
      color: colors.darkSecondaryComponentColor,
    },
  }),
};
