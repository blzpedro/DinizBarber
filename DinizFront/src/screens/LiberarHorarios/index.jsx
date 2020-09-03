import React , {useEffect, useState} from 'react';
import { View, Text, Card, Icon, Picker, Item, Label, Input, Button } from 'native-base';
import { Alert, StyleSheet, Dimensions } from 'react-native';
import {api} from '../../utils/api'
import { useSelector } from 'react-redux';
import { Hr, Loader } from '../../components';
import { Styles } from './styles';
import { COLOR } from '../../config/styles';
import { scale, verticalScale } from 'react-native-size-matters';
import { Horarios } from './components/Horarios';
import moment from 'moment';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInputMask } from 'react-native-masked-text'

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  containerScroll: {
    alignItems: 'center',
    marginBottom: 40,
    marginHorizontal: 20,
  },
 });

export function LiberarHorariosScreen() {
  
  let authenticate = useSelector(({ authenticate }) => authenticate);
  
  useEffect(() => {
    // getHorarios()
  }, [])
  
  const [dataId, setDataId] = useState('')
  const [horarioInicial, setHorarioInicial] = useState('')
  const [horarioFinal, setHorarioFinal] = useState('')
  const [open, setOpen] = useState(false)
  const [horarioAdmin, setHorarioAdmin] = useState([])


  let refHorarioInicial;
  let refHorarioFinal;
  function liberarHorario() {  
    if(refHorarioInicial.isValid() && refHorarioFinal.isValid()){
      setOpen(true);
      let url = '/DiaHorarioAceite'
      let body = {
        diaId: parseInt(dataId),
        horarioInicio: horarioInicial,
        horarioFim: horarioFinal,
        tipoStatusHorarioId: 3
      }
      console.log(body)
      api(authenticate.token).post(url, body)
      .then(({ data }) => {
        console.log(data)
        Alert.alert('Horário adicionado com sucesso.')
      })
      .catch(err => console.log(err.response))
      .finally(() => {
        setOpen(false);
      });      
    } else {
      Alert.alert('Horário inválido.')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerScroll}>
        <Text style={Styles.title}>LIBERAR HORÁRIOS</Text>
        <Hr/> 
        <Item picker>
            <Picker 
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: 100, marginHorizontal: 20 }}
                selectedValue={dataId}
                onValueChange={value => setDataId(value)}
            >
              <Picker.Item label="Selecione uma data" value={null}/>
              <Picker.Item label="11/09/2020" value={1}/>
              <Picker.Item label="12/09/2020" value={2}/>
              <Picker.Item label="13/09/2020" value={3}/>
              <Picker.Item label="10/09/2020" value={4}/>
              <Picker.Item label="14/09/2020" value={5}/>
          </Picker>
        </Item>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: Dimensions.get('window').width}}>
          <Item style={{borderColor: 'transparent', width: scale(100), marginTop: 20}} stackedLabel regular last>
            <Label style={Styles.label}>Horário Inicial</Label>
            <TextInputMask
                type={'datetime'}
                options={{
                  format: 'HH:mm'
                }}
                style={Styles.input}
                value={horarioInicial}
                onChangeText={value => setHorarioInicial(value)}
                ref={(ref) => refHorarioInicial = ref}
            />
          </Item>
          <Item style={{borderColor: 'transparent', width: scale(100), marginTop: 20}} stackedLabel regular last>
            <Label style={Styles.label}>Horário Final</Label>
            <TextInputMask
                type={'datetime'}
                options={{
                  format: 'HH:mm'
                }}
                style={Styles.input}
                value={horarioFinal}
                onChangeText={value => setHorarioFinal(value)}
                ref={(ref) => refHorarioFinal = ref}
            />
          </Item>
        </View>
        <Button style={Styles.btnEntrar} onPress={() => liberarHorario()}><Text style={{textAlign: "center"}}>Salvar</Text></Button>
      </View>
      <Loader
        open={open}
      />
    </SafeAreaView>
  )
}
