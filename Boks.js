class Boks {
    constructor(x, y, ord) {
        this.x = x;
        this.y = y;
        this.w = 50;
        this.h = 30;
        this.vy = 0;
        this.vx = 0;
        this.ord = ord;
    }

    tegn(ctx) {
        ctx.beginPath();
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    fall() {
        this.y += this.vy;
        this.vy = 2;
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

}