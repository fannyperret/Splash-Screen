var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game'), main = function () {

};

main.prototype = {

  preload: function () {

    game.load.image('forest', './assets/img/forest.jpg');
    game.load.image('loading', './assets/img/loading.jpg');
    game.load.image('logo', './assets/img/logo-cat.png');
    game.load.script('splash', 'splash.js');

  },

  create: function () {

    game.state.add('splash, splash');
    game.state.start('splash');

  },

};

game.state.add('main', main);
game.state.start('main');
