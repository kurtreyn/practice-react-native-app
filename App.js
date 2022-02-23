import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Shaun', id: '1' },
    { name: 'Yoshi', id: '2' },
    { name: 'Mario', id: '3' },
    { name: 'Luigi', id: '4' },
    { name: 'Peach', id: '5' },
    { name: 'Toad', id: '6' },
    { name: 'Bowser', id: '7' },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />

      {/* <ScrollView>
        {people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});
