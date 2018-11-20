import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import calendar from '../../../redux/calendar/action'

const initMapStateToProps = store => ({})

const initMapDispatchToProps = dispatch => ({
  actions: {
    calendar: bindActionCreators(calendar, dispatch),
  },
})

export default connect(initMapStateToProps, initMapDispatchToProps)
