var cannon, cannonBalls, velocity = 1000, nextFire = 0, fireRate = 200, enemy, cannonBall, enemyGroup;

demo.state2 = function(){};
demo.state2.prototype = {
    preload: function (){
        game.load.image('rock', 'assets/sprites/rockTiles.png');
        game.load.image('cannon', 'assets/sprites/cannon.png');
        game.load.image('cannonBall', 'assets/sprites/cannonBall.png');
        
    },
    create: function(){
        game.stage.backgroundColor = '#80ff80';
        addChangeStateEventListeners();
        
        var rock = game.add.sprite(centerX, centerY, 'rock');
        rock.anchor.setTo(0.5);
        rock.scale.setTo(1.5);
        
        cannonBalls = game.add.group();
        cannonBalls.enablebody = true;
        cannonBalls.physicsBodyType = Phaser.Physics.ARCADE;
        cannonBalls.createMultiple(50, 'cannonBall');
        cannonBalls.setAll('checkWorldBounds', true);
        cannonBalls.setAll('outOfBoundsKill', true);
        cannonBalls.setAll('anchor.y', 0.5);
        cannonBalls.setAll('scale.x', 0.85);
        cannonBalls.setAll('scale.y', 0.85);
        
        cannon = game.add.sprite(centerX, centerY, 'cannon');
        cannon.scale.setTo(2.5);
        cannon.anchor.setTo(0,3, 0.5);
        
        enemy = game.add.sprite(100, 200, 'dragon');
        game.physics.enable(enemy);
        
        enemy = game.add.group();
        enemy.enablebody = true;
        enemy.physicsBodyType = Phaser.Physics.ARCADE;
        
        for (var i = 0, i < 3; i++){
            enemyGroup.create(1300, 350 + i + 100, 'dragon');
        }
        
        enemyGroup.setAll('anchor.y', 0.5);
        enemyGroup.setAll('anchor.x', 0.5);
        enemyGroup.setAll('scale.y', 1.5);
        enemyGroup.setAll('scale.x', 1.5);
    },
    update: function(){
        cannon.rotation = game.physics.arcade.angleToPointer(cannon);
        if (game.input.activePointer.isDown) {
            this.fire();
        }
        
        game.physics.arcade.overlap(cannonBalls, enemy, this.hitEnemy);
        game.physics.arcade.overlap(enemyGroup, cannonBalls, this.hitGroup);
    },
    fire: function() {
        if (game.time.now > nextFire){
            nextFire = game.time.now = fireRate;
            console.log('firing');
            var cannonBall = cannonBalls.getFirstDead();
            cannonBall.reset(cannon.x, cannon.y);
        
            game.physics.arcade.moveToPointer(cannonBall, velocity);
            cannonBall.rotation = game.physics.arcade.angleToPointer(cannonBall);
        }
        
    },
    hitEnemy: function() {
        console.log('hit');
        enemy.kill();
        cannonBall.kill();
    },
    hitGroup: function(e) {
        cannonBall.kill();
        e.kill();
    }
    
};



