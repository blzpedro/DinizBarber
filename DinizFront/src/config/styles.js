import { ScaledSheet } from 'react-native-size-matters';
import { Dimensions } from 'react-native';

export const COLOR = {
    MAIN: 'rgb(210, 50, 50)',
    ACCENT: '#1E83B4',
    ORANGE: '#FF7300',
    SECONDARY: '#FFAB66',
    SECONDARY_ACCENT: '#ED6B00',
    DANGER: '#e25b50',
    WARNING: '#fca523',
    LIGHT_YELLOW: '#EBF9E8',
    LIGHT: '#ffffff',
    LIGHT_GRAY: '#e9e9e9',
    GRAY: '#acacac',
    DARK_GRAY: '#6f6f6f',
    DARK: '#040207',
    BLACK: '#000000',
    SHIP_ICON: '#005781',
    MARE_INITIAL: '#086BB7' ,
    MARE_LAST: '#5BB6FC', 
    GREEN: 'rgb(10, 190, 0)'
  };

export const Styles = ScaledSheet.create({
    logoLeft: {
        paddingLeft: '10@s',
        flex: 0.2,
        justifyContent: 'center'
    },
    menuIcon: {
        color: COLOR.LIGHT,
        fontSize: '30@s',
    },
    logoMiddle: {
        flex: 0.6,
        height: '74@vs',
        justifyContent: 'center',
        paddingLeft: '80@s',
        alignItems: 'flex-start'
    },
    logoModal: {
        height: '50@vs',
        width: '50@s',
    },
    logoRight: {
        // paddingRight: '10@s',
        flex: 0.2,
        justifyContent: 'center',
    },
    headerStyle: {
        height: '100@vs',
    },
    userInfo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    header: {
      marginTop: '20@vs',
      // borderBottomColor: COLOR.BLACK,
      // borderBottomWidth: 1
    },
    title: {
      fontSize: '34@s',
      marginVertical: '10@s',
      marginLeft: '10@s',
      color: COLOR.LIGHT
    },
    popover:{
      width: '250@s',
      height: '120@vs',
      marginLeft: '-110@s',
      padding: 0
    },
    hrPopover:{
      borderLeftColor: 
      COLOR.LIGHT, 
      borderLeftWidth: '250@s', 
      height: 1,
      marginVertical: 5
    },
    textPopover:{
      color: COLOR.LIGHT, 
      fontWeight: "bold", 
      marginLeft: 10,
      marginVertical: 5
    },
    iconPopover:{
      backgroundColor: COLOR.MAIN,
      color: COLOR.LIGHT,
      padding: 5,
      borderRadius: 50,
      marginHorizontal: 5
    },
    email: {
      fontSize: '15@s',
      marginLeft: '10@s',
      marginBottom: '10@vs',
    },
    avatar: {
      width: 120,
      height: 120,
      borderWidth: 3,
      borderColor: '#AAA',
      borderRadius: 60,
      margin: 10,
      justifyContent: 'center',
      alignItems: 'center'
    },
    hr:{
      width: '100@s',
      height: 10,
      borderRadius: 10,
      backgroundColor: COLOR.MAIN,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 10,
      marginBottom: 30
    },
    container:{
      backgroundColor: COLOR.DANGER,
      padding: 0,
      flexDirection:'row',
      flexWrap: 'wrap'
    },
    drawerItem: {
      flexDirection: 'row',
      borderColor: COLOR.BLACK,
      borderWidth: 0.5,
      alignItems: 'center',
      marginHorizontal: 0,
      marginBottom: 15,
      paddingLeft: '20@s',
      flexWrap: 'wrap'
    },
    drawerIcon: {
      fontSize: '24@s',
      opacity: 0.5
    },
    drawerLabel: {
      color: COLOR.LIGHT,
      fontSize: '14@s',
    },
});