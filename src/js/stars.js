var limit = 30, loop = {
    start: function (a) {
        for (var b = 0; limit > b; b++) {
            var c = this.newStar();
            c.style.top = 100 * this.rand() + "%", c.style.left = 100 * this.rand() + "%", c.style.webkitAnimationDelay = this.rand() + "s", c.style.mozAnimationDelay = this.rand() + "s", a && a.appendChild(c)
        }
    }, rand: function () {
        return Math.random()
    }, newStar: function () {
        var a = document.createElement("div");
        return a.innerHTML = '<figure class="star"><figure class="star-top"></figure><figure class="star-bottom"></figure></figure>', a.firstChild
    }
};
stars = document.getElementsByClassName("stars");
for (var i = 0; 100 > i; i++)loop.start(stars[i]);