var paulify_count = 0;
paulify_add = function() {
	paulify_count += 1;
	var paulify_url = 'http://www.plaidirish.com/';
	var div = document.createElement('div');
	div.style.position = 'fixed';
	
	var numType = 'px';
	var heightRandom = Math.random()*.75;
	var windowHeight = 768;
	var windowWidth = 1024;
	var height = 0;
	var width = 0;
	var de = document.documentElement;
	if (typeof(window.innerHeight) == 'number') {
		windowHeight = window.innerHeight;
		windowWidth = window.innerWidth;
	} else if(de && de.clientHeight) {
		windowHeight = de.clientHeight;
		windowWidth = de.clientWidth;
	} else {
		numType = '%';
		height = Math.round( height*100 )+'%';
	}
	
	div.onclick = paulify_add;
	div.style.zIndex = 10;
	div.style.outline = 0;
	
	if( paulify_count==15 ) {
		div.style.top = Math.max( 0, Math.round( (windowHeight-530)/2 ) )  + 'px';
		div.style.left = Math.round( (windowWidth-530)/2 ) + 'px';
		div.style.zIndex = 1000;
	} else {
		if( numType=='px' ) div.style.top = Math.round( windowHeight*heightRandom ) + numType;
		else div.style.top = height;
		div.style.left = Math.round( Math.random()*90 ) + '%';
	}
	
	var img = document.createElement('img');
	var currentTime = new Date();
	var submitTime = currentTime.getTime();
	if( paulify_count==15 ) submitTime = 0;
	img.setAttribute('src',paulify_url+'pualify.php?r=' + submitTime + '&url='+document.location.href);
	var ease = "all .1s linear";
	//div.style['-webkit-transition'] = ease;
	//div.style.webkitTransition = ease;
	div.style.WebkitTransition = ease;
	div.style.WebkitTransform = "rotate(1deg) scale(1.01,1.01)";
	//div.style.MozTransition = "all .1s linear";
	div.style.transition = "all .1s linear";
	div.onmouseover = function() {
		var size = 1+Math.round(Math.random()*10)/100;
		var angle = Math.round(Math.random()*20-10);
		var result = "rotate("+angle+"deg) scale("+size+","+size+")";
		this.style.transform = result;
		//this.style['-webkit-transform'] = result;
		//this.style.webkitTransform = result;
		this.style.WebkitTransform = result;
		//this.style.MozTransform = result;
		//alert(this + ' | ' + result);
	}
	div.onmouseout = function() {
		var size = .9+Math.round(Math.random()*10)/100;
		var angle = Math.round(Math.random()*6-3);
		var result = "rotate("+angle+"deg) scale("+size+","+size+")";
		this.style.transform = result;	
		//this.style['-webkit-transform'] = result;
		//this.style.webkitTransform = result;
		this.style.WebkitTransform = result;
		//this.style.MozTransform = result;
	}
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(div);
	div.appendChild(img);	
	
	// Add stylesheet.
	if (paulify_count == 5) {
		var cssExisting = document.getElementById('__paulify_css');
		if (!cssExisting) {
			var head = document.getElementsByTagName("head")[0];
			var css = document.createElement('link');
			css.id = '__paulify_css';
			css.type = 'text/css';
			css.rel = 'stylesheet';
			css.href = 'http://www.paulify.com/css/cornify.css';
			css.media = 'screen';
			head.appendChild(css);
		}
		paulify_replace();
	}	
}

paulify_replace = function() {
	// Replace text.
	var hc = 6, hs, h, k;
	var words = ['Happy','Sparkly','Glittery','Fun','Magical','Lovely','Cute','Charming','Amazing','Wonderful'];
	while(hc >= 1) {
		hs = document.getElementsByTagName('h' + hc);
		for (k = 0; k < hs.length; k++) {
			h = hs[k];
			h.innerHTML = words[Math.floor(Math.random()*words.length)] + ' ' + h.innerHTML;
		}
		hc-=1;
	}
}

/*
 * Adapted from http://www.snaptortoise.com/konami-js/
 */
var paulami = {
	input:"",
	pattern:"38384040373937396665",
	clear:setTimeout('paulami.clear_input()',5000),
	load: function() {
		window.document.onkeydown = function(e) {
			if (paulami.input == cornami.pattern) {
				paulify_add();
				clearTimeout(paulami.clear);
				return;
			}
			else {
				paulami.input += e ? e.keyCode : event.keyCode;
				if (paulami.input == cornami.pattern) cornify_add();
				clearTimeout(paulami.clear);
				paulami.clear = setTimeout("cornami.clear_input()", 5000);
			}
		}
	},
	clear_input: function() {
		paulami.input="";
		clearTimeout(paulami.clear);
	}
}
paulami.load();
