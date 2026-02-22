var board = null
var game = new Chess()

function onDragStart (source, piece, position, orientation) {
  if (game.game_over()) return false

  if ((game.turn() === 'w' && piece.search(/^b/) !== -1) ||
      (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
    return false
  }
}

function onDrop (source, target) {
  var move = game.move({
    from: source,
    to: target,
    promotion: 'q'
  })

  if (move === null) return 'snapback'
}

function onSnapEnd () {
  board.position(game.fen())
}

function resetGame() {
  game.reset()
  board.start()
}

var config = {
  draggable: true,
  position: 'start',
  onDragStart: onDragStart,
  onDrop: onDrop,
  onSnapEnd: onSnapEnd
}

board = Chessboard('board', config)
