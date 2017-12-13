class RetiredForagerBee extends ForagerBee {
  
	constructor() {
 		super();
 		this.age = 40;
 		this.color = 'grey';
 		this.job = 'gamble';
 		this.canFly = false;
	}

};

RetiredForagerBee.prototype.forage = function () {
	return 'I am too old, let me play cards instead';
}

RetiredForagerBee.prototype.gamble = function () {
	this.treasureChest.push('treasure');	
}
