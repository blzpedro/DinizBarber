import React , {useEffect, useState} from 'react';
import { View, Text, Button, Thumbnail, Content, Form, Item, Input, Label, DatePicker } from 'native-base';
import { Alert, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {api} from '../../utils/api'
import LinearGradient from 'react-native-linear-gradient';
import { COLOR, Styles } from '../../config/styles';
import { SafeAreaView, ScrollView } from 'react-native';
import { Hr } from '../../components';
import {Style} from './styles'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Types } from '../../store/ducks/authenticate';
import moment from 'moment';

const gradientProps = {
  start: { x: 1, y: 0 },
  end: { x: 1, y: 1 },
  colors: [COLOR.DANGER, 'rgb(255, 185, 185)']
};

const logoProps = {
  style: Style.logoLogin,
  source: require('../../assets/logo.png'),
  square: true,
};


const style = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    alignItems: 'center',
  },
 });

export function CadastroScreen() {
  const navigation = useNavigation();
  
  const [nomeCadastro, setNomeCadastro] = useState('')
  const [emailCadastro, setEmailCadastro] = useState('')
  const [senhaCadastro, setSenhaCadastro] = useState('')
  const [cpfCadastro, setCPFCadastro] = useState('')
  const [dataNascCadastro, setDataNascCadastro] = useState('')
  const dispatch = useDispatch();

  useEffect(() => {
  }, [])

  function cadastrar() {  
    let url = '/Auth/CadastrarLogin'
    const body = {
      admin: false,
      ativo: true,
      login: 'login',
      emailUsuario: emailCadastro,
      senhaUsuario: senhaCadastro,
      nomeUsuario: nomeCadastro,
      cpf: cpfCadastro,
      dataNascimento: dataNascCadastro,
      dataInclusao: moment().format(),
    }
    api('').post(url, body)
    .then(({data}) => {
      console.log(data)
      navigation.navigate('Login')
    })
    .catch(err => console.log(err.response));
  }

  return (
    <LinearGradient {...gradientProps}>
      <ScrollView>
        <SafeAreaView style={style.container}>
          <View style={Style.boxLogin}>
              <Thumbnail {...logoProps} />    
              <Hr/>
              <Text style={Style.title}>CADASTRO</Text>
              <Item style={{marginTop: 10, borderColor: 'transparent'}} stackedLabel regular last>
                <Label style={Style.label}>Nome completo</Label>
                <Input style={Style.input} onChangeText={value => setNomeCadastro(value)}/>
              </Item>
              <Item style={{marginTop: 10, borderColor: 'transparent'}} stackedLabel regular last>
                <Label style={Style.label}>Email</Label>
                <Input style={Style.input} onChangeText={value => setEmailCadastro(value)}/>
              </Item>
              <Item style={{marginTop: 10, borderColor: 'transparent'}} stackedLabel regular last>
                <Label style={Style.label}>Senha</Label>
                <Input secureTextEntry={true} style={Style.input} onChangeText={value => setSenhaCadastro(value)}/>
              </Item>
              <Item style={{marginTop: 10, borderColor: 'transparent'}} stackedLabel regular last>
                <Label style={Style.label}>CPF</Label>
                <Input style={Style.input} onChangeText={value => setCPFCadastro(value)}/>
              </Item>
              <Item style={{marginTop: 10, borderColor: 'transparent'}} stackedLabel regular last>
                <Label style={Style.label}>Data de Nascimento</Label>
                <Content searchBar style={Style.searchBar}>
                  <Item>
                    <DatePicker
                        placeHolderText="DD/MM/AAAA"
                        locale={"br"}
                        modalTransparent={true}
                        animationType={"fade"}
                        androidMode={"default"}
                        onDateChange={value => setDataNascCadastro(value)}
                        disabled={false}                    
                    />
                  </Item>                
                </Content>
              </Item>
              <Button style={Style.btnCadastro} onPress={() => cadastrar()}><Text style={{textAlign: "center"}}>Confirmar</Text></Button>
          </View>
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  )
}