const initialState = {
  notes: []
};

const GET_USER_NOTES = "GET_USER_NOTES";

export function getUserNotes(data) {
  return {
    type: GET_USER_NOTES,
    payload: data
  };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_NOTES:
      return Object.assign({}, state, { notes: action.payload });
    default:
      return state;
  }
}
