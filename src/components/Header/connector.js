import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const initMapStateToProps = store => ({
  color: store.headerReducer.color,
})

const initMapDispatchToProps = dispatch => ({
  actions: {},
})

export default connect(initMapStateToProps, initMapDispatchToProps)
