import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import ActivityScreen from './src/screens/ActivityScreen';
import SummaryScreen from './src/screens/SummaryScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {

  useEffect(() => {
    async function checkAndClearStorage() {
      try {
        const activitiesString = await AsyncStorage.getItem('activities');
        const activities = activitiesString ? JSON.parse(activitiesString) : null;
        if (activities && !Array.isArray(activities)) {
          // Dataen er ikke en array, så vi sletter den feilaktige dataen
          await AsyncStorage.removeItem('activities');
        }
      } catch (error) {
        console.error('Error checking or clearing the activities storage:', error);
      }
    }

    // Kall denne funksjonen ved oppstart av appen
    checkAndClearStorage();
  }, []);
  return (
    
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Hjem" component={HomeScreen} />
          <Tab.Screen name="Logg Aktivitet" component={ActivityScreen} />
          <Tab.Screen name="Oversikt" component={SummaryScreen} />
          <Tab.Screen name="Profil" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
 
  );
}

export default App;