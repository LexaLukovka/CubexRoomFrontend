import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import calendar from '../../../redux/calendar/action'

const initMapStateToProps = store => ({
  color: store.headerReducer.color,
})

const initMapDispatchToProps = dispatch => ({
  actions: {
    calendar: bindActionCreators(calendar, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
