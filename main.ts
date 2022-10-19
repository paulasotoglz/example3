sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    if (info.life() == 1) {
        mySprite.say("Last chance")
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 2 2 . . . . . . . . . . . 
            . . . 2 2 2 2 . . . . . . . . . 
            . . . 2 . . 2 2 2 . . . . . . . 
            . . . 2 . . . . 2 2 2 . . . . . 
            . . . 2 . . . . . . 2 2 2 . . . 
            . . . 2 . . . . . . . . 2 2 2 . 
            . . . 2 . . . . . . 2 2 2 . . . 
            . . . 2 . . . . 2 2 2 . . . . . 
            . . . 2 . . 2 2 2 . . . . . . . 
            . . . 2 2 2 2 . . . . . . . . . 
            . . . 2 2 . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 7 7 . . . . . . . . . . . 
    . . . 7 7 7 7 . . . . . . . . . 
    . . . 7 . . 7 7 7 . . . . . . . 
    . . . 7 . . . . 7 7 7 . . . . . 
    . . . 7 . . . . . . 7 7 7 . . . 
    . . . 7 . . . . . . . . 7 7 7 . 
    . . . 7 . . . . . . 7 7 7 . . . 
    . . . 7 . . . . 7 7 7 . . . . . 
    . . . 7 . . 7 7 7 . . . . . . . 
    . . . 7 7 7 7 . . . . . . . . . 
    . . . 7 7 . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.setLife(3)
forever(function () {
    projectile = sprites.createProjectile(img`
        . . . . . . . . . c c 8 . . . . 
        . . . . . . 8 c c c f 8 c c . . 
        . . . c c 8 8 f c a f f f c c . 
        . . c c c f f f c a a f f c c c 
        8 c c c f f f f c c a a c 8 c c 
        c c c b f f f 8 a c c a a a c c 
        c a a b b 8 a b c c c c c c c c 
        a f c a a b b a c c c c c f f c 
        a 8 f c a a c c a c a c f f f c 
        c a 8 a a c c c c a a f f f 8 a 
        . a c a a c f f a a b 8 f f c a 
        . . c c b a f f f a b b c c 6 c 
        . . . c b b a f f 6 6 a b 6 c . 
        . . . c c b b b 6 6 a c c c c . 
        . . . . c c a b b c c c . . . . 
        . . . . . c c c c c c . . . . . 
        `, -100, randint(-50, 50), SpriteKind.Enemy)
    pause(500)
})
