namespace SpriteKind {
    export const Block = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`FLOOR0`, function (sprite, location) {
    location1 = tiles.getTileLocation(11, 3)
    if (controller.B.isPressed()) {
        tiles.setWallAt(location1, true)
        mySprite.sayText("repairing...", 200, true)
        if (counter == 1) {
            tiles.setTileAt(location1, assets.tile`baracade`)
        } else if (counter == 2) {
            tiles.setTileAt(location1, assets.tile`baracade0`)
            counter = 1
        } else if (counter == 3) {
            tiles.setTileAt(location1, assets.tile`baracade1`)
            counter = 2
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`FLOOR`, function (sprite, location) {
    location1 = tiles.getTileLocation(4, 3)
    if (controller.B.isPressed()) {
        tiles.setWallAt(location1, true)
        mySprite.sayText("repairing...", 200, true)
        if (counter == 1) {
            tiles.setTileAt(location1, assets.tile`baracade`)
        } else if (counter == 2) {
            tiles.setTileAt(location1, assets.tile`baracade0`)
            counter = 1
        } else if (counter == 3) {
            tiles.setTileAt(location1, assets.tile`baracade1`)
            counter = 2
        }
    }
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, assets.tile`baracade`)) {
        sprite.y += -10
        scene.cameraShake(4, 100)
        tiles.setTileAt(location, assets.tile`baracade0`)
        counter = 1
    } else if (tiles.tileAtLocationEquals(location, assets.tile`baracade0`)) {
        sprite.y += -10
        scene.cameraShake(4, 100)
        tiles.setTileAt(location, assets.tile`baracade1`)
        counter = 2
    } else if (tiles.tileAtLocationEquals(location, assets.tile`baracade1`)) {
        sprite.y += -10
        scene.cameraShake(4, 100)
        tiles.setTileAt(location, assets.tile`myTile2`)
        tiles.setWallAt(location, false)
        counter = 3
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
})
let zombie: Sprite = null
let location1: tiles.Location = null
let counter = 0
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`testing`)
mySprite = sprites.create(assets.image`blob`, SpriteKind.Player)
controller.moveSprite(mySprite)
let SpawnTimer = 9000
scene.cameraFollowSprite(mySprite)
counter = 0
game.onUpdateInterval(SpawnTimer, function () {
    zombie = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
    zombie.follow(mySprite, 5)
    tiles.placeOnRandomTile(zombie, assets.tile`myTile1`)
})
