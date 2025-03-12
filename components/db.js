import * as SQLite from 'expo-sqlite';


export class ScoreDatabase {
    DB_NAME = 'quiz.db';
  
    DBInit = async () => {
      const db = await SQLite.openDatabaseAsync(this.DB_NAME);
      await db.execAsync(`
        CREATE TABLE IF NOT EXISTS scores (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          userName TEXT NOT NULL,
          score INTEGER NOT NULL,
        );`);
    }
  
    addScore = async (score) => {
    try {
      const db = await SQLite.openDatabaseAsync(this.DB_NAME);
      await db.runAsync(
        'INSERT INTO scores (userName, score) VALUES (?, ?);',
        [score.userName, score.score]
      );
      return true; 
    } catch (error) {
      console.error("Erreur lors de l'ajout du score:", error);
      return false; 
    }
  };
  
    getScores = async () => {
    try {
      const db = await SQLite.openDatabaseAsync(this.DB_NAME);
      return await db.getAllAsync('SELECT * FROM scores ORDER BY score DESC;');
    } catch (error) {
      console.error("Erreur lors de la récupération des scores:", error);
      return []; 
    }
  };
  }