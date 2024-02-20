import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityOption, ActivityType, activityOptions } from '../constants/ActivityType';
import { Picker } from '@react-native-picker/picker';

const ActivityScreen: React.FC = () => {
    const [selectedActivity, setSelectedActivity] = useState<string>(activityOptions[0].value);
    const [duration, setDuration] = useState('');
    const [calories, setCalories] = useState('');
    const [timestamp, setTimestamp] = useState('');
    const [nickname, setNickname] = useState('');
    const [userInput, setUserInput] = useState('');
    const [image, setImage] = useState('');
    const [id, setId] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
     setImage((result as any).uri);
    }
  };

  const saveActivity = async () => {
    // Validate and convert the data as needed
    const newActivity: ActivityType = {
      selectedActivity,
      duration: parseInt(duration, 10), // Assuming duration is meant to be an integer
      calories: parseInt(calories, 10), // Same for calories
      timestamp, // Consider converting to a Date object if needed
      nickname, // Strings are fine
      userInput, // Strings are fine
      image, // Make sure this is meant to be a string URI
      id
      
    };
    
    // Check for NaN values and handle them appropriately
    if (isNaN(newActivity.duration) || isNaN(newActivity.calories)) {
      // Handle invalid duration or calories input
      console.error('Invalid input for duration or calories');
      return;
    }

    try {
      const existingActivitiesString = await AsyncStorage.getItem('activities');
      const
existingActivities = existingActivitiesString ? JSON.parse(existingActivitiesString) : [];
if (!Array.isArray(existingActivities)) {
// Handle the case where the existing data is not an array
console.error('Corrupted activities data:', existingActivities);
return;
}
existingActivities.push(newActivity);
await AsyncStorage.setItem('activities', JSON.stringify(existingActivities));
alert('Activity saved successfully');
} catch (error) {
// Consider setting an error state and displaying error message within the UI
console.error('Failed to save the activity', error);
alert('Failed to save the activity');
}
};
  

  return (
    <View style={styles.container}>
         <Picker
        selectedValue={selectedActivity}
        onValueChange={(itemValue) => setSelectedActivity(itemValue)}
        style={styles.picker}>
        {activityOptions.map((activity: ActivityOption, index: number) => (
          <Picker.Item key={index} label={activity.label} value={activity.value} />
        ))}
      </Picker>
      <TextInput placeholder="Duration" value={duration} onChangeText={setDuration} style={styles.input} />
      <TextInput placeholder="Calories" value={calories} onChangeText={setCalories} style={styles.input} />
      <TextInput placeholder="Timestamp" value={timestamp} onChangeText={setTimestamp} style={styles.input} />
      <TextInput placeholder="Nickname (Optional)" value={nickname} onChangeText={setNickname} style={styles.input} />
      <TextInput placeholder="Notes" value={userInput} onChangeText={setUserInput} style={styles.input} multiline />
      <TouchableOpacity onPress={pickImage} style={styles.button}>
        <Text>Upload Image</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Save Activity" onPress={saveActivity} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginVertical: 5,
  },
  button: {
    marginVertical: 5,
    backgroundColor: '#ddd',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 5,
  },
  picker: {
    width: "100%",
    height: 100,
    marginBottom: 100
  }

});

export default ActivityScreen;
