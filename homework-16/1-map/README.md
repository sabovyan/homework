<a name="Dictionary"></a>

## Dictionary
**Kind**: global class  

* [Dictionary](#Dictionary)
    * [new Dictionary(item)](#new_Dictionary_new)
    * [.add(key, ...values)](#Dictionary+add)
    * [.remove(key)](#Dictionary+remove) ⇒ <code>Boolean</code>
    * [.getByKey(key)](#Dictionary+getByKey) ⇒
    * [.getCountByKey(key)](#Dictionary+getCountByKey) ⇒
    * [.keys()](#Dictionary+keys) ⇒
    * [.values()](#Dictionary+values) ⇒

<a name="new_Dictionary_new"></a>

### new Dictionary(item)
creates a new Map (this.map)

**Returns**: <code>Map</code> - - where the key points to the value, which is a Set.  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>object</code> | takes key-value pairs |

**Example** *(example of Dictionary)*  
```js
const dict = new Dictionary({ lol: 'one', luf: 'two' });
//returns
	Dictionary {map: Map(2)}
	map: Map(2)
	[[Entries]]
		0: {"lol" => Set(1)}
			key: "lol"
			value: Set(1) {"one"}
		1: {"luf" => Set(1)}
			key: "luf"
			value: Set(1) {"two"}
	size: (...)
	__proto__: Map
	__proto__: Object
```
<a name="Dictionary+add"></a>

### dictionary.add(key, ...values)
a method to  add more key value/s pairs to map
if the key exists the value/s will be add to that pair,
otherwise it will return a  new key - value/s pair.

**Kind**: instance method of [<code>Dictionary</code>](#Dictionary)  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>key</code> | sets the first item as key |
| ...values | <code>any</code> | sets the other/s as value/s |

**Example** *(usage of add(key, ...values))*  
```js
	dict.add(number, 'two', 'six')
```
<a name="Dictionary+remove"></a>

### dictionary.remove(key) ⇒ <code>Boolean</code>
remove(val) removes map's property

**Kind**: instance method of [<code>Dictionary</code>](#Dictionary)  
**Returns**: <code>Boolean</code> - - if it's done returns true, otherwise false  

| Param | Type |
| --- | --- |
| key | <code>key</code> | 

**Example** *(usage of remove(key))*  
```js
dict.remove('lol')
```
<a name="Dictionary+getByKey"></a>

### dictionary.getByKey(key) ⇒
getByKey will return the value/s that the key is pointing

**Kind**: instance method of [<code>Dictionary</code>](#Dictionary)  
**Returns**: value/s that the above-mentioned key is pointing  

| Param | Type |
| --- | --- |
| key | <code>key</code> | 

**Example** *(usage of getByKey(key))*  
```js
dict.getByKey('lol')
```
<a name="Dictionary+getCountByKey"></a>

### dictionary.getCountByKey(key) ⇒
getCountByKey(key) will return the size of the value

**Kind**: instance method of [<code>Dictionary</code>](#Dictionary)  
**Returns**: value/s that the above-mentioned key is pointing  

| Param | Type |
| --- | --- |
| key | <code>key</code> | 

**Example** *(usage of getCountByKey(key))*  
```js
dict.getCountByKey('lol');
```
<a name="Dictionary+keys"></a>

### dictionary.keys() ⇒
keys()

**Kind**: instance method of [<code>Dictionary</code>](#Dictionary)  
**Returns**: all the keys within an Array  
**Example** *(usage of keys())*  
```js
dict.keys()
```
<a name="Dictionary+values"></a>

### dictionary.values() ⇒
values()

**Kind**: instance method of [<code>Dictionary</code>](#Dictionary)  
**Returns**: all the values within an Array  
**Example** *(usage of keys())*  
```js
dict.values()
```
