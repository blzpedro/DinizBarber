import React, {useState} from 'react';
import { View, Text, Left, Icon, Card,} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Styles } from '../styles'
import { COLOR } from '../../../config/styles';

export const InfosHorarios = ({tipo, preco, index}) => {
    let cardOddorEven = {};

    if(index % 2){
        cardOddorEven = {
            start: { x: 0, y: 2 },
            end: { x: 1, y: 2 },
            colors: [COLOR.DANGER, COLOR.MAIN],
            style: Styles.lineMares
        };  
    } else {
        cardOddorEven = {
            start: { x: 1, y: 0 },
            end: { x: 0, y: 0 },
            colors: [COLOR.DANGER, COLOR.MAIN],
            style: Styles.lineMares
        };
    }

  return (
    <View> 
        <View style={Styles.viewInfo}>
            <Text style={Styles.itemTitle}>Tipo </Text>
            <Text style={Styles.itemInfo}>{tipo}</Text>
            <View style={Styles.divider}><Text></Text></View>
            <Text style={Styles.itemTitle}>Preço </Text>
            <Text style={Styles.itemInfo}>{preco}</Text>
        </View>          
    </View>
)};
