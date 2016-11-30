class Kurv {
    constructor(color) {
        this.color = color;
        this.w = 350 / 2;
        this.h = 100;
        this.x = 600;
        this.y = 200;

    }

    tegn(ctx) {
        let style = ctx.fillStyle;
        ctx.beginPath();
                ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);

    }

    plasser(x, y) {
        this.x = x;
        this.y = y;
    }
}


