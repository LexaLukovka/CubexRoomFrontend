import { connect } from 'react-redux'

const initMapStateToProps = store => ({
  color: store.headerReducer.color,
})

export default connect(initMapStateToProps)
