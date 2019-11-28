import { StyleSheet, Dimensions, Platform } from 'react-native';
import Apptheme from './colorThemes';
const { height, width } = Dimensions.get('window');
const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896);

export default StyleSheet.create({
  
  // HEADER COMPONENT STYLES 
    title: {
      width: width,
      paddingHorizontal: Apptheme.SIZES.BASE*0.4,
      fontSize: Apptheme.SIZES.BASE,
      color: Apptheme.COLORS.LABEL
      // fontWeight: 'bold',
    },

    navbar: {
      paddingVertical: 0,
      paddingBottom: Apptheme.SIZES.BASE * 1.5,
      paddingTop: iPhoneX ? Apptheme.SIZES.BASE * 4 : Apptheme.SIZES.BASE -5,
      zIndex: 5,
    },

  // BACKGROUND STYLES
  appBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 0,
  },
  gradient: {
    width: Apptheme.SIZES.BASE * 2.28,
    height: Apptheme.SIZES.BASE * 2.28,
    borderRadius: Apptheme.SIZES.BASE * 2.28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: {
    marginRight: Apptheme.SIZES.BASE - 2,
  },

  // General
  shadow: {
    backgroundColor: Apptheme.COLORS.WHITE,
    shadowColor: Apptheme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  container: {
    paddingHorizontal: Apptheme.SIZES.BASE,
  },
  containerAdjust: Apptheme.SIZES.BASE,
  containerIntro: { 
    justifyContent: 'flex-end', 
    marginBottom: -100 
  },
  card: {
    borderColor: 'transparent',
    marginHorizontal: Apptheme.SIZES.BASE,
    marginVertical: Apptheme.SIZES.BASE / 2,
    padding: Apptheme.SIZES.BASE*0.5,
    backgroundColor: Apptheme.COLORS.WHITE,
    shadowOpacity: 0.40,
  },
  cardHeight: {
    padding: Apptheme.SIZES.BASE,
    height: '70%'
  },
  question: {
    paddingVertical: Apptheme.SIZES.BASE*3,
    borderColor: Apptheme.COLORS.LABEL,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  answer: {
    paddingVertical: Apptheme.SIZES.BASE,
  },
  uMarginTop: {
    marginTop: Apptheme.SIZES.BASE*3.5
  },
  uMarginBottom: {
    marginBottom: Apptheme.SIZES.BASE*0.5
  },
  uMarginBottomLarge: {
    marginBottom: Apptheme.SIZES.BASE * 2
  },

  //Result Page
  winnerContainer: {
    justifyContent:"center"
  },
  failedContainer: {
    justifyContent:'flex-end'
  },
  resultText: {
    fontSize: Apptheme.SIZES.BASE*2.2,
    color: Apptheme.COLORS.WHITE
  },
  resultTextWin: {
    color: Apptheme.COLORS.SUCCESS
  },
  resultTextTotal: {
    color: Apptheme.COLORS.INFO
  }
});
