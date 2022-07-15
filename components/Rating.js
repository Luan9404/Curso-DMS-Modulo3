import {
  View,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native'
import { useState } from 'react'
import { Icon } from 'native-base'

export default function Rating() {

  const [rating, setRating] = useState(0)

  return (
    <View style={styles.rating}>
      {rating >= 1 ? (
        <TouchableWithoutFeedback onPress={() => setRating(1)}>
          <Icon type='FontAwesome' name='star' />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={() => setRating(1)}>
          <Icon type='FontAwesome' name='star-o' />
        </TouchableWithoutFeedback>
      )}

      {rating >= 2 ? (
        <TouchableWithoutFeedback onPress={() => setRating(2)}>
          <Icon type='FontAwesome' name='star' />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={() => setRating(2)}>
          <Icon type='FontAwesome' name='star-o' />
        </TouchableWithoutFeedback>
      )}

      {rating >= 3 ? (
        <TouchableWithoutFeedback onPress={() => setRating(3)}>
          <Icon type='FontAwesome' name='star' />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={() => setRating(3)}>
          <Icon type='FontAwesome' name='star-o' />
        </TouchableWithoutFeedback>
      )}

      {rating >= 4 ? (
        <TouchableWithoutFeedback onPress={() => setRating(4)}>
          <Icon type='FontAwesome' name='star' />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={() => setRating(4)}>
          <Icon type='FontAwesome' name='star-o' />
        </TouchableWithoutFeedback>
      )}

      {rating >= 5 ? (
        <TouchableWithoutFeedback onPress={() => setRating(5)}>
          <Icon type='FontAwesome' name='star' />
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={() => setRating(5)}>
          <Icon type='FontAwesome' name='star-o' />
        </TouchableWithoutFeedback>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  rating: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end'
  }
})
