

var limit=70, // Max number of starts
container=document.getElementById('star');
loop={
	//initilizing
	start:function(){
		for (var i=0; i <= limit; i++) {
			var star=this.newStar();
			star.style.top=this.rand()*100+"%";
			star.style.left=this.rand()*100+"%";
			star.style.webkitAnimationDelay=this.rand()+"s";
			star.style.mozAnimationDelay=this.rand()+"s";
			container.appendChild(star);
		};
	},
	//to get random number
	rand:function(){
		return Math.random();
	},
	//createing html dom for star
	newStar:function(){
		var d = document.createElement('div');
		d.innerHTML = '<figure class="star"><figure class="star-top"></figure><figure class="star-bottom"></figure></figure>';
 		return d.firstChild;
	}
};
loop.start();




