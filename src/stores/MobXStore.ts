import { observable, action, makeObservable } from 'mobx'

export interface IMobXStore {
  isDarkMode: boolean
  setDarkMode: (state: boolean) => void
}

class MobXStore implements IMobXStore {
  @observable isDarkMode: boolean = false

  constructor() {
    makeObservable(this)
  }

  @action.bound
  setDarkMode(state: boolean) {
    this.isDarkMode = state
  }
}
export const mobXStore = new MobXStore()
