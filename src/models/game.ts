import { useState, useCallback } from 'react';
export default function useAuthModel() {
  const [news] = useState(null);
  return {
    news,
  };
}
