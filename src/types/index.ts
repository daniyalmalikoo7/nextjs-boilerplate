export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface ErrorResponse {
  error: string;
  message: string;
  statusCode: number;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
