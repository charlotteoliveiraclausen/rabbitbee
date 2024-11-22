namespace SpriteKind {
    export const Friend = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Friend, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 100)
    music.magicWand.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 100)
    music.baDing.play()
    info.changeScoreBy(1)
    if (info.score() % 10 == 0) {
        info.changeLifeBy(1)
        if (info.score() % 10 == 0) {
            friend = sprites.create(img`
                11..............
                111.........11..
                1131.......1111.
                .1331.....13111.
                .1133....133111.
                ..1131...331d...
                ...11111111d....
                ...11dd1dd1.....
                ....1df1fd1.....
                ...111131111....
                ...111b1b111....
                ....1111111.....
                ....bdddddb.....
                ..1d7ff77fff71..
                ..177c777fc771..
                .1deeeeeeeeeed1.
                .111eeeeeeee111.
                .11beeeeeeeeb11.
                111bddddddddb111
                `, SpriteKind.Friend)
            friend.setPosition(randint(10, 140), randint(10, 100))
            friends.unshift(friend)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 100)
    music.smallCrash.play()
    info.changeLifeBy(-1)
})
let clover: Sprite = null
let bee: Sprite = null
let friend: Sprite = null
let friends: Sprite[] = []
scene.setBackgroundImage(assets.image`background`)
let hero = sprites.create(assets.image`hero`, SpriteKind.Player)
controller.moveSprite(hero)
hero.setStayInScreen(true)
friends = sprites.allOfKind(SpriteKind.Player)
game.onUpdateInterval(5000, function () {
    bee = sprites.createProjectileFromSide(img`
        . . . . 1 9 1 9 1 1 9 1 9 . . . 
        . . . . 1 . 9 . 9 . 9 . 9 . . . 
        . . . . . 9 . 1 . 9 . 1 9 . . . 
        . . . . . . 9 9 9 9 9 9 . . . . 
        . . f f . . 5 5 f 5 4 f . . . . 
        . f f f f 4 5 f 5 5 f 5 4 . . . 
        f d f f f 5 5 f 5 5 f 5 5 f . . 
        f f f f f 5 5 f 5 5 f 5 5 f f f 
        f d f f f 5 5 f 5 5 f 5 5 f . . 
        . f f f f 4 5 f 5 5 f 5 4 . . . 
        . . f f . . 5 5 f 5 4 f . . . . 
        . . . . . . 9 9 9 9 9 9 . . . . 
        . . . . . 9 . 1 . 9 . 1 9 . . . 
        . . . . 1 . 9 . 9 . 9 . 9 . . . 
        . . . . 1 9 1 9 1 1 9 1 9 . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    bee.setKind(SpriteKind.Enemy)
})
game.onUpdateInterval(1000, function () {
    clover = sprites.createProjectileFromSide(img`
        . . . b b b . . . b b . . . . . 
        . . b 5 7 b . . b 5 b b . . . . 
        . b b 7 7 b . . b 7 7 b b . . . 
        b b 7 7 7 b b b b 7 7 7 7 b . . 
        b 7 6 6 7 7 b b 7 7 6 6 7 b . . 
        . b b b 6 7 7 7 7 6 b b b . . . 
        . . . . b b 7 7 b b . . . . . . 
        b b b b 7 7 7 7 7 7 b b b b . . 
        b 5 7 7 7 6 b b 6 7 7 7 5 b . . 
        b 7 7 7 6 b b 6 b 6 7 7 7 b . . 
        b b 7 7 b . b 6 b b 6 7 b b . . 
        . b b 6 b . b 6 . b b 6 b . . . 
        . . b b . . b b 6 . b b . . . . 
        . . . . . . . b 7 6 . . . . . . 
        . . . . . . . b b b . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
})
