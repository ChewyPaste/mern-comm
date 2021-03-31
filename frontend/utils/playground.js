function solution(A, B) {
	let stack = [];
	let c = B.length;
	for (let j = 0; j < B.length; j++) {
		if (B[j] === 1) {
			stack.push(A[j]);
		} else if (B[j] === 0) {
			while (stack.length > 0) {
				if (stack[stack.length - 1] > A[j]) {
					c = c - 1;
					break;
				} else if (stack[stack.length - 1] < A[j]) c = c - 1;
				stack.pop();
			}
		}
	}
	return c;
}

let test1 = [4, 3, 2, 1, 5];
let test2 = [0, 1, 0, 0, 0];

console.log(solution(test1, test2));
