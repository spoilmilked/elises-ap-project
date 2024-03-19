namespace SpriteKind {
    export const Block = SpriteKind.create()
}
namespace StatusBarKind {
    export const Ammo = StatusBarKind.create()
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
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    DirectionTracker = 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (AMMObar.value == 0) {
        if (100 <= info.score()) {
            AMMObar.value += 100
            info.changeScoreBy(-100)
            game.splash("reload complete -100")
        } else {
            game.splash("Not enough AMMO")
        }
    }
    if (AMMObar.value != 0) {
        shooting()
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    DirectionTracker = 3
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
        counter = 2
        tiles.setTileAt(location, assets.tile`baracade1`)
    } else if (tiles.tileAtLocationEquals(location, assets.tile`baracade1`)) {
        sprite.y += -10
        scene.cameraShake(4, 100)
        tiles.setTileAt(location, assets.tile`myTile2`)
        counter = 3
        tiles.setWallAt(location, false)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    DirectionTracker = 4
})
function Ammo2 () {
    AMMObar = statusbars.create(20, 4, StatusBarKind.Ammo)
    AMMObar.setLabel("AMMO")
    AMMObar.attachToSprite(mySprite)
    AMMObar.value = 100
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(sprite)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    DirectionTracker = 2
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`FLOOR`, function (sprite, location) {
    location1 = tiles.getTileLocation(4, 3)
    if (controller.B.isPressed()) {
        if (true) {
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
    }
})
function shooting () {
    AMMObar.value += -10
    if (DirectionTracker == 1) {
        projectile = sprites.createProjectileFromSprite(assets.image`blade`, mySprite, 0, -31)
    } else if (DirectionTracker == 2) {
        projectile = sprites.createProjectileFromSprite(assets.image`blade`, mySprite, 0, 31)
    } else if (DirectionTracker == 3) {
        projectile = sprites.createProjectileFromSprite(assets.image`blade`, mySprite, -31, 0)
    } else if (DirectionTracker == 4) {
        projectile = sprites.createProjectileFromSprite(assets.image`blade`, mySprite, 31, 0)
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (0 == statusbar.value) {
        sprites.destroy(otherSprite)
        sprites.destroy(sprite)
        info.player1.changeScoreBy(100)
    }
    sprites.destroy(projectile)
    statusbar.value += -20
})
let zombie: Sprite = null
let statusbar: StatusBarSprite = null
let projectile: Sprite = null
let AMMObar: StatusBarSprite = null
let DirectionTracker = 0
let location1: tiles.Location = null
let counter = 0
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`testing`)
mySprite = sprites.create(assets.image`blob`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
counter = 0
Ammo2()
info.setLife(3)
game.splash("Press A to shoot B to repair baracade")
info.setScore(100)
game.onUpdateInterval(2000, function () {
    statusbar = statusbars.create(18, 2, StatusBarKind.Health)
    zombie = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
    zombie.follow(mySprite, 5)
    tiles.placeOnRandomTile(zombie, assets.tile`myTile1`)
    statusbar.value = 100
    statusbar.attachToSprite(zombie)
})
