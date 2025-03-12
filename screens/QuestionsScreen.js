import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";

export default QuestionSrceen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topScreen}>
                <Text style={styles.title}>Quizz</Text>
                <View style={styles.scoreRow}>
                    <Text>Question </Text>
                    <Text>Score</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.btn}
                onPress={() => navigation.navigate('Question')}
            >
                <Text style={styles.txtBtn}>
                    Valider
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

    topScreen: {
        width: '100%',
    },

    title: {
        fontSize: 24,
        color: 'white',
        backgroundColor: 'darkblue',
        width: '100%',
        textAlign: 'center',
        marginTop: 50,
    },

    scoreRow:{
        flexDirection: 'row',
        justifyContent: 'space-around'
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
        marginBottom: 150,

    }
})