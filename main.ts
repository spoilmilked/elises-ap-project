namespace SpriteKind {
    export const Block = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Block, function (sprite, otherSprite) {
    zombie.y += 8
})
let zombie: Sprite = null
tiles.setCurrentTilemap(tilemap`testing`)
let baracade = sprites.create(assets.image`myImage`, SpriteKind.Block)
let mySprite = sprites.create(assets.image`blob`, SpriteKind.Player)
zombie = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
baracade.setPosition(120, 40)
baracade.setPosition(120, 60)
controller.moveSprite(mySprite)
game.onUpdateInterval(1000, function () {
    tiles.placeOnRandomTile(zombie, assets.tile`myTile1`)
    zombie.follow(mySprite)
})
