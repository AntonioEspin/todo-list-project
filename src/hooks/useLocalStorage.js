import { useEffect, useState } from "react";

function useLocalStorage (storageName, initialValue) {

  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(()=>{

    setTimeout(()=>{
      try {
        // codigo para el LocalStorage
        let parsedItem;
        const localStorageItem = localStorage.getItem(storageName)
      
        if(!localStorageItem) {
          localStorage.setItem(storageName, JSON.stringify(initialValue))
          parsedItem = initialValue
          setItem(parsedItem)
          setLoading(false)
        } else {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
          setLoading(false)
        }
      // ----------------------------
      } catch (error) {
        setError(true)
      }
    }, 2000)
  }, [])

  const saveItem = (newItem) => {
    localStorage.setItem(storageName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return {item, setItem, saveItem, loading, error}
}

export {useLocalStorage}