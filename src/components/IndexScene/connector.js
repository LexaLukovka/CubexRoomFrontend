import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import layout from 'src/redux/layout/action'
import hall from 'src/redux/hall/action'
import table from 'src/redux/table/action'
import header from 'src/redux/header/action'

const initMapStateToProps = store => ({
  auth: store.authReducer,
  layout: store.layoutReducer,
  rows: store.tableReducer.rows,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    layout: bindActionCreators(layout, dispatch),
    hall: bindActionCreators(hall, dispatch),
    table: bindActionCreators(table, dispatch),
    header: bindActionCreators(header, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
