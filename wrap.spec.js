const {chai, expect} = require('chai')
const wrap = require('./wrap')

describe('wrap function', () => {
  const wrapFunction = wrap("Hello World", 10);

  it("Returns empty string if empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  })

  it("Returns string if column number is greater than word length", () => {
    expect(wrap("hi", 5)).to.equal("hi");
  });

  it("Returns a string with proper line breaks", () => {
    expect(wrapFunction).to.equal("Hello \nWorld")
    expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.equal("Lorem ipsum dolor \nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.")
  })

  it("First argument passed is a string, second argument is a number", () => {
    expect(() => wrap(3, "Hello World")).to.throw()
  })

})
