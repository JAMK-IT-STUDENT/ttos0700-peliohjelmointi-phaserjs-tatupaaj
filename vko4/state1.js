
demo.state1 = function(){};

var cursors, vel = 500, rocks, grass;

demo.state1.prototype = {
    preload: function (){
        game.load.tilemap('field', 'assets/tilemaps/tileset.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('grassTiles', 'assets/tilemaps/grassfiles.png')
        game.load.image('rockTiles', 'assets/tilemaps/rockfiles.png')
        game.load.image('dragon', 'assets/sprites/000.png')
    },
    create: function(){
        game.physics.startSystem(Phaser.Physics.ARCDE)
        game.stage.backgroundColor = '#DDDDDD';
        addChangeStateEventListeners();
        
        var map = game.add.tilemap('field');
        map.addTilesetImage('grassTiles');
        map.addTilesetImage('rockTiles');
        
        grass = map.createLayer('grass');
        rocks = map.createLayer('rocks');
        
        map.setCollisionBetween(1, 9, true, 'rocks');
        map.setCollision(11, true, 'grass');
        
        dragon = game.add.sprite(200,200,'dragon');
        dragon.scale.setTo(2.3, 2.3);
        game.physics.enable(dragon);
        
        cursors = game.input.keyboard.createCursorKeys();
        
    },
    update: function(){
        game.physics.arcade.collide(dragon, rocks, function(){console.log('hitting rocks: ');});
        game.physics.arcade.collide(dragon, grass, function(){console.log('hitting grass: ');});
        
        if(cursors.up.isDown){
            dragon.body.velocity.y = -vel;
        }
        else if(cursors.down.isDown){
            dragon.body.velocity.y = vel;
        }
        else{
            dragon.body.velocity.y = 0;
        }
        if(cursors.left.isDown){
            dragon.body.velocity.x = -vel;
        }
        else if(cursors.right.isDown){
            dragon.body.velocity.x = vel;
        }
        else{
            dragon.body.velocity.x = 0;
        }
    },
    
};








