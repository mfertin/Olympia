var game = new Phaser.Game(1000, 625, Phaser.AUTO, 'test', null, true, false);

var BasicGame = function (game) { };

BasicGame.Boot = function (game) { };

var isoGroup, cursorPos, cursor;

BasicGame.Boot.prototype =
{
    preload: function () {
        game.load.image('stone', 'images/stone-reduce.png');
        game.load.image('grass', 'images/grass-reduce.png');
        game.load.image('sand', 'images/sand-reduce.png');
        game.load.image('water', 'images/water-reduce.png');

        game.time.advancedTiming = true;

        // Add and enable the plug-in.
        game.plugins.add(new Phaser.Plugin.Isometric(game));

        // This is used to set a game canvas-based offset for the 0, 0, 0 isometric coordinate - by default
        // this point would be at screen coordinates 0, 0 (top left) which is usually undesirable.
        game.iso.anchor.setTo(0.5, 0.2);


    },
    create: function () {

        // Create a group for our tiles.
        isoGroup = game.add.group();

        // Let's make a load of tiles on a grid.
        this.spawnTiles();

        // Provide a 3D position for the cursor
        cursorPos = new Phaser.Plugin.Isometric.Point3();
    },
    update: function () {
        // Update the cursor position.
        // It's important to understand that screen-to-isometric projection means you have to specify a z position manually, as this cannot be easily
        // determined from the 2D pointer position without extra trickery. By default, the z position is 0 if not set.
        game.iso.unproject(game.input.activePointer.position, cursorPos);

        // Loop through all tiles and test to see if the 3D position from above intersects with the automatically generated IsoSprite tile bounds.
        isoGroup.forEach(function (tile) {
            var inBounds = tile.isoBounds.containsXY(cursorPos.x, cursorPos.y);
            // If it does, do a little animation and tint change.
            if (!tile.selected && inBounds) {
                tile.selected = true;
                tile.tint = 0x86bfda;
                game.add.tween(tile).to({ isoZ: 4 }, 200, Phaser.Easing.Quadratic.InOut, true);
            }
            // If not, revert back to how it was.
            else if (tile.selected && !inBounds) {
                tile.selected = false;
                tile.tint = 0xffffff;
                game.add.tween(tile).to({ isoZ: 0 }, 200, Phaser.Easing.Quadratic.InOut, true);
            }
        });
    },
    render: function () {
        game.debug.text("Move your mouse around!", 2, 36, "#ffffff");
        game.debug.text(game.time.fps || '--', 2, 14, "#a7aebe");
    },
    spawnTiles: function () {
        var tile;
        //ligne 1 ( yy = 0 )
        for (var xx = 0; xx < 292.5; xx += 45/2){
          tile = game.add.isoSprite(xx, 0, 0, 'stone', 0, isoGroup);
          tile.anchor.set(0.5, 0);
        }
        for (var xx = 292.5; xx < 405; xx += 45/2){
          tile = game.add.isoSprite(xx, 0, 0, 'grass', 0, isoGroup);
          tile.anchor.set(0.5, 0);
        }
        for (var xx = 405; xx < 495; xx += 45/2){
          tile = game.add.isoSprite(xx, 0, 0, 'stone', 0, isoGroup);
          tile.anchor.set(0.5, 0);
        }
        //ligne 2 ( yy = 45/2 )
        for (var xx = 0; xx < 292.5; xx += 45/2){
          tile = game.add.isoSprite(xx, 45/2, 0, 'stone', 0, isoGroup);
          tile.anchor.set(0.5, 0);
        }
        for (var xx = 292.5; xx < 427.5; xx += 45/2){
          tile = game.add.isoSprite(xx, 45/2, 0, 'grass', 0, isoGroup);
          tile.anchor.set(0.5, 0);
        }
        for (var xx = 427.5; xx < 495; xx += 45/2){
          tile = game.add.isoSprite(xx, 45/2, 0, 'stone', 0, isoGroup);
          tile.anchor.set(0.5, 0);
        }
        //ligne 3 ( yy = 45 )
        for (var xx = 0; xx < 67.5; xx += 45/2){
          tile = game.add.isoSprite(xx, 45, 0, 'stone', 0, isoGroup);
          tile.anchor.set(0.5, 0);
        }
        for (var xx = 67.5; xx < 135; xx += 45/2){
          tile = game.add.isoSprite(xx, 45, 0, 'grass', 0, isoGroup);
          tile.anchor.set(0.5, 0);
        }
        for (var xx = 135; xx < 292.5; xx += 45/2){
          tile = game.add.isoSprite(xx, 45, 0, 'stone', 0, isoGroup);
          tile.anchor.set(0.5, 0);
        }
        for (var xx = 292.5; xx < 427.5; xx += 45/2){
          tile = game.add.isoSprite(xx, 45, 0, 'grass', 0, isoGroup);
          tile.anchor.set(0.5, 0);
        }
        for (var xx = 427.5; xx < 495; xx += 45/2){
          tile = game.add.isoSprite(xx, 45, 0, 'stone', 0, isoGroup);
          tile.anchor.set(0.5, 0);
        }
    }
};

game.state.add('Boot', BasicGame.Boot);
game.state.start('Boot');
