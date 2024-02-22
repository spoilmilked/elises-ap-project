namespace SpriteKind {
    export const Block = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.create(assets.image`blade`, SpriteKind.Projectile)
    projectile2.follow(zombie, 50)
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, assets.tile`baracade`)) {
        sprite.y += -10
        scene.cameraShake(4, 100)
        tiles.setTileAt(location, assets.tile`baracade0`)
    } else if (tiles.tileAtLocationEquals(location, assets.tile`baracade0`)) {
        sprite.y += -10
        scene.cameraShake(4, 100)
        tiles.setTileAt(location, assets.tile`baracade1`)
    } else if (tiles.tileAtLocationEquals(location, assets.tile`baracade1`)) {
        sprite.y += -10
        scene.cameraShake(4, 100)
        tiles.setTileAt(location, assets.tile`transparency16`)
        tiles.setWallAt(location, false)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
})
let zombie: Sprite = null
let projectile2: Sprite = null
tiles.setCurrentTilemap(tilemap`testing`)
let mySprite = sprites.create(assets.image`blob`, SpriteKind.Player)
controller.moveSprite(mySprite)
let SpawnTimer = 9000
scene.cameraFollowSprite(mySprite)
game.onUpdateInterval(SpawnTimer, function () {
    zombie = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
    zombie.follow(mySprite, 5)
    tiles.placeOnRandomTile(zombie, assets.tile`myTile1`)
})
