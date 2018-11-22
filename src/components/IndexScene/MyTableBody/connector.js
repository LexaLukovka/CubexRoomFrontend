import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import table from 'src/redux/table/action'
import layout from 'src/redux/layout/action'
import header from 'src/redux/header/action'
import * as alert from 'src/redux/alert/action'

const initMapStateToProps = store => ({
  auth: store.authReducer,
  rows: store.tableReducer.rows,
  data: store.tableReducer.data,
  calendar: store.calendarReducer.date,
  color: store.headerReducer.color,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    table: bindActionCreators(table, dispatch),
    alert: bindActionCreators(alert, dispatch),
    layout: bindActionCreators(layout, dispatch),
    header: bindActionCreators(header, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
