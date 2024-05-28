namespace SpriteKind {
    export const button = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const allyprojectile = SpriteKind.create()
    export const enemyprojectile = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (LevelSelect) {
        Spaceship_Projectile = sprites.createProjectileFromSprite(img`
            . f . 
            f 2 f 
            f 5 f 
            f 5 f 
            . f . 
            `, Spaceship, 0, -100)
        Spaceship_Projectile.setVelocity(0, -100)
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        Spaceship_Projectile.setKind(SpriteKind.allyprojectile)
    }
})
function enemies () {
    if (LevelSelect == 1) {
        if (info.score() == 30) {
            game.gameOver(true)
            game.setGameOverEffect(true, effects.confetti)
        }
        Enemies = sprites.create(img`
            .................
            .................
            ........2........
            .......222.......
            ......22222......
            fff..2222222...ff
            f2ff....e....ff2f
            f22ff..eee..ff22f
            f222ffeeeeeff222f
            f2222ffeeeff2222f
            f22222ffeff22222f
            f222222fff222222f
            f222222222222222f
            f222222282222222f
            f222222898222222f
            ff2222892982222ff
            .ff22289298222ff.
            ..ff228929822ff..
            ...ff2892982ff...
            ....ff89298ff....
            .....ff898ff.....
            ......ff8ff......
            .......fff.......
            ........f........
            .................
            `, SpriteKind.Enemy)
        enemy_alive = true
        Enemies.setPosition(randint(0, scene.screenWidth()), 0)
        Enemies.follow(Spaceship, 20)
    }
    if (LevelSelect == 2) {
        if (info.score() == 40) {
            game.gameOver(true)
            game.setGameOverEffect(true, effects.confetti)
        }
        Enemies = sprites.create(img`
            .................
            .................
            ........2........
            .......222.......
            ......22222......
            fff..2222222...ff
            f2ff....e....ff2f
            f22ff..eee..ff22f
            f222ffeeeeeff222f
            f2222ffeeeff2222f
            f22222ffeff22222f
            f222222fff222222f
            f222222222222222f
            f222222282222222f
            f222222898222222f
            ff2222892982222ff
            .ff22289298222ff.
            ..ff228929822ff..
            ...ff2892982ff...
            ....ff89298ff....
            .....ff898ff.....
            ......ff8ff......
            .......fff.......
            ........f........
            .................
            `, SpriteKind.Enemy)
        Enemies.setPosition(randint(0, scene.screenWidth()), 0)
        Enemies.follow(Spaceship, 25)
    }
    if (LevelSelect == 3) {
        if (info.score() == 120) {
            game.gameOver(true)
            game.setGameOverEffect(true, effects.confetti)
        }
        Enemies = sprites.create(img`
            .................
            .................
            ........2........
            .......222.......
            ......22222......
            fff..2222222...ff
            f2ff....e....ff2f
            f22ff..eee..ff22f
            f222ffeeeeeff222f
            f2222ffeeeff2222f
            f22222ffeff22222f
            f222222fff222222f
            f222222222222222f
            f222222282222222f
            f222222898222222f
            ff2222892982222ff
            .ff22289298222ff.
            ..ff228929822ff..
            ...ff2892982ff...
            ....ff89298ff....
            .....ff898ff.....
            ......ff8ff......
            .......fff.......
            ........f........
            .................
            `, SpriteKind.Enemy)
        Enemies.setPosition(randint(0, scene.screenWidth()), 0)
        Enemies.follow(Spaceship, 30)
    }
    if (LevelSelect == 4) {
        if (info.score() == 300) {
            game.gameOver(true)
            game.setGameOverEffect(true, effects.confetti)
        }
        Enemies = sprites.create(img`
            .................
            .................
            ........2........
            .......222.......
            ......22222......
            fff..2222222...ff
            f2ff....e....ff2f
            f22ff..eee..ff22f
            f222ffeeeeeff222f
            f2222ffeeeff2222f
            f22222ffeff22222f
            f222222fff222222f
            f222222222222222f
            f222222282222222f
            f222222898222222f
            ff2222892982222ff
            .ff22289298222ff.
            ..ff228929822ff..
            ...ff2892982ff...
            ....ff89298ff....
            .....ff898ff.....
            ......ff8ff......
            .......fff.......
            ........f........
            .................
            `, SpriteKind.Enemy)
        Enemies.setPosition(randint(0, scene.screenWidth()), 0)
        Enemies.follow(Spaceship, 60)
    }
}
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    sprites.destroy(Bosshealth.spriteAttachedTo())
    Bossalive = false
    info.changeScoreBy(5)
    info.setLife(5)
    if (LevelSelect == 3) {
        game.gameOver(true)
    }
})
function Level_control () {
    if (Level == 0) {
        effects.starField.startScreenEffect()
        tiles.setCurrentTilemap(tilemap`level0`)
        myMenu = miniMenu.createMenu(
        miniMenu.createMenuItem("Galactic Vanguard")
        )
        Help = sprites.create(img`
            ..............................
            111111111111111111111111111111
            1............................1
            1.1....1..11111.1.....111....1
            1.1....1..1.....1.....1..11..1
            1.1....1..1.....1.....1...11.1
            1.1....1..1.....1.....1..11..1
            1.111111..11111.1.....111....1
            1.1....1..1.....1.....1......1
            1.1....1..1.....1.....1......1
            1.1....1..1.....1.....1......1
            1.1....1..1.....1.....1......1
            1.1....1..11111.11111.1......1
            1............................1
            111111111111111111111111111111
            ..............................
            `, SpriteKind.button)
        Play = sprites.create(img`
            ...............................
            1111111111111111111111111111111
            1.............................1
            1.1111..1........1..11.....11.1
            1.1..11.1........1...11...11..1
            1.1...1.1.......111...11.11...1
            1.1..11.1.......111....111....1
            1.1.111.1.......1.1.....1.....1
            1.111...1......1...1....1.....1
            1.1.....1......1...1....1.....1
            1.1.....1......11111....1.....1
            1.1.....1......1...1....1.....1
            1.1.....11111.11...11...1.....1
            1.............................1
            1111111111111111111111111111111
            ...............................
            `, SpriteKind.button)
        cursor = sprites.create(img`
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . . . 1 f f 1 . . . . . . 
            . . . . . 1 1 f f 1 1 . . . . . 
            . . . . 1 1 f f f f 1 1 . . . . 
            . . . 1 1 f f f f f f 1 1 . . . 
            . . 1 1 f f f f f f f f 1 1 . . 
            . 1 1 f f f f f f f f f f 1 1 . 
            1 1 f f f f f f f f f f f f 1 1 
            1 f f f f f f f f f f f f f f 1 
            f f f f f f f f f f f f f f f f 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            f f f f f f f f f f f f f f f f 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        Play.setPosition(39, 90)
        Help.setPosition(129, 90)
        controller.moveSprite(cursor)
    }
    if (Level == 1) {
        sprites.destroy(myMenu)
        sprites.destroy(Help)
        sprites.destroy(Play)
        sprites.destroy(cursor)
        LevelSelect = game.askForNumber("Level select", 1)
    }
    if (Level == 2) {
        sprites.destroy(myMenu)
        sprites.destroy(Help)
        tiles.setCurrentTilemap(tilemap`level10`)
        Help_buttons = miniMenu.createMenu(
        miniMenu.createMenuItem("WASD MOVE"),
        miniMenu.createMenuItem("Z TO SHOOT PROJECTILE")
        )
    }
    if (LevelSelect == 1) {
        sprites.destroy(myMenu)
        sprites.destroy(Help)
        sprites.destroy(Help_buttons)
        Spaceship = sprites.create(assets.image`Spaceship`, SpriteKind.Player)
        tiles.setCurrentTilemap(tilemap`level8`)
        effects.starField.startScreenEffect()
        controller.moveSprite(Spaceship)
        Spaceship.setPosition(84, 98)
        music.play(music.createSong(hex`0078000408040200001c00010a006400f401640000040000000000000000000000000005000004a10000000400011e04000800012208000c00021d270c001000012410001400012714001800011d18001c00012a1c00200002242a20002400021d2424002800011d28002c0001273000340002202a38003c00021d293c004000012444004800021d2548004c0001204c00500001275400580002202958005c00021b246000640002242a64006800012068006c00021d296c00700001247400780001207c00800002222906001c00010a006400f40164000004000000000000000000000000000000000279001400180001201c002000012724002800012a28002c0001202c003000012a30003400011b3400380002192440004400021e2948004c00012a4c005000011950005400031b202554005800012c5c00600002202760006400011d68006c00012470007400021b2974007800012578007c0001297c008000021d2c`), music.PlaybackMode.LoopingInBackground)
        info.setLife(5)
        game.showLongText("Welcome Pilot, The Empire has planned to take over the base, you'll need to defeat these troops that come in your way", DialogLayout.Bottom)
    }
    if (LevelSelect == 2) {
        sprites.destroy(myMenu)
        sprites.destroy(Help)
        sprites.destroy(Help_buttons)
        tiles.setCurrentTilemap(tilemap`level8`)
        effects.starField.startScreenEffect()
        Spaceship = sprites.create(assets.image`Spaceship`, SpriteKind.Player)
        music.play(music.createSong(hex`0078000408040200001c00010a006400f401640000040000000000000000000000000005000004a10000000400011e04000800012208000c00021d270c001000012410001400012714001800011d18001c00012a1c00200002242a20002400021d2424002800011d28002c0001273000340002202a38003c00021d293c004000012444004800021d2548004c0001204c00500001275400580002202958005c00021b246000640002242a64006800012068006c00021d296c00700001247400780001207c00800002222906001c00010a006400f40164000004000000000000000000000000000000000279001400180001201c002000012724002800012a28002c0001202c003000012a30003400011b3400380002192440004400021e2948004c00012a4c005000011950005400031b202554005800012c5c00600002202760006400011d68006c00012470007400021b2974007800012578007c0001297c008000021d2c`), music.PlaybackMode.LoopingInBackground)
        controller.moveSprite(Spaceship)
        Spaceship.setPosition(84, 98)
        info.setLife(5)
        game.showLongText("Great Job Pilot, Now continue clearing the areas and call me back when you do. ", DialogLayout.Bottom)
    }
    if (LevelSelect == 3) {
        tiles.setCurrentTilemap(tilemap`level8`)
        Spaceship = sprites.create(assets.image`Spaceship`, SpriteKind.Player)
        controller.moveSprite(Spaceship)
        Spaceship.setPosition(84, 98)
        info.setLife(5)
        sprites.destroy(myMenu)
        sprites.destroy(Help)
        sprites.destroy(Help_buttons)
        effects.starField.startScreenEffect()
        game.showLongText("The commander has great knowledge and send his troops to finish you off be aware", DialogLayout.Bottom)
        if (Bossalive == true) {
            music.play(music.createSong(hex`005a000408020300001c00010a006400f4016400000400000000000000000000000000050000040e0004000800091d1e2022242527292a04001c00100500640000041e000004000000000000000000000000000a040004540008000c00091d1e2022242527292a0c001000091d1e2022242527292a10001400091d1e2022242527292a20002400091d1e2022242527292a24002800091d1e2022242527292a28002c00091d1e2022242527292a06001c00010a006400f4016400000400000000000000000000000000000000021c0004000800091d1e2022242527292a1c002000091d1e2022242527292a`), music.PlaybackMode.LoopingInBackground)
        } else if (Bossalive == false) {
            music.play(music.createSong(hex`0078000408040200001c00010a006400f401640000040000000000000000000000000005000004a10000000400011e04000800012208000c00021d270c001000012410001400012714001800011d18001c00012a1c00200002242a20002400021d2424002800011d28002c0001273000340002202a38003c00021d293c004000012444004800021d2548004c0001204c00500001275400580002202958005c00021b246000640002242a64006800012068006c00021d296c00700001247400780001207c00800002222906001c00010a006400f40164000004000000000000000000000000000000000279001400180001201c002000012724002800012a28002c0001202c003000012a30003400011b3400380002192440004400021e2948004c00012a4c005000011950005400031b202554005800012c5c00600002202760006400011d68006c00012470007400021b2974007800012578007c0001297c008000021d2c`), music.PlaybackMode.LoopingInBackground)
        }
    }
    if (LevelSelect == 4) {
        tiles.setCurrentTilemap(tilemap`level8`)
        effects.starField.startScreenEffect()
        Spaceship = sprites.create(assets.image`Spaceship`, SpriteKind.Player)
        controller.moveSprite(Spaceship)
        Spaceship.setPosition(84, 98)
        info.setLife(5)
        sprites.destroy(myMenu)
        sprites.destroy(Help)
        sprites.destroy(Help_buttons)
        game.showLongText("I̸̺̺͎̰̥̜̯̼̮̰͖̜͂͆̿̈́̿̔ ǎ̴̯̀͠m̵̢͕̫̓̔͑̊̈ l̶̬̞͎̖͉̹̝͕̝͖̣̉͆ŏ̸̡̼̺̫̥̻͈̞̍͆̏̓́͜͝ͅs̴̹̀̎̇͗̍͗̾̋̏̈͐͒̕͠͠ͅi̶̡̹͈͎̳̞͙͖̾̂̀͑̀͆̑̓̽̉͐͘͘ͅǹ̷̨͍̮̥̹̘͙̗̻̬̬̜̥̮̃̒̈́̽͗̿̍̄̂̏͆͠͝ǧ̷̡̟̲̹̩̱͉̮̭͇͚̮̖̟̽̓͊̔̓̕ s̴̹̀̎̇͗̍͗̾̋̏̈͐͒̕͠͠ͅi̶̡̹͈͎̳̞͙͖̾̂̀͑̀͆̑̓̽̉͐͘͘ͅǧ̷̡̟̲̹̩̱͉̮̭͇͚̮̖̟̽̓͊̔̓̕ǹ̷̨͍̮̥̹̘͙̗̻̬̬̜̥̮̃̒̈́̽͗̿̍̄̂̏͆͠͝ǎ̴̯̀͠l̶̬̞͎̖͉̹̝͕̝͖̣̉͆ y̶͔͗ŏ̸̡̼̺̫̥̻͈̞̍͆̏̓́͜͝ͅu̷̬̩̰̫͕̘͎̔́̃̄̍͋̓ ǹ̷̨͍̮̥̹̘͙̗̻̬̬̜̥̮̃̒̈́̽͗̿̍̄̂̏͆͠͝ë̸͓̮͉͈͇͍̖͎̩̞͈́́́̋̇̾͋̈́̾͆͑͘͘͜͠͝ë̸͓̮͉͈͇͍̖͎̩̞͈́́́̋̇̾͋̈́̾͆͑͘͘͜͠͝d̶̡̲̗̼̮̤̤̳̲͖͓͍͔͓̓̎̽́̽̏̐͂̆͆͘͘͘ t̸̫̫̤͕̳̻̰̣̭́̌̉͝ͅŏ̸̡̼̺̫̥̻͈̞̍͆̏̓́͜͝ͅ c̵̛̥͊l̶̬̞͎̖͉̹̝͕̝͖̣̉͆ë̸͓̮͉͈͇͍̖͎̩̞͈́́́̋̇̾͋̈́̾͆͑͘͘͜͠͝ǎ̴̯̀͠r̵̡͕͈͚͍͍̼͕̍̀̈́̽̎̍͗̍́̏̚͜͠ t̸̫̫̤͕̳̻̰̣̭́̌̉͝ͅḥ̸̨̧̗̮̖̽̂̓̀̍̋͋́̅̃͘͜͝i̶̡̹͈͎̳̞͙͖̾̂̀͑̀͆̑̓̽̉͐͘͘ͅs̴̹̀̎̇͗̍͗̾̋̏̈͐͒̕͠͠ͅ ǎ̴̯̀͠r̵̡͕͈͚͍͍̼͕̍̀̈́̽̎̍͗̍́̏̚͜͠ë̸͓̮͉͈͇͍̖͎̩̞͈́́́̋̇̾͋̈́̾͆͑͘͘͜͠͝ǎ̴̯̀͠", DialogLayout.Bottom)
        game.showLongText("You'll need to de-fea-t the-.....m fa-st....!!!", DialogLayout.Bottom)
        if (Bossalive == true) {
            music.play(music.createSong(hex`005a000408020300001c00010a006400f4016400000400000000000000000000000000050000040e0004000800091d1e2022242527292a04001c00100500640000041e000004000000000000000000000000000a040004540008000c00091d1e2022242527292a0c001000091d1e2022242527292a10001400091d1e2022242527292a20002400091d1e2022242527292a24002800091d1e2022242527292a28002c00091d1e2022242527292a06001c00010a006400f4016400000400000000000000000000000000000000021c0004000800091d1e2022242527292a1c002000091d1e2022242527292a`), music.PlaybackMode.LoopingInBackground)
        } else if (Bossalive == false) {
            music.play(music.createSong(hex`0078000408040200001c00010a006400f401640000040000000000000000000000000005000004a10000000400011e04000800012208000c00021d270c001000012410001400012714001800011d18001c00012a1c00200002242a20002400021d2424002800011d28002c0001273000340002202a38003c00021d293c004000012444004800021d2548004c0001204c00500001275400580002202958005c00021b246000640002242a64006800012068006c00021d296c00700001247400780001207c00800002222906001c00010a006400f40164000004000000000000000000000000000000000279001400180001201c002000012724002800012a28002c0001202c003000012a30003400011b3400380002192440004400021e2948004c00012a4c005000011950005400031b202554005800012c5c00600002202760006400011d68006c00012470007400021b2974007800012578007c0001297c008000021d2c`), music.PlaybackMode.LoopingInBackground)
        }
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.fire, 500)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    scene.cameraShake(4, 500)
})
sprites.onOverlap(SpriteKind.allyprojectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.UntilDone)
    info.changeScoreBy(1)
    enemy_alive = false
})
function burst_attack () {
    for (let index = 0; index <= 3; index++) {
        if (index > 0) {
            x = index * 10
            Bossprojectile = sprites.createProjectileFromSprite(img`
                . 2 2 2 2 2 . 
                2 3 2 3 3 3 2 
                2 3 3 1 1 3 2 
                2 3 1 1 3 3 2 
                2 3 1 1 1 3 2 
                2 3 3 3 3 2 2 
                . 2 2 2 2 2 . 
                `, Boss_1, x, 60 - x)
            Bossprojectile = sprites.createProjectileFromSprite(img`
                . 2 2 2 2 2 . 
                2 3 2 3 3 3 2 
                2 3 3 1 1 3 2 
                2 3 1 1 3 3 2 
                2 3 1 1 1 3 2 
                2 3 3 3 3 2 2 
                . 2 2 2 2 2 . 
                `, Boss_1, x * -1, 60 - x)
        }
        for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
            value.setKind(SpriteKind.enemyprojectile)
        }
    }
}
sprites.onOverlap(SpriteKind.enemyprojectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(sprite, effects.disintegrate, 500)
    scene.cameraShake(8, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.button, function (sprite, otherSprite) {
    if (otherSprite == Play && controller.A.isPressed()) {
        Level = 1
        Level_control()
    }
    if (otherSprite == Help && controller.A.isPressed()) {
        Level = 2
        Level_control()
    }
})
sprites.onOverlap(SpriteKind.allyprojectile, SpriteKind.Boss, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    Bosshealth.value += -5
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Boss, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let angle = 0
let waveDirection = false
let Boss_1: Sprite = null
let Bossprojectile: Sprite = null
let x = 0
let Help_buttons: miniMenu.MenuSprite = null
let cursor: Sprite = null
let Play: Sprite = null
let Help: Sprite = null
let myMenu: miniMenu.MenuSprite = null
let Bossalive = false
let Bosshealth: StatusBarSprite = null
let enemy_alive = false
let Enemies: Sprite = null
let Spaceship: Sprite = null
let Spaceship_Projectile: Sprite = null
let LevelSelect = 0
let Level = 0
info.setLife(5)
info.setScore(0)
Level = 0
Level_control()
if (info.score() == 30) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
}
game.showLongText("Welcome to Galactic Vanguard, Go to Help if you need to know the controls ", DialogLayout.Full)
game.showLongText("A or Z or Space to shoot projectile", DialogLayout.Bottom)
game.showLongText("kill the enemies and get to score to win and yeh enjoy i guess", DialogLayout.Bottom)
game.onUpdate(function () {
    if (Bossalive) {
        Boss_1.y = Math.constrain(Boss_1.y, 0, 40)
    }
})
game.onUpdateInterval(5000, function () {
    if (Bossalive == true) {
        burst_attack()
    }
})
game.onUpdateInterval(2000, function () {
    if (LevelSelect == 3) {
        if (Bossalive == false) {
            if (info.score() != 0 && info.score() % 10 == 0) {
                game.showLongText("OH NO, THE COMMANDER IS HERE", DialogLayout.Bottom)
                Bossalive = true
                Boss_1 = sprites.createProjectileFromSide(img`
                    ...........f5555555f...............
                    ...........fff555fff...............
                    .......fffff5555555ffffff..........
                    ......ff88ffff555ffff888ff.........
                    .....ff8888f5555555f88888ff........
                    ....ff88aa8fff555fff88aa88ff.......
                    ....f88aaaff5555555ff8aaa88f.......
                    ...ff8aaaa8f5555555f8aaaaa8ff......
                    ..f4f8aaaa8f5555555f8aaaaa8f4f.....
                    .f44f8aaaafff55555fffaaaaa8f44f....
                    f445f8aaa888fffffff888aaaa8f544f...
                    4455f8aa88fff22222fff88aaa8f5544f..
                    5555f8a88ff222222222ff88aa8f55544f.
                    5555f8a8f22f2222222f22f8aa8f555544f
                    5555f8af2222f22222f2222faa88555554f
                    5555f8aff22f2f222f2f22ffaa88555555f
                    5555ffafffffffffffffffffaaff555554f
                    5555f8faaaaaaaaaaaaaaaaaaaff555544f
                    5555f8afaaaaaaaaaaaaaaaaaf8f55544f.
                    4455f8aafaaaaaaaaaaaaaaafa8f5544f..
                    f445f8aaaaaaaaaaaaaaaaaaaa8f544f...
                    .f44f8aaaafffffffffffffaaa8f44f....
                    ..f4f88aaaf4f4f4f4ff2ffaaa8f4f.....
                    ...fff88aaf4f4f4f4f222faa8fff......
                    ....fff88afffffffffffffa8fff.......
                    ......ff88aaaaaaaaaaaaa8ff.........
                    .......ff88aaaaaaaaaa88ff..........
                    ........ff8aa888888aa8ff...........
                    .........f8a8ffffff8a8f............
                    .........f88ff....ff88f............
                    .........f88f......f88f............
                    .........ffff......ffff............
                    ...........88......88..............
                    ............88....88...............
                    .............88..88................
                    ..............2222.................
                    .............231132................
                    .............213312................
                    .............213332................
                    .............231112................
                    ..............2222.................
                    ...................................
                    `, 0, 20)
                Boss_1.setPosition(80, 0)
                Boss_1.setKind(SpriteKind.Boss)
                Bosshealth = statusbars.create(50, 4, StatusBarKind.EnemyHealth)
                Bosshealth.attachToSprite(Boss_1, 5, 1)
            } else {
                enemies()
            }
        }
    }
})
game.onUpdateInterval(2000, function () {
    if (LevelSelect == 4) {
        if (Bossalive == false) {
            if (info.score() != 0 && info.score() % 10 == 0) {
                game.showLongText("Here his de-...coy *cuts*", DialogLayout.Bottom)
                Bossalive = true
                Boss_1 = sprites.createProjectileFromSide(img`
                    ...........f5555555f...............
                    ...........fff555fff...............
                    .......fffff5555555ffffff..........
                    ......ff88ffff555ffff888ff.........
                    .....ff8888f5555555f88888ff........
                    ....ff88aa8fff555fff88aa88ff.......
                    ....f88aaaff5555555ff8aaa88f.......
                    ...ff8aaaa8f5555555f8aaaaa8ff......
                    ..f4f8aaaa8f5555555f8aaaaa8f4f.....
                    .f44f8aaaafff55555fffaaaaa8f44f....
                    f445f8aaa888fffffff888aaaa8f544f...
                    4455f8aa88fff22222fff88aaa8f5544f..
                    5555f8a88ff222222222ff88aa8f55544f.
                    5555f8a8f22f2222222f22f8aa8f555544f
                    5555f8af2222f22222f2222faa88555554f
                    5555f8aff22f2f222f2f22ffaa88555555f
                    5555ffafffffffffffffffffaaff555554f
                    5555f8faaaaaaaaaaaaaaaaaaaff555544f
                    5555f8afaaaaaaaaaaaaaaaaaf8f55544f.
                    4455f8aafaaaaaaaaaaaaaaafa8f5544f..
                    f445f8aaaaaaaaaaaaaaaaaaaa8f544f...
                    .f44f8aaaafffffffffffffaaa8f44f....
                    ..f4f88aaaf4f4f4f4ff2ffaaa8f4f.....
                    ...fff88aaf4f4f4f4f222faa8fff......
                    ....fff88afffffffffffffa8fff.......
                    ......ff88aaaaaaaaaaaaa8ff.........
                    .......ff88aaaaaaaaaa88ff..........
                    ........ff8aa888888aa8ff...........
                    .........f8a8ffffff8a8f............
                    .........f88ff....ff88f............
                    .........f88f......f88f............
                    .........ffff......ffff............
                    ...........88......88..............
                    ............88....88...............
                    .............88..88................
                    ..............2222.................
                    .............231132................
                    .............213312................
                    .............213332................
                    .............231112................
                    ..............2222.................
                    ...................................
                    `, 0, 20)
                Boss_1.setPosition(80, 0)
                Boss_1.setKind(SpriteKind.Boss)
                Bosshealth = statusbars.create(50, 4, StatusBarKind.EnemyHealth)
                Bosshealth.attachToSprite(Boss_1, 5, 1)
            } else {
                enemies()
            }
        }
    }
})
forever(function () {
    while (Bossalive == true) {
        pause(2000)
        burst_attack()
        pause(2000)
        waveDirection = true
        angle = 50
        while (waveDirection == true) {
            if (Bossalive == true) {
                Bossprojectile = sprites.createProjectileFromSprite(img`
                    . 2 2 2 2 2 . 
                    2 3 2 3 3 3 2 
                    2 3 3 1 1 3 2 
                    2 3 1 1 3 3 2 
                    2 3 1 1 1 3 2 
                    2 3 3 3 3 2 2 
                    . 2 2 2 2 2 . 
                    `, Boss_1, angle, 50)
                Bossprojectile.setKind(SpriteKind.enemyprojectile)
            } else {
                break;
            }
            angle += -10
            pause(300)
            if (angle < -40) {
                waveDirection = false
            }
        }
        pause(2000)
        burst_attack()
        pause(2000)
        while (waveDirection == false) {
            if (Bossalive == true) {
                Bossprojectile = sprites.createProjectileFromSprite(img`
                    . 2 2 2 2 2 . 
                    2 3 2 3 3 3 2 
                    2 3 3 1 1 3 2 
                    2 3 1 1 3 3 2 
                    2 3 1 1 1 3 2 
                    2 3 3 3 3 2 2 
                    . 2 2 2 2 2 . 
                    `, Boss_1, angle, 50)
                Bossprojectile.setKind(SpriteKind.enemyprojectile)
            } else {
                break;
            }
            angle += 10
            pause(300)
            if (angle > 40) {
                waveDirection = true
            }
        }
        pause(2000)
        burst_attack()
        pause(2000)
    }
})
game.onUpdateInterval(500, function () {
    if (Bossalive == false) {
        enemies()
    }
})
