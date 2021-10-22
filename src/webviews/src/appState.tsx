import createVSCodeZustand from './lib/state/zustandState'
import VSCodeAPI from './lib/VSCodeAPI'

type AppState = {
  foo: string
  bar: number
  toggle1: boolean
  toggle2: boolean
  setToggle1: React.ChangeEventHandler<HTMLInputElement>
  setToggle2: React.ChangeEventHandler<HTMLInputElement>
}

const useAppState = createVSCodeZustand<AppState>('myAppState', set => ({
  foo: '',
  bar: 0,
  toggle1: false,
  toggle2: true,
  setToggle1: e => set({ toggle1: e.currentTarget.checked }),
  setToggle2: e => set({ toggle2: e.currentTarget.checked }),
}))

export default useAppState
