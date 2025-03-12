import React, { useMemo, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";
import RadioGroup from 'react-native-radio-buttons-group';


const Question = props => {
    return(
        <View>
            <Text>{props.name}</Text>
        </View>
    )
}

export default QuestionSrceen = ({ navigation }) => {

    const radioButtons = useMemo(() => ([
        {
            id: '1',
            label: 'Paris',
            value: 'Paris'
        },
        {
            id: '2',
            label: 'Lyon',
            value: 'Lyon'
        },
        {
            id: '3',
            label: 'Marseille',
            value: 'Marseille'
        },
        {
            id: '4',
            label: 'Bordeaux',
            value: 'Bordeaux'
        },
    ]), []);

    const [selectedId, setSelectedId] = useState();

    return (
        <View style={styles.container}>
            <View style={styles.topScreen}>
                <Text style={styles.title}>Quizz</Text>
                <View style={styles.scoreRow}>
                    <Text>Question: <Question name={1} /></Text>
                    <Text>Score: /8</Text>
                </View>
            </View>
            <View style={styles.radioContainer}>
                <Text style={styles.question}>Quelle est la capitale de la France?</Text>
                <RadioGroup 
                    containerStyle={styles.radioGrp}
                    radioButtons={radioButtons}
                    onPress={setSelectedId}
                    selectedId={selectedId}
                />

            </View>
            <TouchableOpacity style={styles.btn}
                onPress={() => navigation.navigate('Score')}
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

    scoreRow: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    question:{
        fontSize: 16,
        fontWeight: 'bold',
    },

    radioContainer:{
        width: "100%",
        alignItems: "center",
    },

    radioGrp:{
        width: "100%", 
        alignItems: "stretch",
        marginStart: 180
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