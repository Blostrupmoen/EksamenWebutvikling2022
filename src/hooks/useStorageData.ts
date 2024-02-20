import { useState, useEffect } from 'react';
import { loadData } from '../utils/storageService';

function useStorageData<T>(key: string, initial: T) {
    const [data, setData] = useState<T>(initial);
  
    useEffect(() => {
      const fetchAndSetData = async () => {
        const loadedData = await loadData<T>(key);
        if (loadedData === null) {
          setData(initial);
        } else {
          setData(loadedData);
        }
      };
  
      fetchAndSetData();
    }, [key]);
  
    return data;
  }
  
  export default useStorageData;