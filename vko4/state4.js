var i = 0, u = {val: 0};

demo.state4 = function(){};
demo.state4.prototype = {
    preload: function (){},
    create: function(){
        game.stage.backgroundColor = '#80ff80';
        addChangeStateEventListeners();
        
        a1 = game.add.sprite(100,100, 'dragon');
        a2 = game.add.sprite(350,100, 'dragon');
        a3 = game.add.sprite(650,100, 'dragon');
        a4 = game.add.sprite(950,100, 'dragon');
        a5 = game.add.sprite(1250,100, 'dragon');
        
        game.add.tween(a1).to({y: '+400'}, 2000, 'Quad.easeOut', true);
        i = game.add.tween(a2).to({x: 100, y: 0}, 1000, 'Elastic.easeOut');
        game.add.tween(a3).from({y: 1000}, 1500, 'Circ.easeOut', true);
        game.add.tween(a4.anchor).to({x: 1}, 1000, 'Linear', true, 1000, false, true).loop(true);
        game.add.tween(a5).to({alpha: 0}, 1000, 'Bounce', true);
    },
    update: function(){},
    
};



