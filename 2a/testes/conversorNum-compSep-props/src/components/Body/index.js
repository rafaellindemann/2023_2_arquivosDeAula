import { StyleSheet, View } from 'react-native';
import { Conversor } from '../Conversores';
export default function Body(){
  return (
    <View style={styles.body}>
      <Conversor nome={'Bin'} placeholder={'Base2'}/>
      <Conversor nome={'Oct'} placeholder={'Base8'}/>
      <Conversor nome={'Dec'} placeholder={'Base10'}/>
      <Conversor nome={'Hex'} placeholder={'Base16'}/>
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