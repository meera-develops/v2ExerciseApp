import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Duration({ route, navigation }) {

    const { exercise, exercises } = route.params;

    const [isStarted, setStarted] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intIdRef = useRef(null);
    const startTimeRef = useRef(0);

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

    useEffect(() => {

        if(isStarted) {
            intIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intIdRef.current);
        } 
        // clears the current interval so program stops running

    }, [isStarted]);

    function start() {
        setStarted(true);
        startTimeRef.current = Date.now() - elapsedTime;
        // subtracts current time from Epic, when the computer thinks time started
        // console.log(startTimeRef.current);
    }

    function stop() {
        setStarted(false); //change property to false to stop the timer from running 
    }

    function reset() {
        setElapsedTime(0);
        setStarted(false);
    }

    function formatTime() {
        //let hours = Math.floor(elapsedTime / (1000 * 60 * 60)); 
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60); 
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10)

        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");


        return `${minutes}:${seconds}:${milliseconds}`;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Exercise Hero
            </Text>
            <Text style={styles.name}>
                {exercise.title}
            </Text>
            <Text style={styles.timer}>
                {formatTime(elapsedTime)}
            </Text>
            <View style={styles.buttonContainer}>
                <Button title={"Start Timer"} onPress={start} buttonStyle={styles.button} />
                <Button title={"Stop Timer"} onPress={stop} buttonStyle={styles.button} />
                <Button title={"Reset Timer"} onPress={reset} buttonStyle={styles.button} />
                <Button title={`Suggested: ${suggestedExercise.title}`} onPress={suggestExercise}buttonStyle={styles.button} />
                <Button 
                title="Go Home" 
                onPress={() => navigation.navigate('Home')} buttonStyle={styles.button}
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
    name: {
        fontSize: 30,
        color: '#03045e',
        marginBottom: 10,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    button: {
        backgroundColor: '#000',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    timer: {
        fontSize: 25,
        color: '#fff',
        marginBottom: 10,
        backgroundColor: '#000',
        padding: 15,
        borderColor: '#EF959D',
        borderWidth: 5,
        borderRadius: 20,
        marginBottom: 10,

    },
})