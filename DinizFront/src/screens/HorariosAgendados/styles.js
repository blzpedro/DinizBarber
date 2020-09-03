import { ScaledSheet } from "react-native-size-matters";
import { COLOR } from "../../config/styles";

export const Styles = ScaledSheet.create({
    safeAreaView: {
      alignItems: 'center',
    },
    welcomeText: {
      fontSize: '24@s',
      fontWeight: 'bold',
    },
    featuresText: {
      fontSize: '20@s',
    },
    text: {
      fontSize: '16@s'
    },
    box:{
      width: '200@s'
    },
    markerIcon:{
      width: '30@s',
      height: '40@s',
    },
    label:{
        color: COLOR.MAIN,
        width: '300@vs',
        marginRight: 'auto',
        marginLeft: 'auto',
        borderColor: 'transparent'
    },
    input:{
        backgroundColor: 'rgba(30,30,30,0.1)',
        width: '250@s',
        marginRight: 'auto',
        marginLeft: 'auto',
        borderColor: 'transparent'
    },
    title:{
        alignSelf: 'center',
        fontSize: '24@s', 
        textAlign: 'center', 
        color: COLOR.BLACK,
        marginTop: 10
    },
    upDownIcon: {
        color: COLOR.LIGHT,
        fontSize: '20@s',
        paddingVertical: '8@vs',
        marginLeft: '0@s',
        marginRight: '20@s'
    },
    aceitarIcon:{
        color: COLOR.GREEN,
        fontSize: '30@s',
        paddingVertical: '8@vs',
        marginLeft: '0@s',
        marginRight: '20@s',
        marginTop: -10,
        width: '100@s',
    },
    recusarIcon:{
        color: COLOR.MAIN,
        width: '100@s',
        fontSize: '30@s',
        paddingVertical: '8@vs',
        marginLeft: '0@s',
        marginRight: '20@s',
        marginTop: -10
    },
    viewInfo: {
        flexDirection: 'row',
        paddingBottom: '5@vs',
        marginTop: '20@vs',
        justifyContent: 'center'
    },
    itemTitle: {
        fontSize: '10@s',
        marginTop: '5@vs',
        marginRight: '3@s',
        color: COLOR.LIGHT_GRAY,
    },
    iconTitle:{
        color: COLOR.LIGHT,
        backgroundColor: COLOR.MAIN,
        padding: 4,
        borderRadius: 50,
        width: '40@s',
        height: '45@vs',
        textAlign: 'center'
    },
    itemInfo:{
        color: COLOR.LIGHT,
        fontWeight: 'bold',
    },
    title:{
        fontSize: '24@s', 
        color: COLOR.BLACK,
        fontWeight: 'bold',
        marginLeft: '10@s',
        marginVertical: '20@vs'
    },
    boxClimatempo:{        
        flexDirection: 'row', 
        alignItems: 'center',
        padding: '20@s',
        marginTop: '50@vs'
    },
    card:{
        flexDirection: 'row',
        padding: '10@s',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '60@vs'
    },
    cardBox:{
        marginTop: 10, 
        borderRadius: 20,     
        elevation: 7,
        marginHorizontal: '20@s',
    },
    numberTemp:{
        color: COLOR.LIGHT,
        fontWeight: 'bold',
        justifyContent: 'center',
    },
    divider:{
        borderLeftWidth: 1,
        borderColor: COLOR.LIGHT,
        marginHorizontal: '20@s',
    },
    smallText: {
        fontSize: 11,
    },
    titleCard:{
        color: COLOR.LIGHT,
        fontWeight: 'bold',
        width: '100@s',
        textAlign: 'center'
    },
    date:{
        color: COLOR.LIGHT,
        fontSize: '12@s',
        textAlign: 'center'
    },
    dividerHorizontal:{        
        borderLeftWidth: 1,
        borderColor: COLOR.LIGHT,
        marginHorizontal: '10@s'
    },
    iconCard:{
        opacity: 0.6,
        color: COLOR.LIGHT
    },
    iconTitle:{
        color: COLOR.LIGHT,
        backgroundColor: COLOR.MAIN,
        padding: 7,
        borderRadius: 50,
        width: '45@s',
        height: '50@vs',
        textAlign: 'center'
    },
});