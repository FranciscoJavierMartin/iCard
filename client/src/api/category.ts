import { Category } from 'src/interfaces/category';
import {
  AddCategoryBodyRequest,
  UpdateCategoryBodyRequest,
} from 'src/interfaces/requests';

export async function getCategoriesApi(): Promise<Category[]> {
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}categories/`
  );
  return await response.json();
}

export async function addCategoryApi(
  category: AddCategoryBodyRequest,
  token: string
) {
  const formData = new FormData();
  formData.append('title', category.title);
  formData.append('image', category.image);

  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}categories/`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }
  );

  return await response.json();
}

export async function updateCategoryApi(
  id: number,
  category: UpdateCategoryBodyRequest,
  token: string
) {
  const formData = new FormData();
  formData.append('title', category.title);
  if (category.image) {
    formData.append('image', category.image);
  }

  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}categories/${id}/`,
    {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }
  );

  return await response.json();
}

export async function removeCategoryApi(id: number, token: string): Promise<void> {
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}categories/${id}/`,
    {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return await response.json();
}