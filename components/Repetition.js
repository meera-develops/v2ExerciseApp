import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Repetition({ route, navigation }) {

    const { exercise, exercises } = route.params;
    const [ count, setCount ] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        if (count > 0) {
          setCount(count - 1);
        }
      };
    
    const resetCount = () => {
        setCount(0);
    };

    const suggestedExercise = exercises.find(ex => ex.id === exercise.suggestedId);

    const suggestExercise = () => {
        if (suggestedExercise) {
            // navigation.navigate(suggestedExercise.type, { exercise: suggestedExercise, exercises });
            const screenName = suggestedExercise.type === 'repetition' ? 'Repetition' : 'Duration';
            console.log('Navigating to screen:', screenName);
            navigation.navigate(screenName, { exercise: suggestedExercise, exercises });
        } else {
            Alert.alert('Error', 'Suggested exercise not found!');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Exercise Hero
            </Text>
            <Text style={styles.name}>
                {exercise.title}
            </Text>
            <Text style={styles.count}>
                Count: {count}
            </Text>
            <View style={styles.buttonContainer}>
                <Button title="Increase Count" onPress={increaseCount}
                buttonStyle={styles.button} />
                <Button title="Decrease Count" onPress={decreaseCount}
                buttonStyle={styles.button}
                />
                <Button title="Reset Count" onPress={resetCount}
                buttonStyle={styles.button} />
                <Button title={`Suggested: ${suggestedExercise.title}`} 
                    onPress={suggestExercise} buttonStyle={styles.button} />
                <Button title="Go Home" onPress={() => navigation.navigate('Home')}
                buttonStyle={styles.button}
                icon={<Icon name="home" size={20} color='#fff'/>} 
                iconRight={false}
                iconContainerStyle={{ marginRight: 30 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BC9BEC',
        alignItems: 'center',
    },
    header: {
        marginTop: 10,
        color: '#fff',
        fontSize: 50,
        fontFamily: 'Helvetica',
        marginBottom: 10,
    },
    buttonContainer: {
        marginBottom: 20
    },
    button: {
        backgroundColor: '#000',
        borderRadius: 10,
        padding: 8,
        marginBottom: 20,
    },
    name: {
        fontSize: 30,
        color: '#03045e',
        marginBottom: 10,
        fontWeight: 'bold',
        textDecorationLine: 'underline'

    },
    count: {
        color: "#fff",
        fontSize: 20,
        marginBottom: 15,
        fontWeight: 'bold'
    }

})