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
