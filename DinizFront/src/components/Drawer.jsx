import React from 'react';
import 'react-native-gesture-handler';
import { DrawerItemList, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Thumbnail, Text, Icon} from 'native-base';
import { Styles } from '../config/styles';
import { SafeAreaView, ScrollView } from 'react-native';
import { COLOR } from '../config/styles';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { verticalScale } from 'react-native-size-matters';
import { Types } from '../store/ducks/authenticate';
import { useDispatch } from 'react-redux';

const logoProps = {
    style: Styles.logo,
    source: require('../assets/logo-modal.png'),
    square: true,
};

const avatarProps = {
    source: require('../assets/logo-modal.png'),
    square: true
};

export const Drawer = props => {
    const { navigation: { navigate } } = props;
    const dispatch = useDispatch();

    // const navItem = (nav, text) => {

    //     return (
    //       <TouchableOpacity
    //         style={Styles.touchableNavLink}
    //         onPress={() => navigation.navigate(nav)}>
    //         <Text style={Styles.textNavLink}>{text}</Text>
    //       </TouchableOpacity>
    //     );
    //   }

    function logout(){     
        const token =  null 
        const admin = null    
        navigate('Login')
        dispatch({type: Types.LOGAR, admin, token})
    }

    return (
    <SafeAreaView style={{ flex: 1, flexDirection:'row' }} forceInset={{ top: 'always', horizontal: 'never' }}>
        <DrawerContentScrollView {...props} style={Styles.container}>
            <View style={Styles.header}>
                <View style={Styles.userInfo}>
                    <View>
                        <Text style={Styles.title}>MENU</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={Styles.drawerItem}>
            <Icon name="playlist-plus" type="MaterialCommunityIcons" style={Styles.drawerIcon} />
            <DrawerItem {...props} label='Disponibilizar horários' onPress={() => navigate('LiberarHorarios')} labelStyle={Styles.drawerLabel} />
            </TouchableOpacity>

            <TouchableOpacity style={Styles.drawerItem}>
            <Icon name="playlist-check" type="MaterialCommunityIcons" style={Styles.drawerIcon} />
            <DrawerItem {...props} label='Horários reservados' onPress={() => navigate('HorariosAgendados')} labelStyle={Styles.drawerLabel} />
            </TouchableOpacity>

            <TouchableOpacity style={Styles.drawerItem}>
            <Icon name="playlist-edit" type="MaterialCommunityIcons" style={Styles.drawerIcon} />
            <DrawerItem {...props} label='Horários pendentes' onPress={() => navigate('HorariosPendentes')} labelStyle={Styles.drawerLabel} />
            </TouchableOpacity>

            {/* <TouchableOpacity style={Styles.drawerItem} onPress={() => navigate('Agendamento')}>
            <Icon name="calendar-clock" type="MaterialCommunityIcons" style={Styles.drawerIcon} />
            <DrawerItem {...props} label={'Agendamentos \n Pendentes'} labelStyle={Styles.drawerLabel} />
            </TouchableOpacity> */}

            {/* <TouchableOpacity style={Styles.drawerItem} onPress={() => navigate('Passagens')}>
            <Icon name="restore-clock" type="MaterialCommunityIcons" style={Styles.drawerIcon} />
            <DrawerItem {...props} label='Histórico de Passagens' labelStyle={Styles.drawerLabel} />
            </TouchableOpacity> */}

            {/* <TouchableOpacity style={Styles.drawerItem} onPress={() => navigate('Trafego')}>
            <Icon name="earth" type="MaterialCommunityIcons" style={Styles.drawerIcon} />
            <DrawerItem {...props} label='Histórico de Tráfego' labelStyle={Styles.drawerLabel} />
            </TouchableOpacity>

            <TouchableOpacity style={Styles.drawerItem} onPress={() => navigate('Alertas')}>
            <Icon name="bell" type="MaterialCommunityIcons" style={Styles.drawerIcon} labelStyle={Styles.drawerLabel} />
            <DrawerItem {...props} label='Histórico de Alertas' labelStyle={Styles.drawerLabel} />
            </TouchableOpacity> */}

            <TouchableOpacity style={[Styles.drawerItem, { marginTop: verticalScale(200) }]} onPress={() => logout()}>
            <Icon name="exit-to-app" type="MaterialCommunityIcons" style={Styles.drawerIcon} labelStyle={Styles.drawerLabel} />
            <DrawerItem {...props} label='Sair' labelStyle={Styles.drawerLabel} />
            </TouchableOpacity>

        </DrawerContentScrollView>
    </SafeAreaView>
    )
}