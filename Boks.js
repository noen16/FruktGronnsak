class Boks {
    constructor(x, y, ord) {
        this.color = "black";
        this.x = x;
        this.y = y;
        this.w = 50;
        this.h = 30;
        this.vy = 0;
        this.vx = 0;
        this.ord = ord;
    }

    tegn(ctx, ord) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.font = "32px serif";
        ctx.fillText(ord, this.x, this.y);
    }

    fall() {
        this.y += this.vy;
        this.vy = 2;
            if (this.y > 375 )
            this.y = 30;
    }
    



    flytt(Knapp){

        switch (Knapp) {
            case 37:
                this.x -= 10;
                break;

            case 39:
                this.x += 10;
                break;


        }
    }
    plasser(x,y){
        this.x = x;
        this.y = y;
    }
}