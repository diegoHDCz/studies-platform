import { LessonEntity } from "../interfaces/LessonEntity";

export class ClassRegistration {
  constructor(
    public name: string,
    public email: string,
    public techType: string,
    public classTitle: string,
    public description: string
  ) {}
}


export function mapToEntity(classRegistration: ClassRegistration): LessonEntity {
  return {
    title: classRegistration.classTitle,
    instructor: classRegistration.name,
    description: classRegistration.description,
    techType: classRegistration.techType,
    instructorEmail: classRegistration.email,
  };
}
