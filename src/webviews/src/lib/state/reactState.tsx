import { Dispatch, useState } from 'react'
import VSCodeAPI from '../VSCodeAPI'

/**
 * Returns a stateful value, and a function to update it.
 * Serializes the state to the VSCode API.
 *
 * @export
 * @template S
 * @param {(S | (() => S))} initialState The initial state.
 * @param {*} uniqueStateKey A unique key to identify the state.
 * @return {*}  {[S, Dispatch<S>]}
 */
export default function useVSCodeState<S>(
  initialState: S | (() => S),
  uniqueStateKey
): [S, Dispatch<S>] {
  const [localState, setLocalState] = useState(
    VSCodeAPI.getState()[uniqueStateKey] || initialState
  )

  const setState = (newState: S) => {
    VSCodeAPI.setState({ ...VSCodeAPI.getState(), [uniqueStateKey]: newState })
    setLocalState(newState)
  }
  return [localState, setState]
}
