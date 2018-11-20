import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import calendar from 'src/redux/calendar/action'

const initMapStateToProps = store => ({
  data: store.tableReducer.data,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    calendar: bindActionCreators(calendar, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
