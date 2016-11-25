class Kurv {
    constructor(color) {
        this.color = color;
        this.w = 350 / 2;
        this.h = 100;
        this.x = 600;
        this.y = 0;
    }

    tegn(ctx) {
        let style = ctx.fillStyle;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = style;
    }

    plasser(x, y) {
        this.x = x;
        this.y = y;
    }
}