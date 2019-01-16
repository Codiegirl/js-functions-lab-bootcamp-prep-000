function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  return ${"Happy holidays,"} ${"name}!
}
describe('happyHolidaysTo(name)', () => {
    it('returns "Happy holidays, ${name}!"', () => {
      expect(happyHolidaysTo('you')).toEqual('Happy holidays, you!')
    })
  })