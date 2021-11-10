import { useState } from 'react';
import { getCategoriesApi } from 'src/api/category';
import { Category } from 'src/interfaces/category';

export function useCategory() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [categories, setCategories] = useState<Category[]>([]);

  const getCategories = async () => {
    try {
      setLoading(true);
      const response = await getCategoriesApi();
      setCategories(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    categories,
    getCategories,
  };
}
