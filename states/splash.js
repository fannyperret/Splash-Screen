var splash = function() {};

splash.prototype = {

  loadScripts: function() {

  },

  loadBgm: function() {

  },

  loadImg: function() {

  },

  loadFonts: function() {

  },

  preload: function() {

    var myLogo, loadingBar, status;
    game.add.sprite(0, 0, 'forest');
    myLogo = game.add.sprite(game.world.centerX-120, 100, 'logo-cat');
    myLogo.scale.setTo(0.5);

    loadingBar = game.add.sprite(game.world.centerX-(387/2), 400, 'loading');

    status = game.add.text(game.world.centerX, 380, 'Loading...', {fill: 'white'});
    this.load.setPreloadSprite(loadingBar);

    this.loadScripts();
    this.loadImg();
    this.loadFonts();
    this.loadBgm();

  },

  var loadingBar = game.add.sprite(game.world.centerX, 400, "loading");
  this.load.setPreloadSprite(loadingBar);

}
