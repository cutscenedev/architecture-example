import UserDto from '../dtos/userDto'

class UserModel {
  constructor(
    public id: string,
    public name: string,
  ) {}

  static createFromDto(userDto: UserDto) {
    return new UserModel(userDto.id, userDto.name)
  }
}

export default UserModel
