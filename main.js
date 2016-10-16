
var offset = 10;
var amount = 3;
var blockSize = 100;



var r = 0;
var g = 0;
var b = 0;


var myVar = setInterval(myTimer, 500);

function myTimer(){

	for(i = 0; i< amount; i++){


		

		for(j = 0; j< amount; j++){


			r = Math.floor(Math.random() * 256);
			g = Math.floor(Math.random() * 256);
			b = Math.floor(Math.random() * 256);




			var div = document.createElement('div');
			div.style.boxSizing = 'border-box';
			div.style.position = 'absolute';
			div.style.display = 'inline-block';
			div.style.float = 'left';

			div.style.padding = '0px';
			div.style.margin  = '0';
			div.setAttribute('class', 'myClass');
			div.style.left = (i*blockSize) + offset;
			div.style.top = (j*blockSize) + offset;

			div.style.width= (blockSize).toString()+'px';
			div.style.height= (blockSize).toString()+'px';
			div.style.background= 'rgb('+ (r).toString() +','+ (g).toString() +','+ (b).toString() +')';

			document.body.appendChild(div);
		}
		div.clear = 'left';
	}
}