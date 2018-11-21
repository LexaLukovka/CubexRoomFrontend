import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import auth from 'src/redux/auth/action'
import layout from 'src/redux/layout/action'
import header from 'src/redux/header/action'

const initMapStateToProps = store => ({
  auth: store.authReducer,
  layout: store.layoutReducer,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    auth: bindActionCreators(auth, dispatch),
    layout: bindActionCreators(layout, dispatch),
    header: bindActionCreators(header, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
