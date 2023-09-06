import { StyleSheet, View } from 'react-native';
import { Bin, Oct, Dec, Hex } from '../Conversores';
export default function Body(){
  return (
    <View style={styles.body}>
      <Bin />
      <Oct />
      <Dec />
      <Hex />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: '100%',
    paddingTop: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 5,
  },
})