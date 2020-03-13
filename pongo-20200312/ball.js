class Ball{
	constructor (x, y, d, c){
		this.x = x
		this.y = y
		this.d = d
		this.c = c
	}
	draw (){
		push()
		noStroke()
		fill(this.c)
		ellipse(this.x, this.y, this.d, this.d)
		pop()
	}
	move (){
		let rnd = random(1, 4)
		while(this.x <= (windowWidth - this.d) || this.x >= this.d || this.y <= (windowHeigth - this.d) || this.y >= this.d){
			switch (floor(rnd)) {
			case 1 : 
				this.x-=5;
				break
			case 2 :
				this.x+=5
				break
			case 3 :
				this.y-=5
				break
			case 4 :
				this.y+=5
				break
			}
		}
	}
}
