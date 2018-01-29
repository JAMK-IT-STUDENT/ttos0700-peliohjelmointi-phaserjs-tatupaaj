var accel = 400, platform, platformGroup;

demo.state5 = function(){};
demo.state5.prototype = {
    preload: function (){
        game.load.image('platform', 'assets/sprites/platform.png')
    },
    create: function(){
        game.stage.backgroundColor = '#cc66ff';
        addChangeStateEventListeners();
        
        dragon = game.add.sprite(centerX, 500, 'dragon');
        platform = game.add.sprite(1300, 500, 'platform');
        platformGroup = game.add.group();
        platformGroup.create(650, 400, 'platform');
        platformGroup.create(1300, 400, 'platform');
        
        game.physics.enable([dragon, platform, platformGroup]);
        
        dragon.body.gravity.y = 500;
        dragon.body.bounce.y = 0.3;
        dragon.body.drag.x = 400;
        dragon.body.collideWorldBounds = true;
        
        platform.body.innovable = true;
        
        platformGroup.setAll('body.innovable', true);
    },
    update: function(){
        game.physics.arcade.collide(dragon, [platform, platformGroup]);
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            dragon.body.acceleration.x = -accel;
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            dragon.body.acceleration.x = accel;
        } else {
            dragon.body.acceleration.x = 0;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            dragon.body.velocity.y = -300;
        }
    },
    
};



