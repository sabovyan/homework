/**
 * @see <a href="https://repl.it/@vrezhhovanisyan/algorithms#set_map/Set.js">assignment</a>
 */

/**
 * ANCHOR the worst solution in this world
 * @param {any} val - takes any argument
 * @returns {function} - which is native deleting method of Set
 *
 */

/* Set.prototype.remove = function (val) {
	return this.delete(val);
}; */

/**
 * @class
 * @example <caption>example of Dictionary</caption>
 * const dict = new Dictionary({ lol: 'one', luf: 'two' });
 * //returns
 * 	Dictionary {map: Map(2)}
 * 	map: Map(2)
 * 	[[Entries]]
 * 		0: {"lol" => Set(1)}
 * 			key: "lol"
 * 			value: Set(1) {"one"}
 * 		1: {"luf" => Set(1)}
 * 			key: "luf"
 * 			value: Set(1) {"two"}
 * 	size: (...)
 * 	__proto__: Map
 * 	__proto__: Object
 */

class Dictionary {
	/**
	 *	creates a new Map (this.map)
	 * @param {object} item - takes key-value pairs
	 * @returns {Map} - where the key points to the value, which is a Set.
	 *
	 */
	constructor(item) {
		const newArr = [];
		for (let [key, value] of Object.entries(item)) {
			value = new Set([value]);
			newArr.push([key, value]);
		}
		this.map = new Map(newArr);
	}

	/**
	 *  a method to  add more key value/s pairs to map
	 * if the key exists the value/s will be add to that pair,
	 * otherwise it will return a  new key - value/s pair.
	 * @param {key} key - sets the first item as key
	 * @param  {...any} values - sets the other/s as value/s
	 * @example <caption>usage of add(key, ...values)</caption>
	 *	dict.add(number, 'two', 'six')
	 */
	add(key, ...values) {
		if (this.map.has(key)) {
			this.map.get(key).add(...values);
		} else {
			const val = new Set([...values]);
			this.map.set(key, val);
		}
	}

	/**
	 * remove(val) removes map's property
	 * @param {key} key
	 * @returns {Boolean} - if it's done returns true, otherwise false
	 * @example <caption>usage of remove(key)</caption>
	 * dict.remove('lol')
	 */
	remove(key) {
		if (this.map.has(key)) {
			this.map.delete(key);
			return true;
		}
		return false;
	}

	/**
	 * getByKey will return the value/s that the key is pointing
	 * @param {key} key
	 * @returns value/s that the above-mentioned key is pointing
	 * @example <caption>usage of getByKey(key)</caption>
	 * dict.getByKey('lol')
	 */
	getByKey(key) {
		return {
			value: this.map.get(key),
			remove(val) {
				this.value.delete(val);
				return true;
			},
		};
	}

	/**
	 * getCountByKey(key) will return the size of the value
	 * @param {key} key
	 * @returns value/s that the above-mentioned key is pointing
	 * @example <caption>usage of getCountByKey(key)</caption>
	 * dict.getCountByKey('lol');
	 */
	getCountByKey(key) {
		if (this.map.has(key)) {
			return this.map.get(key).size;
		}
		return undefined;
	}

	/**
	 * keys()
	 * @returns all the keys within an Array
	 * @example <caption>usage of keys()</caption>
	 * dict.keys()
	 */
	keys() {
		return Array.from(this.map.keys());
	}

	/**
	 * values()
	 * @returns all the values within an Array
	 * @example <caption>usage of keys()</caption>
	 * dict.values()
	 */
	values() {
		const res = [];
		for (const val of this.map.values()) {
			res.push(Array.from(val));
		}
		return res.flat();
	}
}

const dict = new Dictionary({ key: 'value', secondKey: 'value2' });

dict.add('num', 10);
dict.add('num', 12);

console.log(dict.getByKey('num'));

dict.getByKey('num').remove(10);

console.log(dict.getByKey('num')); // [200]
