import React, { useState } from "react";
import { View, TouchableOpacity, Text, Alert, StyleSheet } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
import quizData from "../quiz.json";

const QuestionScreen = ({ route, navigation }) => {
    const { userName } = route.params;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedId, setSelectedId] = useState();
    const [score, setScore] = useState(0);

    const question = quizData[currentQuestion];
    const radioButtons = question.answers.map((answer) => ({
        id: answer.id.toString(),
        label: answer.label,
        value: answer.value,
    }));

    const handleValidation = () => {
        const isCorrect = selectedId === question.correctAnswer.toString();

        if (isCorrect) {
            setScore(score + 1);
            Alert.alert("Bonne réponse !");
        } else {
            Alert.alert("Mauvaise réponse!");
        }

        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedId(undefined);
        } else {
            const finalScore = isCorrect ? score + 1 : score;

            Alert.alert(
                "Quiz terminé !",
                `${userName}, votre score : ${finalScore}/${quizData.length}`,
                [
                    {
                        text: "Voir le score",
                        onPress: () => {
                            navigation.navigate("Score", {
                                userName,
                                score: finalScore,
                                totalQuestions: quizData.length,
                            });
                        },
                    },
                ]
            );
        }
    };

    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.title}>{question.question}</Text>
                <View style={styles.header}>
                    <View style={styles.questionCounter}>
                        <Text style={styles.headerText}>
                            Question {currentQuestion + 1}/{quizData.length}
                        </Text>
                    </View>
                    <View style={styles.scoreCounter}>
                        <Text style={styles.headerText}>
                            Score: {score} {score <= 1 ? "point" : "points"}
                        </Text>
                    </View>
                </View>

            </View>



            <View style={styles.radioContainer}>

                <RadioGroup
                    radioButtons={radioButtons}
                    onPress={setSelectedId}
                    selectedId={selectedId}
                    containerStyle={styles.radioGrp}
                />
            </View>

            {selectedId && (
                <Text style={styles.selectedText}>
                    Vous avez sélectionné :{" "}
                    {radioButtons.find((r) => r.id === selectedId)?.label}
                </Text>
            )}

            <TouchableOpacity style={styles.btn} onPress={handleValidation}>
                <Text style={styles.txtBtn}>Valider</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        padding: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: "bold",
    },
    questionCounter: {
        flex: 1,
    },
    scoreCounter: {
        flex: 1,
        alignItems: "flex-end",
    },
    title: {
        fontSize: 24,
        color: "white",
        backgroundColor: "darkblue",
        textAlign: "center",
        marginTop: 30,
        padding: 5,
        width: "100%",
    },
    radioContainer: {
        width: "100%",
        alignItems: "center",
    },
    selectedText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: "600",
    },
    radioGrp: {
        width: "90%",
        alignItems: "stretch",
    },
    txtBtn: {
        color: "white",
        fontSize: 16,
    },
    btn: {
        backgroundColor: "darkblue",
        width: 130,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginBottom: 20,
    },
});

export default QuestionScreen;
