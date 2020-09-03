import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LoginScreen } from '../screens/Login';
import { CadastroScreen } from '../screens/Cadastro';
import { LiberarHorariosScreen } from '../screens/LiberarHorarios';
import { HorariosAgendadosScreen } from '../screens/HorariosAgendados';
import { HorariosPendentesScreen } from '../screens/HorariosPendentes';
import { AgendamentoScreen } from '../screens/Climatempo';
import { AlertaScreen } from '../screens/Alertas';
import { PassagensScreen } from '../screens/Passagens';
import { TrafegoScreen } from '../screens/Trafego';
import { Header, Drawer } from '../components';

export default function Routes() {
    const LoginStack = createStackNavigator();
    const CadastroStack = createStackNavigator();
    const LiberarHorariosStack = createStackNavigator();
    const HorariosAgendadosStack = createStackNavigator();
    const HorariosPendentesStack = createStackNavigator();
    // const AgendamentoStack = createStackNavigator();
    // const AlertaStack = createStackNavigator();
    // const PassagensStack = createStackNavigator();
    const DrawerStack = createDrawerNavigator();
    
    const screenOptions = {
        header: props => <Header {...props} />,
    }

    const drawerContent = (
        props => <Drawer {...props} />
    )
    
    const LoginStackScreen = () => (
        <LoginStack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <LoginStack.Screen name="Login" component={LoginScreen} />
        </LoginStack.Navigator>
    )
    
    const CadastroStackScreen = () => (
        <CadastroStack.Navigator initialRouteName="Cadastro" screenOptions={{headerShown: false}}>
            <CadastroStack.Screen name="Cadastro" component={CadastroScreen} />
        </CadastroStack.Navigator>
    )
    
    const LiberarHorariosAtackScreen = () => (
        <LiberarHorariosStack.Navigator initialRouteName="LiberarHorarios" screenOptions={screenOptions}>
            <LiberarHorariosStack.Screen name="LiberarHorarios" component={LiberarHorariosScreen} />
        </LiberarHorariosStack.Navigator>
    )

    const HorariosAgendadosStackScreen = () => (
        <HorariosAgendadosStack.Navigator initialRouteName="HorariosAgendados" screenOptions={screenOptions}>
            <HorariosAgendadosStack.Screen name="HorariosAgendados" component={HorariosAgendadosScreen} />
        </HorariosAgendadosStack.Navigator>
    )

    const HorariosPendentesStackScreen = () => (
        <HorariosPendentesStack.Navigator initialRouteName="HorariosPendentes" screenOptions={screenOptions}>
            <HorariosPendentesStack.Screen name="HorariosPendentes" component={HorariosPendentesScreen} />
        </HorariosPendentesStack.Navigator>
    )

    // const AgendamentoStackScreen = () => (
    //     <AgendamentoStack.Navigator initialRouteName="Agendamento" screenOptions={screenOptions}>
    //         <AgendamentoStack.Screen name="Agendamento" component={AgendamentoScreen} />
    //     </AgendamentoStack.Navigator>
    // )

    // const AlertaStackScreen = () => (
    //     <AlertaStack.Navigator initialRouteName="Alerta" screenOptions={screenOptions}>
    //         <AlertaStack.Screen name="Alerta" component={AlertaScreen} />
    //     </AlertaStack.Navigator>
    // )

    // const PassagensStackScreen = () => (
    //     <PassagensStack.Navigator initialRouteName="Passagens" screenOptions={screenOptions}>
    //         <PassagensStack.Screen name="Passagens" component={PassagensScreen} />
    //     </PassagensStack.Navigator>
    // )

    // const TrafegoStackScreen = () => (
    //     <TrafegosStack.Navigator initialRouteName="Trafego" screenOptions={screenOptions}>
    //         <TrafegosStack.Screen name="Trafego" component={TrafegoScreen} />
    //     </TrafegosStack.Navigator>
    // )    
    
    const DrawerStackScreen = () => (
        <DrawerStack.Navigator initialRouteName="Login" drawerContent={drawerContent}>
            <DrawerStack.Screen name="Login" component={LoginStackScreen} />
            <DrawerStack.Screen name="Cadastro" component={CadastroStackScreen} />
            <DrawerStack.Screen name="LiberarHorarios" component={LiberarHorariosAtackScreen} />
            <DrawerStack.Screen name="HorariosAgendados" component={HorariosAgendadosStackScreen} />
            <DrawerStack.Screen name="HorariosPendentes" component={HorariosPendentesStackScreen} />
            {/* <DrawerStack.Screen name="Agendamento" component={AgendamentoStackScreen} /> */}
            {/* <DrawerStack.Screen name="Alertas" component={AlertaStackScreen} />
            <DrawerStack.Screen name="Passagens" component={PassagensStackScreen} />
            <DrawerStack.Screen name="Trafego" component={TrafegoStackScreen} /> */}
        </DrawerStack.Navigator>
    )

    return (
        <DrawerStackScreen />
    )
}