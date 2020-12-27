class TodoDto {
  constructor(
    public id: number,
    public userId: number,
    public title: string,
    public completed: boolean,
  ) {}
}

export default TodoDto
