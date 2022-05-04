const initState = {
  users: [
    { id: 1, name: "Phuc" },
    { id: 2, name: "Van" },
  ],
}

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      const index = state.users.findIndex((user) => user.id === action.payload)
      if (index === -1) return state
      console.log("🚀 index", index)
      state.users.splice(index, 1)
      console.log("🚀 newState", state)
      return state
    default:
      return state
  }
  //   return state
}
export default rootReducer
