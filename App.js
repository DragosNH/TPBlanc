import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import QuestionsScreen from './screens/QuestionsScreen';
import ScoreScreen from './screens/ScoreScreen';
import { useEffect, useState } from 'react';
import { ScoreDatabase } from './components/db';

const Stack = createNativeStackNavigator();

export default function App() {
      const [db] = useState(new ScoreDatabase());
  
      useEffect(() => {
          db.DBInit();
      }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Question"
          component={QuestionsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Score"
          component={ScoreScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}