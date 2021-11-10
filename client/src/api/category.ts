import { Category } from 'src/interfaces/category';

export async function getCategoriesApi(): Promise<Category[]> {
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}categories/`
  );
  return await response.json();
}
