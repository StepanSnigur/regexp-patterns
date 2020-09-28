export interface IInitialState {
  patterns: object[],
  patternsTags: string[],
  isLoading: boolean,
  isError: boolean
}
const initialState: IInitialState = {
  patterns: [],
  patternsTags: [],
  isLoading: false,
  isError: false
}

const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'LOAD_PATTERNS':
      return {
        ...state,
        patterns: action.payload,
        isLoading: false,
        isError: false
      }
    case 'SET_PATTERNS_TAGS':
      return {
        ...state,
        patternsTags: action.payload
      }
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true
      }
    case 'SET_ERROR':
      return {
        ...state,
        isError: true
      }
    default:
      return state
  }
}

export default Reducer
