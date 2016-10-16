
var offset = 10;
var amount = 3;
var blockSize = 100;



var r = 0;
var g = 0;
var b = 0;

var block_id = 0;
var grid = [];


//var myVar = setInterval(myTimer, 1000);

//function myTimer(){

	for(i = 0; i< amount; i++){


		

		for(j = 0; j< amount; j++){
			console.log(block_id);

			r = Math.floor(Math.random() * 256);
			g = Math.floor(Math.random() * 256);
			b = Math.floor(Math.random() * 256);




			var div = document.createElement('div');
			div.style.boxSizing = 'border-box';
			div.style.border= '1px solid black';
			div.style.position = 'absolute';
			div.style.display = 'inline-block';
			div.style.padding = '0';
			div.style.margin  = '0';
			div.style.left = (i*blockSize) + offset;
			div.style.top = (j*blockSize) + offset;

			div.style.width= (blockSize).toString()+'px';
			div.style.height= (blockSize).toString()+'px';
			div.style.background= 'rgb('+ (r).toString() +','+ (g).toString() +','+ (b).toString() +')';
			

			div.addEventListener('click', boom);

			div.setAttribute('class', 'block');
			div.block_id = block_id;

			grid.push(div);

			document.body.appendChild(div);

			block_id++;

		}
	}
//}



function boom(){
	grid[this.block_id].style.background= '#fff';

	//if(grid[this.block_id].style.background == ){
	//	console.log('yup');
	//}
	console.log(grid[this.block_id].style.background);
}