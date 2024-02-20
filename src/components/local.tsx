import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { saveData, loadData, removeData } from '../utils/storageService';

const LocalStorageComponent: React.FC = () => {
  const [myData, setMyData] = useState<string | null>(null);

  const handleSaveData = async () => {
    const testData = { myData: 'This is a test' };
    await saveData('myKey', testData);
  };

  const handleLoadData = async () => {
    const loadedData = await loadData<{ myData: string }>('myKey');
    if (loadedData) {
      setMyData(loadedData.myData);
    }
  };

  const handleRemoveData = async () => {
    await removeData('myKey');
    setMyData(null);
  };

  return (
    <View>
      <Text>{myData}</Text>
      <Button title="Save Data" onPress={handleSaveData} />
      <Button title="Load Data" onPress={handleLoadData} />
      <Button title="Remove Data" onPress={handleRemoveData} />
    </View>
  );
};

export default LocalStorageComponent;
