const dynamicType = {
	num : 0,
	put : function(n){ this.num = n; },
    change : function(type){
		let tmp;
		if (typeof this.num === 'number' || typeof this.num === 'string')
			tmp = this.num;
		else if (typeof this.num.n === 'undefined')
			tmp = this.num[0];
		else
			tmp = this.num['n'];
		if (type === "String")
			this.num = String(tmp);
		else if (type === "Number")
			this.num = Number(tmp);
		else if (type === "Array"){
			if (typeof tmp === "number"){
				this.num = Array(1);
				this.num[0] = tmp;
			}
			else if (typeof tmp == "string")
				this.num = Array(tmp);
		}
		else if (type === "Object"){
			let a = new Object();
			a.n = tmp;
			this.num = a;
		}
	},
    printType : function(){
		if (typeof this.num === 'object' && typeof this.num.n === 'undefined'){
			if (typeof this.num[0] === 'string')
				console.log('- ["' + this.num[0] + '"]');
			else
				console.log('- [' + this.num[0] + ']');
		}
		else if (typeof this.num === 'object'){
			if (typeof this.num['n'] === 'string')
				console.log('- {"' + Object.keys(this.num) + '": "' + Object.values(this.num) + '"}');
			else
				console.log('- {"' + Object.keys(this.num) + '": ' + Object.values(this.num) + '}');
		}
		else if (typeof this.num === 'string')
			console.log('- "' + this.num + '"');
		else
			console.log('- ' + this.num);
	},
};
