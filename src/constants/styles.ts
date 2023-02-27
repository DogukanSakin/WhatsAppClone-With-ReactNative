import { StyleSheet, Dimensions } from "react-native";
import colors from "./colors";
const deviceSize = Dimensions.get("window");
export const stylesConstants = StyleSheet.create({
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
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
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
  input: {
    marginLeft: 10,
    color: colors.darkPrimaryComponentColor,
  },
  floatingButton: {
    borderRadius: 200,
    position: "absolute",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: colors.greenComponentColor,
  },
  cardBottomIconContainer: {
    height: 24,
    width: 24,
    borderRadius: 200,
    position: "absolute",
    right: -4,
    bottom: -4,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
  },
  tabViewPageInfoBox: {
    justifyContent: "center",
    padding: 10,
  },
  whatsappButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.headerLight,
    borderRadius: 50,
    padding: 6,
  },
  messageCardContainer: {
    padding: 10,

    borderRadius: 10,
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
    cardBottomIconContainer: {
      ...stylesConstants.cardBottomIconContainer,
      borderColor: colors.darkSecondaryComponentColor,
    },
    tabViewPageInfoBox: {
      ...stylesConstants.tabViewPageInfoBox,
      backgroundColor: colors.darkSecondaryComponentColor,
    },
    messageCardContainer: {
      ...stylesConstants.messageCardContainer,
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
    cardBottomIconContainer: {
      ...stylesConstants.cardBottomIconContainer,
      borderColor: colors.lightComponentColor,
    },
    tabViewPageInfoBox: {
      ...stylesConstants.tabViewPageInfoBox,
      backgroundColor: colors.lightSecondaryComponentColor,
    },
    messageCardContainer: {
      ...stylesConstants.messageCardContainer,
    },
  }),
};
