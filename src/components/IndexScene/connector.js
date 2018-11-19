import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import layout from 'src/redux/layout/action'
import table from 'src/redux/table/action'

const initMapStateToProps = store => ({
  auth: store.authReducer,
  layout: store.layoutReducer,
  rows: store.tableReducer.rows,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    layout: bindActionCreators(layout, dispatch),
    table: bindActionCreators(table, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
