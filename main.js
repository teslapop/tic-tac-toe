
var offset     = 10;
var amount     = 3;
var blockSize  = 100;



var block_id   = 0;
var grid       = [];

var turn       = 0;
var winner     = 0;


for(i = 0; i< amount; i++){
	for(j = 0; j< amount; j++){

		var div = document.createElement('div');
		div.style.boxSizing = 'border-box';
		div.style.border    = '1px solid black';
		div.style.position  = 'absolute';
		div.style.display   = 'inline-block';


		div.style.left      = (i*blockSize) + offset;
		div.style.top       = (j*blockSize) + offset;

		div.style.width     = (blockSize).toString()+'px';
		div.style.height    = (blockSize).toString()+'px';
		

		div.addEventListener('click', playerMove);

		div.setAttribute('class', 'block');
		div.block_id        = block_id;
		div.state           = 0;

		//div.innerText = block_id;

		grid.push(div);

		document.body.appendChild(div);

		block_id++;

	}
}



function playerMove(){

	if(grid[this.block_id].state == 0 && turn == 0 && winner == 0){
		turn = 1;
		grid[this.block_id].innerText = '.X';
		grid[this.block_id].state = 1;

		check();
		computerMove();


	}


}



function computerMove(){




	check();
	turn = 0;
}





function check(){
	if(Math.abs((grid[0].state + grid[3].state + grid[6].state)) == 3){
		winner = grid[0].state;

	}else if(Math.abs((grid[1].state + grid[4].state + grid[7].state)) == 3){
		winner = grid[1].state;

	}else if(Math.abs((grid[2].state + grid[5].state + grid[8].state)) == 3){
		winner = grid[2].state;

	}else if(Math.abs((grid[0].state + grid[1].state + grid[2].state)) == 3){
		winner = grid[0].state;

	}else if(Math.abs((grid[3].state + grid[4].state + grid[5].state)) == 3){
		winner = grid[3].state;

	}else if(Math.abs((grid[6].state + grid[7].state + grid[8].state)) == 3){
		winner = grid[6].state;

	}else if(Math.abs((grid[0].state + grid[4].state + grid[8].state)) == 3){
		winner = grid[0].state;

	}else if(Math.abs((grid[2].state + grid[4].state + grid[6].state)) == 3){
		winner = grid[2].state;

	}

}



