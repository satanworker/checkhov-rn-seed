import { handleActions, createAction } from 'redux-actions'

// --- 
// CONSTANTS
// ---

export const EXAMPLE_TEST = 'example/TEST'

// ---
// ACTION CREATORS
// ---

export const exampleTest = createAction(EXAMPLE_TEST)

// ---
// INITIAL STATE
// ---

const initialState = {
  test: 'test'
}

// ---
// REDUCER
// ---

export default handleActions(
  {
    [EXAMPLE_TEST]: (state, { payload }) => (
      { ...state, test: payload }
    )
  },
  initialState
)
