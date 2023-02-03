import { observable, action, makeObservable } from 'mobx'

export interface IMobXStore {
  isDarkMode: boolean
  setDarkMode: (state: boolean) => void
}

class MobXStore implements IMobXStore {
  @observable deviceScheme = window.matchMedia('(prefers-color-scheme: dark)')
  @observable isDarkMode = false || this.deviceScheme.matches
  env = import.meta.env

  constructor() {
    makeObservable(this)
    this.deviceScheme.addEventListener('change', (event) => {
      this.setDarkMode(event.matches)
    })
  }

  @action.bound
  setDarkMode(state: boolean) {
    this.isDarkMode = state
  }
}
export const mobXStore = new MobXStore()
