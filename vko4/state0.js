var demo = {};
var centerX = 1500 / 2;
var centerY = 1000 / 2;
var dragon;
var speed = 8;
demo.state0 = function(){};
demo.state0.prototype = {
    preload: function (){
        game.load.spritesheet('dragon', 'assets/spritesheets/000Sheet.png', 60,60)
        game.load.image('landscape', 'assets/backgrounds/landscape.png')
    },
    
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#80ff80';
        console.log('state0');
        addChangeStateEventListeners();
        game.world.setBounds(0,0,1600,1000)
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        var landscape = game.add.sprite(0,0,'landscape');
        
        dragon = game.add.sprite(centerX, centerY, 'dragon');
        dragon.anchor.setTo(0.5, 0.5);
        dragon.scale.setTo(2,2, 2,2);
        
        game.physics.enable(dragon);
        dragon.body.collideWorldBounds = true;
        dragon.animations.add('walk', [0, 1, 2, 3, 4]);
        
        game.camera.follow(dragon);
        game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600, 1300);
        
    },
    
    update: function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            dragon.scale.setTo(2,2, 2,2);
            dragon.x += speed;
            dragon.animations.play('walk', 14, true);
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            dragon.scale.setTo(-2,2, 2,2);
            dragon.x -= speed;
            dragon.animations.play('walk', 14, true);
        }
        else {
            //dragon.animations.stop{'walk'};
            dragon.frame = 0;
        }
        if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            dragon.y -= speed;
            if (dragon.y < 316){
                dragon.y = 316;
            }
        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            dragon.y += speed;
        }
    },
    
};

function changeState(i, stateNum) {
    console.log('state' + stateNum);
    game.state.start('state' + stateNum);
}

function addKeyCallback(key, fn, args){
    
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeStateEventListeners() {
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
        addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
        addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
        addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
        addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
        addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
        addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
        addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
        addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
        addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
}


