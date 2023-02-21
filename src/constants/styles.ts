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
  headerText: {
    fontSize: 20,
  },
  headerInnerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    marginLeft: 30,
  },
  popUpMenu: {
    width: deviceSize.width / 2,
  },
  menuText: {
    fontSize: 16,
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
      color: colors.darkComponentColor,
    },
    popUpMenu: {
      ...stylesConstants.popUpMenu,
      backgroundColor: colors.headerDark,
    },
    menuText: {
      ...stylesConstants.menuText,
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
      ...stylesConstants.menuText,
      color: colors.lightTextColor,
    },
  }),
};
