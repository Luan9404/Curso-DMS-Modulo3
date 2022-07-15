import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useContext, useState } from 'react'
import InputZone from './InputZone'
import CardList from './CardList'
import { BooksContext } from '../hooks/BooksContext';
import CreateBook from './InsertBook';

export default function Layout({navigation}){
  const [query, setQuery] = useState('')
  const {state, dispatch} = useContext(BooksContext)
  const search = async () => {
    let url = `https://hn.algolia.com/api/v1/search?query=${query}`
    let result = await fetch(url).then(result => result.json())
    dispatch({type:'INSERT_BOOKS', payload: result.hits})
  }
  const textHandler = (text) => {
    setQuery(text)
  }
  return(
    <View style={styles.main}>
      <Text style={styles.title}>Módulo 2 - lista 2</Text>
      <InputZone onChangeText={textHandler} onPress={search} />
      <Button title='Adicionar livro' onPress={() => navigation.navigate('CreateBook')}/>
      <CardList books={state.books} />
    </View>
  )
}
const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 10
  },
  main: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    widh: '100%',
    paddingTop: 50,
    paddingHorizontal: 20
  },
})