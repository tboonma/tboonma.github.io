import { observable, action, makeObservable, reaction } from 'mobx'

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

    this.updateDarkClassName()

    this.deviceScheme.addEventListener('change', (event) => {
      this.setDarkMode(event.matches)
    })

    reaction(
      () => this.isDarkMode,
      this.updateDarkClassName
    )
  }

  @action.bound
  setDarkMode(state: boolean) {
    this.isDarkMode = state
  }

  updateDarkClassName = () => {
    const rootElement = document.getElementById('root')
    if (rootElement === null) return;
    rootElement.className = this.isDarkMode ? 'dark' : ''
  }
}
export const mobXStore = new MobXStore()
