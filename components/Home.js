import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const exercises= [
    {
        id: '1',
        title: 'Push-ups'   
    },
    {
        id: '2',
        title: 'Running'
    },
];

const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

export default function Home() {

    return (
        <View style={styles.container}>
          <Text style={styles.header}>Exercise Hero</Text>
          <FlatList
            data={exercises}
            renderItem={({item}) => <Item title={item.title} />}
            keyExtractor={item => item.id}
          />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#BC9BEC',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
        marginTop: 10,
        color: '#fff',
        fontSize: 50,
        fontFamily: 'Helvetica',
    },
    item: {
        backgroundColor: '#000',
        padding: 15,
        marginVertical: 20,
        marginHorizontal: 16,
        borderRadius: 10
      },
    title: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center'
    },
  });