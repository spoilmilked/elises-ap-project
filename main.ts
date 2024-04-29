namespace SpriteKind {
    export const Block = SpriteKind.create()
    export const StatusBar = SpriteKind.create()
    export const ANimal = SpriteKind.create()
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
function spawnZombie (num: number) {
    for (let index = 0; index < num; index++) {
        zombie = 0
        list = [sprites.create(assets.image`snake`, SpriteKind.Enemy), sprites.create(assets.image`monkey`, SpriteKind.ANimal), sprites.create(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 d 4 c . . 
            . . . . b 5 5 1 f f d d 4 4 4 b 
            . . . . b 5 5 d f b 4 4 4 4 b . 
            . . . b d 5 5 5 5 4 4 4 4 b . . 
            . b b d d d 5 5 5 5 5 5 5 b . . 
            b d d d b b b 5 5 5 5 5 5 5 b . 
            c d d b 5 5 d c 5 5 5 5 5 5 b . 
            c b b d 5 d c d 5 5 5 5 5 5 b . 
            c b 5 5 b c d d 5 5 5 5 5 5 b . 
            b b c c c d d d 5 5 5 5 5 d b . 
            . . . . c c d d d 5 5 5 b b . . 
            . . . . . . c c c c c b b . . . 
            `, SpriteKind.ANimal)]
        tiles.placeOnRandomTile(list._pickRandom(), assets.tile`myTile1`)
    }
    if ((0 as any) == (10 as any)) {
    	
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
})
let list: Sprite[] = []
let zombie = 0
let location1: tiles.Location = null
let counter = 0
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`testing`)
mySprite = sprites.create(assets.image`blob`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
counter = 0
let SpawnTimer = 9000
spawnZombie(game.askForNumber("Dificultiy", 1))
game.onUpdateInterval(SpawnTimer, function () {
	
})
