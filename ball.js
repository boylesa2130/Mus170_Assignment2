function Ball (x, y, piano) {
    this.x = x;
    this.y = y;
    this.piano = piano;
    
    this.display = function () {
        imageMode(CENTER);
        image(piano, this.x, this.y, 100, 100);
    }

    this.update = function () {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);
    }
 }