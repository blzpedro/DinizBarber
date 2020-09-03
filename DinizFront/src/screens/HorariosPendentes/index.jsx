import React , {useEffect, useState} from 'react';
import { View, Text, Card, Icon } from 'native-base';
import { Alert, StyleSheet, Dimensions } from 'react-native';
import {api} from '../../utils/api'
import { useSelector } from 'react-redux';
import { Hr } from '../../components';
import { Styles } from './styles';
import { COLOR } from '../../config/styles';
import { scale, verticalScale } from 'react-native-size-matters';
import { Horarios } from './components/Horarios'
import moment from 'moment';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  containerScroll: {
    alignItems: 'center',
    marginBottom: 40
  },
 });

export function HorariosPendentesScreen() {
  
  let authenticate = useSelector(({ authenticate }) => authenticate);
  const isFocused = useIsFocused();
  
  useEffect(() => {
    if(isFocused){
      getHorariosPendentes()
    }
  }, [isFocused])
  
  const [home, setHome] = useState()
  const [horarioAdminState, setHorarioAdminState] = useState([])


  function reservarHorario(aceiteId, loginId) {
    let url = `DiaHorarioAceite/AlterarDiaHorarioAceite?idDiaHorario=${aceiteId}&idLogin=${loginId}&tipoStatusHorario=2`

    console.log(url)
    api(authenticate.token).post(url)
    .then(({ data }) => {
        console.log(data)
        Alert.alert('Horário reservado com sucesso!')
        getHorariosPendentes()
    })
    .catch(err => console.log(err.response));
  }

  function cancelarHorario(aceiteId, loginId) {
      let url = `DiaHorarioAceite/AlterarDiaHorarioAceite?idDiaHorario=${aceiteId}&idLogin=${loginId}&tipoStatusHorario=3`

      console.log(url)
      api(authenticate.token).post(url)
      .then(({ data }) => {
          console.log(data)
          Alert.alert('Horário cancelado com sucesso!')
          getHorariosPendentes()
      })
      .catch(err => console.log(err.response));        
  }

  function getHorariosPendentes() {  
    console.log('teste')
    if(authenticate.admin){
      console.log('é admin')
      let url = '/DiaHorarioAceite?idTipoStatusHorario=1'
    
      api(authenticate.token).get(url)
      .then(({ data }) => {
        getHome(data)
      })
      .catch(err => console.log(err.response));
    } else {
      console.log('nao é admin')
      let url = '/Login'
    
      api(authenticate.token).get(url)
      .then(({ data }) => {
        console.log(data)
      })
      .catch(err => console.log(err.response));
    } 
  }

  let horarioAdmin;
  function getHome(horarioAdmin){
    setHorarioAdminState(horarioAdmin)
    let hasHorario = undefined
    if(horarioAdmin && horarioAdmin.length == 0){
      hasHorario = <Text style={{textAlign: "center"}}>Não há horários pendentes.</Text>
    }

    if(authenticate.admin){
      setHome(    
      <View>
        <Text style={Styles.title}>HORÁRIOS PENDENTES</Text>
        <Hr/>          
        {horarioAdmin && horarioAdmin.map(horario => (
          <Horarios
              dia={horario.dia}
              diaHorarioAceiteId={horario.diaHorarioAceiteId}
              dataInicio={horario.horarioInicio}
              dataFim={horario.horarioFim}
              usuario={horario.login}
              reservarHorario={reservarHorario}
              cancelarHorario={cancelarHorario}
          />
          ))}
        {hasHorario}
      </View>
      )
    } else {
      setHome(    
      <View>
        <Text style={Styles.title}>HORÁRIOS PENDENTESs</Text>
        <Hr/>
      </View>
      )
    }
  }

  return (
      <ScrollView>
          <View style={styles.containerScroll}>
            {home}
          </View>
      </ScrollView> 
  )
}
