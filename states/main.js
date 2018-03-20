var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game'), Main = function () {

};

Main.prototype = {

  preload: function () {

    game.load.image('forest', './assets.img/forest.jpg');
    game.load.image('loading', './assets.img/loading.jpg');
    game.load.image('logo', './assets.img/brand-cat.png');
    game.load.script('splash', 'splash.js');

  },

  create: function () {

    game.state.add('splash, splash');
    game.state.start('splash');

  },

};

game.state.add('Main', Main);
game.state.start('Main');
