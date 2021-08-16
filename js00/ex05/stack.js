const stackCreate = () => ({
	arr: [],
});

function stackEmpty(stack){
	let len;
	
	if (!stack)
		throw 'stack error!';
	len = 0;
	for (let index in stack.arr){
		if (typeof stack.arr[len] === 'undefined')
			break ;
		len++;
	}
	if (len == 0)
		return true;
	return false;
}

function stackPush(stack, data){
	let	len;

	if (!stack)
		throw 'stack error!';
	len = 0;
	for (let index in stack.arr){
		if (typeof stack.arr[len] === 'undefined')
			break ;
		len++;
	}
	stack.arr[len] = data;
}

function stackPeek(stack) {
	let	len;

	if (!stack)
		throw 'stack error!';
	else if (stackEmpty(stack))
		throw 'stack error!';
	len = 0;
	for (let index in stack.arr){
		if (typeof stack.arr[len] === 'undefined')
			break ;
		len++;
	}
	return stack.arr[len - 1];
}

function stackPop(stack) {
	let	len;

	if (!stack)
		throw 'stack error!';
	else if (stackEmpty(stack))
		return ;
	len = 0;
	for (let index in stack.arr){
		if (typeof stack.arr[len] === 'undefined')
			break ;
		len++;
	}
	stack.arr[len - 1] = undefined;
}

export { stackCreate, stackPop, stackPeek, stackPush, stackEmpty };

