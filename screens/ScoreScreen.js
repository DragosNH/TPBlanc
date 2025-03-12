import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import ScoreDatabase from "../components/db"

export default ScoreScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quizz</Text>
            <Text>Score: </Text>
            <TouchableOpacity style={styles.btn}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.txtBtn}>
                    Rejouer
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    title: {
        fontSize: 24,
        color: 'white',
        backgroundColor: 'darkblue',
        width: '100%',
        textAlign: 'center',
        marginTop: 50,
    },

    txtBtn: {
        color: 'white',
    },

    btn: {
        backgroundColor: 'darkblue',
        width: 130,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 100,

    }

})