//Write a stack. Once you’re done,
//implement a queue using two stacks to create FIFO behavior.
//The queue should not have any storage separate from its stacks.


var Stack = function() {
	var storage = [];

	this.push = function(val){
		return storage.push(val)
	};

	this.pop = function(){
		return storage.pop()
	};

	this.size = function(){
		return storage.length
	};
};

var Queue = function() {

	var inbox = new Stack();
	var outbox = new Stack();

	this.enqueue = function(val){
		return inbox.push(val)
	};

	this.dequeue = function(){
		if(outbox.size() === 0 ){
			while(inbox.size !== 0){
				outbox.push(inbox.pop())
			}
		}
		return outbox.pop()
	};

	this.size = function(){
		var totalSize= inbox.size() + outbox.size()

		return totalSize;
	};
};
