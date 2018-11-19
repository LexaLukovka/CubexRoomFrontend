import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import table from 'src/redux/table/action'

const initMapStateToProps = store => ({
  rows: store.tableReducer.rows,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    table: bindActionCreators(table, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
