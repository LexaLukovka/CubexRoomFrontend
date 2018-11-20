const checkSize = (color) => {
  switch (color) {
    case 'green':
      return 'До 5'
    case 'red':
      return 'До 15'
    case 'blue':
      return 'До 25'
    case 'purple':
      return 'От 25'
    default:
      return 'До 25'
  }
}

export default checkSize
