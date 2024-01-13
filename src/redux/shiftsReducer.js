// shiftsReducer.js
const initialState = {
  bookedShifts: [],
};

const shiftsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOK_SHIFT":
      return {
        ...state,
        bookedShifts: [...state.bookedShifts, action.payload],
      };
    default:
      return state;
  }
};

export default shiftsReducer;
