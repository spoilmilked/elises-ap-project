// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "testing":
            case "level1":return tiles.createTilemap(hex`18001800020202020402020202020204020202020202020202020202020202020002020202020200020202020202020202020202020202010001010201010100010101010202020202020202020202020302020202020203020202020000000000000000020202020000000000000000000202020000000000000000020202020000000000000000000202020000000000000000020202020000000000000000000202020000000000000000020202020000000000000000000000000000000000000000020202020000000000000000000000000000000000000000000000030000000000000000000202020000000000000000020202020000000000000000000202020000000000000000020202020000000000000000000202020000000000000000020202020202020202020202020202020000000000000000020202020202020202020202020202020000000000000000020202020202020202020202020202020000000000000000020202020202020202020202020202020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
2222.222222.222222222222
2222.222222.222222222222
2222.222222.222222222222
2222222222222222........
2222.........222........
2222.........222........
2222.........222........
2222.........222........
2222.........222........
...2.........222........
2222.........222........
2222.........222........
2222222222222222........
2222222222222222........
2222222222222222........
2222222222222222........
........................
........................
........................
........................
........................
........................
........................
........................
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,myTiles.tile1,myTiles.tile4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "baracade":
            case "tile1":return tile1;
            case "myTile":
            case "tile2":return tile2;
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile3":return tile3;
            case "myTile1":
            case "tile4":return tile4;
            case "baracade0":
            case "tile5":return tile5;
            case "baracade1":
            case "tile6":return tile6;
            case "FLOOR":
            case "tile7":return tile7;
            case "myTile2":
            case "tile8":return tile8;
            case "FLOOR0":
            case "tile9":return tile9;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
