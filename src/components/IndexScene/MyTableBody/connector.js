import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import table from 'src/redux/table/action'

const initMapStateToProps = store => ({
  rows: store.tableReducer.rows,
  data: store.tableReducer.data,
  calendar: store.calendarReducer.date,
  color: store.headerReducer.color,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    table: bindActionCreators(table, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
