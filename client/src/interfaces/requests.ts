export interface AddUserBodyRequest {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  is_active: boolean;
  is_staff: boolean;
}

export interface UpdateUserBodyRequest {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  is_active: boolean;
  is_staff: boolean;
}

export interface AddCategoryBodyRequest {
  title: string;
  image: string;
}

export interface UpdateCategoryBodyRequest {
  title: string;
  image: string;
}