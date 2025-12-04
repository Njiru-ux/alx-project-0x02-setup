// Basic interfaces for the project

export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  website?: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  disabled?: boolean;
}

// Add more interfaces as needed
