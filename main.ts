controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -160
    pause(100)
    mySprite.vy = -120
    pause(100)
    mySprite.vy = -80
    pause(100)
    mySprite.vy = -40
    pause(200)
    mySprite.vy = 0
    pause(100)
    mySprite.vy = 40
    pause(100)
    mySprite.vy = 80
    pause(100)
    mySprite.vy = 120
    pause(200)
    mySprite.vy = 160
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -80
    pause(100)
    mySprite.vy = -60
    pause(100)
    mySprite.vy = -40
    pause(100)
    mySprite.vy = -20
    pause(200)
    mySprite.vy = 0
    pause(100)
    mySprite.vy = 20
    pause(100)
    mySprite.vy = 50
    pause(100)
    mySprite.vy = 60
    pause(5000)
    mySprite.vy = 0
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`mario run R0`,
    80,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    info.changeScoreBy(10)
    if (level == 1) {
        scene.setBackgroundColor(11)
        tiles.setTilemap(tilemap`level2`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 13))
        level += 1
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(assets.image`myImage`)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(assets.image`myImage0`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`mario run R`,
    80,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    info.changeScoreBy(10)
    if (level == 1) {
        scene.setBackgroundColor(11)
        tiles.setTilemap(tilemap`level2`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 13))
        level += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
	
})
let mySprite: Sprite = null
let level = 0
info.setScore(0)
level = 1
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 50
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 13))
forever(function () {
    scene.centerCameraAt(mySprite.x, -13.5)
    scene.cameraFollowSprite(mySprite)
    if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile0`)) {
        if (true) {
            tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`transparency16`)
        }
    }
})
