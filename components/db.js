import { enablePromise, openDatabase } from "react-native-sqlite-storage"

enablePromise(true);

export const connectToDatabase = async () => {
    return openDatabase(
        { name: "score.db", location: "default" },
        () => {},
        (e) => {
            console.log(e)
            throw Error("Connection failed")
        }
    )
}

export const createTables = async => {
    const userInfo = `
        CREATE TABLE IF NOT EXISTS  UserPreference (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            score INT
        )
    `

    try {
        db.executeSql(userInfo)
    } catch (e) {
        console.error(e)
        throw Error(`Failed to create the table`)
    }
}