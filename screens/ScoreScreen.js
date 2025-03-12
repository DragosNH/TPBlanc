import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import ScoreDatabase from "../components/db";

const ScoreScreen = ({ navigation, route }) => {
  const { userName, score, totalQuestions } = route.params;

  const [isSaving, setIsSaving] = useState(true);
  const [saveStatus, setSaveStatus] = useState(null);

  useEffect(() => {
    const saveScore = async () => {
      try {
        const db = new ScoreDatabase();
        const scoreData = {
          userName: String(userName),
          score: Number(score),
          date: new Date().toISOString(),
        };

        await db.addScore(scoreData);
        setSaveStatus("success");
      } catch (error) {
        console.error("Erreur lors de l'enregistrement du score:", error);
        setSaveStatus("error");
      } finally {
        setIsSaving(false);
      }
    };

    saveScore();
  }, []);

  const goToLeaderboard = () => {
    navigation.navigate("Leaderboard");
  };

  const goHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Résultat final</Text>
      <Text style={styles.text}>Joueur: {userName}</Text>
      <Text style={styles.text}>
        Score: {score}/{totalQuestions}
      </Text>

      {isSaving ? (
        <View style={styles.statusContainer}>
          <ActivityIndicator size="small" color="#0000ff" />
          <Text>Enregistrement du score...</Text>
        </View>
      ) : saveStatus === "success" ? (
        <Text style={styles.successText}>Score enregistré avec succès!</Text>
      ) : saveStatus === "error" ? (
        <Text style={styles.errorText}>Erreur lors de l'enregistrement du score</Text>
      ) : null}

      <TouchableOpacity style={styles.btn} onPress={goToLeaderboard}>
        <Text style={styles.txtBtn}>Voir le classement</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={goHome}>
        <Text style={styles.txtBtn}>Rejouer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    color: "white",
    backgroundColor: "darkblue",
    width: "100%",
    textAlign: "center",
    marginTop: 50,
    padding: 10,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
  statusContainer: {
    alignItems: "center",
  },
  successText: {
    color: "green",
    fontSize: 16,
    marginVertical: 10,
  },
  errorText: {
    color: "red",
    fontSize: 16,
    marginVertical: 10,
  },
  txtBtn: {
    color: "white",
    fontSize: 16,
  },
  btn: {
    backgroundColor: "darkblue",
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 10,
  },
});

export default ScoreScreen;
