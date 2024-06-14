export interface LessonEntity {
  id?: number;
  title: string;
  instructor: string;
  description: string;
  techType: string;
  instructorEmail: string;
  createdAt?: string;
  watched?: boolean;
}
