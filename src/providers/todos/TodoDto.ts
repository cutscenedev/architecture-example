class TodoDto {
  constructor(
    readonly userId: number,
    readonly id: number,
    readonly title: string,
    readonly completed: boolean,
  ) {}
}

export default TodoDto
