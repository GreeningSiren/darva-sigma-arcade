sprites.on_fire_created(function (location) {
    music.knock.play()
    scene.createParticleEffectAtLocation(location, effects.fire)
    sprites.set_flame_strength(location, 5)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Fire Plane Left Animation`,
    700,
    true
    )
})
sprites.on_fire_destroyed(function (location) {
    music.thump.play()
    scene.clearParticleEffectsAtLocation(location)
    tiles.setTileAt(location, assets.tile`burnt tree`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`Fire Plane Right Animation`,
    700,
    true
    )
})
scene.onOverlapTile(SpriteKind.Water, assets.tile`tree fire`, function (sprite, location) {
    sprite.destroy()
    sprites.change_flame_strength_by(location, -1)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    sprites.spray(mySprite, assets.image`water`)
})
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
game.set_health_of_trees(7)
game.set_dryness_of_grass(3)
game.set_strength_of_wind(3)
mySprite = sprites.create(assets.image`Fire Plane Right`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
for (let index = 0; index < 4; index++) {
    sprites.create_spreading_fire(assets.tile`tree`, assets.tile`tree fire`)
}
hud.fire_hud(true)
hud.forest_hud(true)
hud.danger_hud(true)
game.onUpdate(function () {
    sprites.random_spread()
})
