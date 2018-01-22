
demo.state7 = function(){};
demo.state7.prototype = {
    preload: function (){},
    create: function(){
        game.stage.backgroundColor = '#99ff33';
        console.log('state7');
        
        addChangeStateEventListeners();
    },
    update: function(){},
    
};



