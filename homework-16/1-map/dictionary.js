/**
 * @class
 *
 */

const some = new Map([['aram', 'amen inch karam']]);
/* let original = new Map([[1, 'one']]); */
console.log(some);
class Dictionary {
	constructor(object) {
		this.object = object;
	}
	some = new Map([[Object.entries(this.object)]]);
}
const dict = new Dictionary({ barev: 'hellow' });
console.log(dict);
/* class Dictionary {
	/* some.set(Object.keys(object), Object.values(object)); */
/* this.object = some; 
	constructor(map) {
		this.map = new Map(map);
	}

	getByKey(value) {
		console.log(value);
		if (this.map.has(value)) {
			console.log(this.map.value);
			return this.map.get(value);
		}
	}

	add(key, value) {
		if (key === this.map.key) {
			return key;
		}
	}
} */

/* const dict = new Dictionary({ barev: 'hellow' });
console.log(dict); */
// dict.get('barev'); // 'value'

// dict.add('num', 10);
// dict.add('negNum', -10);
// dict.add('num', 200);

// dict.getByKey('num'); // [10, 200]

// dict.getByKey('num').remove(10);

// dict.getByKey('num'); // [200]

// dict.getCountByKey('num'); // 2
// dict.getCountByKey('negNum'); // 1

// dict.remove('negNum');

// dict.getCountByKey('negNum'); // 0

// dict.keys(); // 'negNum', 'num'
// dict.values(); // 10, -10, 200
