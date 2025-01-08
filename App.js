
import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text,SafeAreaView, View} from 'react-native' 

export default function App() {
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.headtext} >To Do List</Text>
      <StatusBar style="auto"/>
      <View></View>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  headtext: {
    top: 20,
    fontSize: 35,
    backgroundColor: 'white',
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 30,
  }
})