import { connect } from "react-redux"

const Redux = ({ name, testFunc, children, dataRedux, deleteUserRedux }) => {
  const handleDelete = (user) => {
    deleteUserRedux(user)
  }
  console.log("🚀 dataRedux", dataRedux)
  return (
    <div>
      <h3>{name}</h3>
      <h4>{children.age}</h4>
      <button onClick={() => testFunc("aa")}>button</button>
      <button onClick={() => handleDelete(2)}>delete</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { dataRedux: state.users }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) => dispatch({ type: "DELETE_USER", payload: userDelete }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Redux)
