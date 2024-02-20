import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveData = async <T>(key: string, value: T): Promise<void> => {
  try {
    const stringValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, stringValue);
    console.log('Data successfully saved');
  } catch (e) {
    console.log('Failed to save the data to the storage', e);
  }
};

export const loadData = async <T>(key: string): Promise<T | null> => {
  try {
    const stringValue = await AsyncStorage.getItem(key);
    return stringValue != null ? JSON.parse(stringValue) : null;
  } catch(e) {
    console.log('Failed to fetch the data from storage', e);
    return null;
  }
};

export const removeData = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('Data removed successfully');
  } catch(e) {
    console.log('Failed to remove the data', e);
  }
};

