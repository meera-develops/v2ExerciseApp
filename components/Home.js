import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Button } from 'react-native-elements';

const exercises= [
    {
        id: '1',
        title: 'Push-ups',
        type: 'repetition'   
    },
    {
        id: '2',
        title: 'Running',
        type: 'duration'
    },
];

// const Item = ({title}) => (
//     <View style={styles.item}>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   );

export default function Home({ navigation }) {
    let renderItem = ({ item }) => (
        <Button
            size="lg"
            color="warning"
            title={item.title} 
            onPress={() => {
                const targetScreen = item.type === 'repetition' ? 'Repetition' : 'Duration';
                navigation.push(targetScreen, { type: item.type });
            }}
            buttonStyle={styles.button}
            // titleStyle={styles.buttonTitle}
            containerStyle={styles.buttonContainer}
        />
      );

    return (
        <View style={styles.container}>
          <Text style={styles.header}>Exercise Hero</Text>
          <FlatList
            data={exercises}
            //renderItem={({item}) => <Item title={item.title} />}
            renderItem={renderItem}
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
        marginBottom: 20,
    },
    buttonContainer: {
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#000',
        borderRadius: 10,
        padding: 12,
    }
  });