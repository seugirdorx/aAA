let cores; //cria variável para as cores
let tamanho; //cria variável para os tamanhos

function setup(){
	createCanvas(windowWidth, windowHeight);
	background("#FFFFFF");
	frameRate(5); //aqui define a contagem do loop
	cores = ["#FF6798", "#ffeaf1", "#ffabc6"]; // cria um array para que a variável armazene as cores
	tamanho = [5, 10, 15]; //cria array para guardar os tamanhos
}

function draw() {
	for(i=0; i<14; i++){ // cria um primeiro loop de coluna
		for(j=0;j<14;j++){ // cria um segundo loop de linha
			petalas(100*i, 100*j);
			petalas2(100*i, 100*j);
			florzinha(100*i, 100*j);
			bolinhas(100*i, 100*j);
			bolinha(100*i, 100*j);
			}
		
			if(mouseIsPressed){ //cria uma condição de mudar a cor do padrão apenas quando o mouse tiver pressionado
				cores = ["#9e399e", "#be66be", "#df94df"];
			}else{
				cores = ["#FF6798", "#ffabc6", "#ffeaf1"];
			}
		}
	}

function florzinha (x, y){ //cria a florzinha no centro
	let cor = random(cores); //randoniza as cores
	noStroke();
	push();
	translate(x, y);
	fill(cor);
	ellipse(40, 20, 10, 40);
	ellipse(40, 20, 40, 10);
	rotate(radians(45));
	ellipse(42, -13, 40, 10);
	rotate(radians(90));
	ellipse(-13, -42, 40, 10);
	pop();
}

function bolinhas(x, y){ //cria as bolinhas do meio da flor
	let cor = random(cores);
	noStroke();
	push();
	translate(x, y);
	fill(cor);
	ellipse (32, 20, 5, 5);
	ellipse (40, 12, 5, 5);
	ellipse (48, 20, 5, 5);
	ellipse (40, 28, 5, 5);
	ellipse (40, 20, 5, 5);
	pop();
	
}

function petalas(x, y){ //cria a primeira flor
	let cor = random(cores);
	push();
	translate(x,y);
	noFill();
	stroke(cor);
	strokeWeight(3);
	ellipse (40, 20, 80, 20);
	ellipse (40, 20, 20, 80);
	rotate(radians(45));
	ellipse(42, -13, 80, 20);
	rotate(radians(90));
	ellipse(-13, -42, 80, 20);
	pop();
}

function petalas2(x, y){ //cria a segunda flor
	let cor = random(cores);
	push();
	translate(x,y);
	noFill();
	stroke(cor);
	strokeWeight(3);
	ellipse (40, 20, 60, 10);
	ellipse (40, 20, 10, 60);
	rotate(radians(45));
	ellipse(42, -13, 60, 10);
	rotate(radians(90));
	ellipse(-13, -42, 60, 10);
	pop();
}

function bolinha(x, y){ //cria as bolinhas que mudam de tamanho
	let t = random(tamanho); //randoniza os tamanhos
	let cor = random(cores);
	push();
	translate(x, y);
	fill(cor);
	ellipse (5, -20, t, t);
	ellipse (70, -20, t, t);
	ellipse (5, 60, t, t);
	ellipse (70, 60, t, t);
	pop();
	
}

