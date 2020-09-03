import { ScaledSheet, scale } from "react-native-size-matters";
import { COLOR } from "../../config/styles";
import { Dimensions } from "react-native";

export const Styles = ScaledSheet.create({
    label:{
        color: COLOR.MAIN,
        borderColor: 'transparent',
    },
    title:{
        fontSize: '24@s', 
        color: COLOR.BLACK,
        fontWeight: 'bold',
        marginLeft: '10@s',
        marginVertical: '20@vs'
    },
    btnEntrar: {
        borderRadius: 30,
        backgroundColor: COLOR.MAIN,
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '200@s',
        fontWeight: 'bold',        
        marginTop: '40@vs',
        justifyContent: 'center'
    },
    input:{
        backgroundColor: 'rgba(30,30,30,0.1)',
        borderColor: 'transparent',
        width: '100@s',
    },
});