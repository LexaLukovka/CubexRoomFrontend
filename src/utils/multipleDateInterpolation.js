import moment from 'moment'

const multipleDateInterpolation = data => (date, selected) => {
  const selectedMap = selected.map(selectedDate => moment(selectedDate).format('YYYY-MM-DD'))
  const workoutDatesMap = data.map(workoutDate => moment(workoutDate).format('YYYY-MM-DD'))

  const indexSelected = selectedMap.indexOf(moment(date).format('YYYY-MM-DD'))
  const indexWorkout = workoutDatesMap.indexOf(moment(date).format('YYYY-MM-DD'))

  if (indexSelected === -1) return [].concat(data, date)
  if (indexWorkout === -1) return data
  return selected
}

export default multipleDateInterpolation
