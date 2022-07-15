import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native'

export default function InputZone({ onChangeText, onPress }) {
  return (
    <View style={styles.inputZone}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Image
          source={require('../assets/searchIcon.png')}
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputZone: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: '85%'
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: '#B0C4DE',
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#B0C4DE',
    borderRadius: 20,
    color: '#FFF'
  },
  buttonIcon: {
    width: 35,
    height: 35
  },
})
