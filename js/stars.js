

var limit=60, // Max number of stars
    loop = {
	//initilizing
	start:function(starDOM) {
		for (var i=0; i < limit; i++) {
			var star=this.newStar();
			star.style.top=this.rand()*100+"%";
			star.style.left=this.rand()*100+"%";
			star.style.webkitAnimationDelay=this.rand()+"s";
			star.style.mozAnimationDelay=this.rand()+"s";
			if (starDOM) {
                            starDOM.appendChild(star);
                        }
                };
	},
	//to get random number
	rand:function() {
		return Math.random();
	},
        
	//creating html for star
	newStar:function() {
		var d = document.createElement('div');
		d.innerHTML = '<figure class="star"><figure class="star-top"></figure><figure class="star-bottom"></figure></figure>';
 		return d.firstChild;
	}
};

stars = document.getElementsByClassName('stars');
for(var i = 0; i < stars.length; i++) {
    loop.start(stars[i]);
}




