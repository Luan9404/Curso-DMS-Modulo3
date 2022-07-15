import { useContext, useState } from "react";
import { Text, TextInput, View, StyleSheet, Button} from "react-native";
import { BooksContext } from "../hooks/BooksContext";

export default function CreateBook({navigation}){
  const [title, setTitle] = useState()
  const [author, setAuthor] = useState()
  const [url, setUrl] = useState()
  const {state, dispatch} = useContext(BooksContext)

  const insertBook = () => {
    let obj = {
      title,
      author,
      url,
    }
    dispatch({type: 'INSERT_BOOK', payload:obj})
    navigation.navigate('BookList')
  }
  return (
    <View style={{width: '100%', padding:10}}>
      <Text style={styles.title}>Adicionar livro</Text>
      <Text style={styles.title2}>Nome:</Text>
      <TextInput style={styles.input} onChangeText={setTitle}/>
      <Text style={styles.title2}>Autor:</Text>
      <TextInput style={styles.input} onChangeText={setAuthor}/>
      <Text style={styles.title2}>URL:</Text>
      <TextInput style={styles.input} onChangeText={setUrl}/>
      <Button 
        title="Adicionar" 
        onPress={insertBook}>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: '90%',
    marginBottom: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 10
  },
  title2: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10
  },
})