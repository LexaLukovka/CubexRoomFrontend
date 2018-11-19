export const COLOR = 'COLOR'

const color = (colorHeader) => ({
  type: COLOR,
  payload: colorHeader,
})


export default { color }
