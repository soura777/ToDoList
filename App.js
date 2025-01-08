import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, TextInput, FlatList, Button } from 'react-native';

export default function App() {
  const [data, setData] = useState([
    { id: '1', title: 'Item 1' },
    
  ]);

  const addItem = () => {
    const newItem = {
      id: (data.length + 1).toString(),
      title: `Item ${data.length + 1}`,
    };
    setData((prevData) => [...prevData, newItem]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headtext}>To Do List</Text>
      <TextInput style={styles.searchbar} placeholder="🔍 Search" />
      <Text style={styles.subheadtext}>Checklist</Text>
      <FlatList
        style={styles.flatlist1}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <Button title="Add Item" onPress={addItem} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  headtext: {
    marginTop: 20,
    fontSize: 30,
    backgroundColor: 'yellow',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
    textAlign: 'center',
  },
  subheadtext: {
    color: 'white',
    marginTop: 20,
    fontSize: 20,
    backgroundColor: 'black',
    padding: 10,
    alignSelf: 'stretch',
    textAlign: 'center',
    marginHorizontal: 30,
    borderBottomLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  searchbar: {
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignSelf: 'stretch',
    marginHorizontal: 30,
  },
  flatlist1: {
    marginTop: 20,
    width: '100%',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderWidth: 1,
    borderColor: 'black',
    height: 60,
    marginVertical: 5,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 20,
  },
  itemText: {
    fontSize: 18,
    textAlign: 'center',
    flex: 1,
  },
});
