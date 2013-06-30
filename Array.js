var MyArray = (function(){

	return function(){

		var _index = 0;
		var _container = [];

		this.push = function(elem){
			_container[_index++] = elem;
		};

		this.at = function(pos){
			return _container[pos];
		};

		this.len = (function(){
			
			return _container.length;
		})();

		this.size = function(){

			return this.len;
		};
	};

})(); 

var array = new MyArray();
array.push(123);
array.push(3232);
array.push(3232);
array.push(3232);
array.push(3232);
//console.log(array.len);

var a = ['u', 'b', 'c'];
var c = a.shift();    // a is ['b', 'c'] & c is 'a'
console.log(c);



//shift can be implemented like this:

/*Array.method('shift', function (  ) {
    return this.splice(0, 1)[0];
});*/

var n = [4, 15, 3, 16, 63, 42];
n.sort(function (a, b) {
    if (a === b) {
        return 0;
    }
    if (typeof a === typeof b) {
        return a < b ? -1 : 1;
    }
    return typeof a < typeof b ? -1 : 1;
});


var forEach = function(f){
	console.log(f(12));
}

forEach(function(a){
			if(typeof a =='string' )			
				return a;
			else return 'failed';
		}
	);
/*n.sort(function (a, b) {
    return a - b;
});*/
var m = n.sort();
console.log(m);

var Ob = (function(){
	return function(id){
		var _id = id;

		this.setId = function(id){
			_id = id;
		};

		this.getId = function(){
			return _id;
		};

		/*this.toString = function(){
			return 'id :' + _id;
		};*/
	}	
})();

Ob.prototype.toString = function(){
	return 'Id: ' + this.getId();
};

console.log((new Ob(22)).toString());
