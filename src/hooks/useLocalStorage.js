import { useEffect, useState } from 'react';
import { safeGet, safeSet } from '../utils/storage';

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => safeGet(key, initialValue));

  useEffect(() => {
    safeSet(key, value);
  }, [key, value]);

  return [value, setValue];
}
