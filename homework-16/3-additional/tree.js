/**
 * a singly linked list object Main
 * @typedef {Object} tree
 * @property {number} value
 * @property {object} next - a pointer to the next object
 */
let tree = {
	value: 12,
	/**
	 * a nessted object Next
	 * @typedef {Object} next
	 * @property {number} value
	 * @property {object} next - a pointer to the next object
	 */
	next: {
		value: 20,
		/**
		 * a nessted object Next
		 * @typedef {Object} next
		 * @property {number} value
		 * @property {object} next - a pointer to the next object
		 */
		next: {
			value: 30,
			/**
			 * a nessted object Next
			 * @typedef {Object} next
			 * @property {number} value
			 * @property {null} next - a pointer to the last item
			 */
			next: {
				value: -10,
				next: null,
			},
		},
	},
};

/**
 *  a function that will return all the values(number) from the object(singly linked list) as an array
 * @param {object} tree - singly linked list
 * @returns {function} - which will turn singly linked list into an array of values
 * @example <caption>usage of fn(tree)</caption>
 * fn(tree); // returns [12, 20, 30, -10]
 */
const fn = (tree) => {
	/**
	 *
	 * @param {object} tree - singly linked list
	 * @param {Array} arr - an accumulator which will collect data as an array
	 * @returns {Array} - an array of values from singly linked list
	 * @example <caption>usage of inFn(tree)</caption>
	 * inFn(tree) // returns an array [12, 20, 30, -10]
	 */
	function inFn(tree, arr = []) {
		if (tree === null) {
			return arr;
		}
		arr.push(tree.value);
		arr.push(fn(tree.next, arr));
		return arr.flat();
	}

	return inFn(tree);
};

fn(tree); // [12, 20, 30, -10]
