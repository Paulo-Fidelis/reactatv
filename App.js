import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { ListItem } from 'react-native-elements';
import AntDesign from '@expo/vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-web';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const contatosLista = [
  {
    nome: 'Marcos Andrade',
    icone: 'user',
    text: 'Olá, como você está?',
    time: '2m'
  },
  {
    nome: 'Patrícia Tavares',
    icone: 'user',
    text: 'Vamos marcar um café?',
    time: '10m'
  },
  {
    nome: 'Rodrigo Antunes',
    icone: 'user',
    text: 'Oi, me ligue quando puder!',
    time: '20m'
  },
  {
    nome: 'Carlos Silva',
    icone: 'user',
    text: 'Tem novidades sobre o projeto?',
    time: '30m'
  },
  {
    nome: 'Lucas Costa',
    icone: 'user',
    text: 'Aquela tarefa já foi finalizada?',
    time: '1h'
  },
  {
    nome: 'Juliana Almeida',
    icone: 'user',
    text: 'Você vai na reunião amanhã?',
    time: '2h'
  },
  {
    nome: 'Fernanda Souza',
    icone: 'user',
    text: 'Preciso de ajuda com o relatório.',
    time: '3h'
  },
  {
    nome: 'Gustavo Lima',
    icone: 'user',
    text: 'Está disponível para uma reunião?',
    time: '5h'
  },
  {
    nome: 'Vanessa Martins',
    icone: 'user',
    text: 'Acabei de enviar o arquivo, verifica!',
    time: '6h'
  },
  {
    nome: 'Roberta Oliveira',
    icone: 'user',
    text: 'Vamos sair mais tarde?',
    time: '1d'
  }
];


export default function App() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <View style={styles.containerList}>
    {contatosLista.map((item, i) => (
        <ListItem key={i} bottomDivider>
          <AntDesign name={item.icone} size={24} />
          
          <ListItem.Content style={styles.content}>
            <View style={styles.row}>
              <ListItem.Title style={styles.nome}>{item.nome}</ListItem.Title>
            </View>
            <View style={styles.row}>
            <View style={styles.time}>
            <ListItem.Subtitle style={styles.text}>{item.text}</ListItem.Subtitle>
              <ListItem.Subtitle style={styles.time}>{item.time}</ListItem.Subtitle>
              </View>
            </View>
          </ListItem.Content>

          
        </ListItem>
      ))}
    </View>
      <StatusBar style="auto" />
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerList: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
  },
  content: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  time:{
    alignContent: 'flex-end'
  },
  nome: {
    fontWeight: 'bold',   
    fontSize: 16,
    color: '#000',
  },
  text: {
    color: 'gray',
  },
  time: {
    fontSize: 12,
    color: 'gray',
  },
});

  
