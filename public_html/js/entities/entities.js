game.PlayerEntity = me.ObjectEntity.extend({
    init: function (x, y, settings) {
        settings.image = "player1-spritesheet";
        settings.spritewidth = "72";
        settings.spriteheight = "91";
        this.parent (x, y, settings);
        
        this.renderable.addAnimation("idle", [4]);
        this.renderable.setCurrentAnimation("idle");
        
        this.setVelocity(5, 20);
        me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
    },
            
    update: function() {
        if(me.input.isKeyPressed("right")){
            this.vel.x += this.accel.x *me.timer.tick;
        }
        else if(me.input.isKeyPressed("left")) {
            this.vel.x -= this.accel.x * me.timer.tick;
        }
        if(me.input.isKeyPressed("jump")) {
            if(!this.jumping && !this.falling) {
                this.vel.y = -this.maxVel.y * me.timer.tick;
                this.jumping = true;
            }
        }
        else {
            this.vel.x = 0;
        }
        
        this.updateMovement();
        return true;
        
    }
});