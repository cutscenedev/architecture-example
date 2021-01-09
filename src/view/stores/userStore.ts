import { makeAutoObservable } from 'mobx'

import UserModel from '../../models/userModel'

class UserStore extends UserModel {
  constructor(id: string, name: string) {
    super(id, name)

    makeAutoObservable(this)
  }

  static createFromModel(user: UserModel) {
    return new UserStore(user.id, user.name)
  }
}

export default UserStore
