class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability
        var part_list = [];
        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_darkE.png");
        my.sprite.legRight = this.add.sprite(this.bodyX + 85, this.bodyY + 140, "monsterParts", "leg_redC.png");
        my.sprite.legLeft = this.add.sprite(this.bodyX - 85, this.bodyY + 140, "monsterParts", "leg_redC.png");
        my.sprite.legLeft.flipX = true;

        
        my.sprite.armRight = this.add.sprite(this.bodyX + 85, this.bodyY + 20, "monsterParts", "arm_whiteC.png");
        my.sprite.armLeft = this.add.sprite(this.bodyX - 85, this.bodyY + 20, "monsterParts", "arm_whiteC.png");
        my.sprite.armLeft.flipX = true;

        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "eye_psycho_light.png");
        my.sprite.eyetwo = this.add.sprite(this.bodyX, this.bodyY - 80, "monsterParts", "eye_psycho_light.png");

        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY + 90, "monsterParts", "mouthH.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY + 90, "monsterParts", "mouthI.png");
        my.sprite.fangs.visible = false;
        
        my.sprite.hornRight = this.add.sprite(this.bodyX + 60, this.bodyY - 90, "monsterParts", "detail_red_horn_small.png");
        my.sprite.hornLeft = this.add.sprite(this.bodyX - 60, this.bodyY - 90, "monsterParts", "detail_red_horn_small.png");
        my.sprite.hornLeft.flipX = true;

        this.keys = this.input.keyboard.addKeys('A,D,S,F');

        my.parts_array = ["body", "legRight", "legLeft", "armRight", "armLeft", "eye", "eyetwo", "smile", "fangs", "hornLeft", "hornRight "];

        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability


        if (this.keys.A.isDown){
            this.move_left(my);
        }

        if (this.keys.D.isDown){
            this.move_right(my)
        }
        if (this.keys.S.isDown){
            this.swap_smile();
        }

        if (this.keys.F.isDown){
            this.swap_fangs();
        }



       
    }


    swap_smile(){
        this.my.sprite.fangs.visible = false;
        this.my.sprite.smile.visible = true;
    }
    swap_fangs(){
        this.my.sprite.fangs.visible = true;
        this.my.sprite.smile.visible = false;
    }

    move_left(obj){
            for (let i in obj.sprite){
            obj.sprite[i].x -= 2;
            }       
          }
    

    move_right(obj){
        for (let i in obj.sprite){
            obj.sprite[i].x += 2;
            }       
    }


}





