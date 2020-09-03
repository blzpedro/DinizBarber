import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Left, Icon, Card,} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Styles } from '../styles'
import { COLOR } from '../../../config/styles';
import { verticalScale, scale } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ImageBackground, Alert } from 'react-native';
import { InfosHorarios } from './InfosHorarios';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { api } from '../../../utils/api';

export const Horarios = ({dia, diaHorarioAceiteId, dataInicio, dataFim, usuario, reservarHorario, cancelarHorario}) => {

    const [expanded, setExpanded] = useState(true);

    const cardBlue = {
        start: { x: 0, y: 0 },
        end: { x: 1, y: 0 },
        colors: [COLOR.DANGER, COLOR.MAIN],
    };

    const toggleExpand = () => {
        setExpanded(!expanded);
    }

    return (
        <View>        
            <LinearGradient {...cardBlue} style={Styles.cardBox}>
                <TouchableOpacity style={{ height: expanded ? scale(150) : scale(60) }} 
                    // onPress={toggleExpand}
                >
                    <Card transparent>
                        <View style={{ flexDirection: 'row', marginTop: verticalScale(10), marginBottom: verticalScale(20), justifyContent: 'space-evenly' }}>
                            <View style={{marginHorizontal: 0}}>
                                <Text style={Styles.titleCard}>
                                {moment(dia.dtDia).format('DD/MM/YYYY')}
                                </Text>
                                <Text style={Styles.date}>{dataInicio} - {dataFim}</Text>
                            </View>
                            <View style={{marginTop: verticalScale(10)}}>
                                <Text style={Styles.titleCard}>
                                {usuario.nome}
                                </Text>
                            </View>
                            <Icon name={expanded ? "md-arrow-dropup-circle" : "md-arrow-dropdown-circle"} type="Ionicons" style={Styles.upDownIcon} />
                        </View>
                        {/* {arrayTeste.map((index) => (
                            <InfosHorarios
                                tipo={'Cabelo'}
                                preco={'R$ 30,00'}
                                index={index}
                            />
                        ))}         */}                    
                        <View style={{ flexDirection: 'row', marginTop: verticalScale(20), marginBottom: verticalScale(10), justifyContent: 'center' }}>                        
                            <View style={{ backgroundColor: '#fff', borderRadius: 25, width: 30, height: 30, marginHorizontal: 15, marginLeft: -10  }}>
                                <Icon name={'closecircle'} type="AntDesign" style={Styles.recusarIcon} 
                                onPress={() => cancelarHorario(diaHorarioAceiteId, usuario.loginId)}/>
                            </View>
                            <View style={{ backgroundColor: '#fff', borderRadius: 25, width: 30, height: 30, marginHorizontal: 15  }}>
                                <Icon name={'checkcircle'} type="AntDesign" style={Styles.aceitarIcon} 
                                onPress={() => reservarHorario(diaHorarioAceiteId, usuario.loginId)}/>
                            </View>
                        </View>
                    </Card> 
                </TouchableOpacity>
            </LinearGradient> 
        </View>
    )
};
