import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import useStorageData from '../hooks/useStorageData';
import { ActivityType } from '../constants/ActivityType';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SummaryScreen: React.FC = () => {
  const isFocused = useIsFocused();
  const [activities, setActivities] = useState<ActivityType[]>([]);

  useEffect(() => {
    async function loadActivities() {
      const activitiesString = await AsyncStorage.getItem('activities');
      const activitiesData = activitiesString ? JSON.parse(activitiesString) : [];
      setActivities(activitiesData);
    }

    if (isFocused) {
      loadActivities();
    }
  }, [isFocused]);

  if (!Array.isArray(activities)) {
    console.error('Activities data is not an array:', activities);
    // Render some fallback UI or a loading indicator here
    return <Text>Error loading activities. Please try again.</Text>;
  }

  if (activities.length === 0) {
    return <Text>No activities found.</Text>;
  }

  return (
    <ScrollView>
      {activities.map((activity, index) => {
        const key = activity.id ? activity.id.toString() : index.toString();
        return (
          <View key={key} style={{ margin: 10 }}>
            <Text>Activity: {activity.selectedActivity}</Text>
            <Text>Duration: {activity.duration}</Text>
            <Text>Calories: {activity.calories}</Text>
            <Text>Timestamp: {activity.timestamp}</Text>
            <Text>Nickname: {activity.nickname || 'N/A'}</Text>
            <Text>Notes: {activity.userInput || 'N/A'}</Text>
            {activity.image && (
              <Image source={{ uri: activity.image }} style={{ width: 100, height: 100 }} />
            )}
          </View>
        );
      })}
    </ScrollView>
  );
};


export default SummaryScreen;
