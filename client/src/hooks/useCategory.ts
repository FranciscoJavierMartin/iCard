import { useContext, useState } from 'react';
import {
  getCategoriesApi,
  addCategoryApi,
  updateCategoryApi,
  removeCategoryApi,
} from 'src/api/category';
import { AuthContext } from 'src/contexts';
import { Category } from 'src/interfaces/category';
import {
  AddCategoryBodyRequest,
  UpdateCategoryBodyRequest,
} from 'src/interfaces/requests';

export function useCategory() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const { auth } = useContext(AuthContext);

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

  const addCategory = async (category: AddCategoryBodyRequest) => {
    try {
      setLoading(true);
      await addCategoryApi(category, auth?.token || '');
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const updateCategory = async (
    id: number,
    category: UpdateCategoryBodyRequest
  ) => {
    try {
      setLoading(true);
      await updateCategoryApi(id, category, auth?.token || '');
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const removeCategory = async (id: number): Promise<void> => {
    try {
      setLoading(true);
      await removeCategoryApi(id, auth?.token || '');
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    categories,
    getCategories,
    addCategory,
    updateCategory,
    removeCategory,
  };
}
