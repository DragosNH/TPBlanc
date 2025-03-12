import React, { useCallback, useEffect, useState } from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { connectToDatabase, createTables } from "../components/db";

const localData = useCallback(async() => {
    try{
        const db = await connectToDatabase();
        createTables(db);
    } catch (e) {
        console.error(e);
    }
}, []);

useEffect(() => {
    loadData()
}, [loadData])

export default HomeScreen = ({ navigation }) => {
    const [name, onChangeName] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quizz</Text>
            <View style={styles.row}>
                <Text style={styles.txt}>Prénom:</Text>
                <TextInput
                    placeholder="Inserez votre prénom"
                    onChangeText={onChangeName}
                    value={name}
                    style={styles.input}
                />
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

    title:{
        fontSize: 24,
        color: 'white',
        backgroundColor: 'darkblue',
        width: '100%',
        textAlign: 'center',
        marginTop: 50,
    },

    row: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center'
    },

    txt: {
        color: 'darkblue',
        fontWeight: 'bold',
    },

    input: {
        borderBottomWidth: 2,
        borderColor: 'darkblue',
        marginTop: 5,
        marginStart: 5,
        width: 150,
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
});
