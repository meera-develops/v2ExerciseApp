import { Text, View, StyleSheet } from 'react-native';

export default function Home() {
    return (
        <View style={styles.container}>
          <Text style={styles.header}>Exercise Hero</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#BC9BEC',
      alignItems: 'center',
    },
    header: {
        color: '#fff',
        fontSize: 40,
    }
  });