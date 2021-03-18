import UserDto from '../../providers/user/UserDto'
import User from './User'

class UserMapper {
  toModel(userDto: UserDto): User {

  }

  toDto(user: User): UserDto {

  }
}

export default UserMapper
