import { COLOR } from './action'

const initialState = {
  color: 'blue',
}

const headerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case COLOR:
      return {
        ...state,
        color: payload,
      }

    default: {
      return state
    }
  }
}

export default headerReducer
