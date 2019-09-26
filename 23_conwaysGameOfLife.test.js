const conwaysGameOfLife = require('./23_conwaysGameOfLife').conwaysGameOfLife;

describe("Conway's Game Of Life", function () {
  describe("Testing One Generation", function () {
    it("Should correctly return the next generation of the game", function () {
      let game = [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 1, 1, 0, 0],
        [0, 0, 1, 0, 1],
        [0, 0, 1, 0, 0]
      ]
      expect(conwaysGameOfLife(game)).toEqual([
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0]
      ])
    })
  })
})