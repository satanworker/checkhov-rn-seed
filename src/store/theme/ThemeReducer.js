import { handleActions, createAction } from 'redux-actions'

// --- 
// CONSTANTS
// ---

export const ENABLE_LIGHT_THEME = 'theme/LIGHT'
export const ENABLE_DARK_THEME = 'theme/DARK'

// ---
// ACTION CREATORS
// ---

export const enableLightTheme = createAction(ENABLE_LIGHT_THEME)
export const enableDarkTheme = createAction(ENABLE_DARK_THEME)

// ---
// INITIAL STATE
// ---

const initialState = {
  theme: 'light'
}

// ---
// REDUCER
// ---

export default handleActions(
  {
    [ENABLE_LIGHT_THEME]: (state, { payload }) => (
      { ...state, theme: 'light' }
    ),
    [ENABLE_DARK_THEME]: (state, { payload }) => (
      { ...state, theme: 'dark' }
    )
  },
  initialState
)
