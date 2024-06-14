import { LessonEntity } from '../interfaces/LessonEntity';

export class AvailableClass {
  constructor(
    public id: number,
    public title: string,
    public instructor: string,
    public description: string,
    public techType: string,
    public createdAt: Date,
    public watched: boolean
  ) {}
}

export function mapToAvailable(data: LessonEntity[]): AvailableClass[] {
    return data.map(lesson=>({
      id: lesson.id!,
      title: lesson.title,
      instructor: lesson.instructor,
      description: lesson.description,
      techType: lesson.techType,
      createdAt: new Date(lesson.createdAt!),
      watched: lesson.watched!

    }))
}
