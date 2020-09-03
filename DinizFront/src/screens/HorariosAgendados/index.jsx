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
import { useIsFocused } from '@react-navigation/native';

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

export function HorariosAgendadosScreen() {
  
  let authenticate = useSelector(({ authenticate }) => authenticate);
  const isFocused = useIsFocused();
  
  useEffect(() => {
    if(isFocused){      
      getHorariosAgendados()
    }
  }, [isFocused])
  
  const [home, setHome] = useState()
  const [horarioAdminState, setHorarioAdminState] = useState([])

  function getHorariosAgendados() {  
    if(authenticate.admin){
      let url = '/DiaHorarioAceite?idTipoStatusHorario=2'
    
      api(authenticate.token).get(url)
      .then(({ data }) => {
        getHome(data)
      })
      .catch(err => console.log(err.response));
    } else {
      let url = '/Login'
    
      api(authenticate.token).get(url)
      .then(({ data }) => {
        console.log(data)
      })
      .catch(err => console.log(err.response));
    }
  }

  function getHome(horarioAdmin){
    setHorarioAdminState(horarioAdmin)
    let hasHorario = undefined
    console.log(horarioAdmin)
    if(horarioAdmin && horarioAdmin.length == 0){
      hasHorario = <Text style={{textAlign: "center"}}>Não há horários reservados {"\n"} para o dia de hoje.</Text>
    }

    if(authenticate.admin){
      setHome(    
      <View>
        <Text style={Styles.title}>HORÁRIOS RESERVADOS</Text>
        <Hr/>          
        {horarioAdmin && horarioAdmin.map(horario => (
          <Horarios
            dia={horario.dia}
            dataInicio={horario.horarioInicio}
            dataFim={horario.horarioFim}
            usuario={horario.login}
          />
          ))}
        {hasHorario}
      </View>
      )
    } else {
      setHome(    
      <View>
        <Text style={Styles.title}>HORÁRIOS RESERVADOSs</Text>
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
