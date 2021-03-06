import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import auth from 'src/redux/auth/action'

const initMapStateToProps = store => ({
  auth: store.authReducer,
  color: store.headerReducer.color,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(auth, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
