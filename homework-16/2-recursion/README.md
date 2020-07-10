## Functions

<dl>
<dt><a href="#getMinPositive">getMinPositive(arr)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#isOdd">isOdd(n)</a> ⇒ <code>Boolean</code></dt>
<dd><p>check if all the digits of the number is odd</p>
</dd>
</dl>

<a name="getMinPositive"></a>

## getMinPositive(arr) ⇒ <code>number</code>
**Kind**: global function  
**Returns**: <code>number</code> - - the minimal positive number of the given array  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | an array of arbitrary numbers |

**Example** *(Usage of minPositive.js)*  
```js
getMinPositive([56, -9, 87, -23, 0, -105, 55, 1]); // returns 0
getMinPositive([45, -9, 15, 5, -78]); // returns 5
getMinPositive([-5, -9, -111, -1000, -7]); // returns -1
```
<a name="isOdd"></a>

## isOdd(n) ⇒ <code>Boolean</code>
check if all the digits of the number is odd

**Kind**: global function  
**Returns**: <code>Boolean</code> - - false if any of the digits of the number is even, otherwise it will return true  

| Param | Type | Description |
| --- | --- | --- |
| n | <code>number</code> | takes any arbitrary number |

**Example** *(usage of symmetricDifference(set1, set2))*  
```js
isOdd(0)
//returns false
isOdd(5)
//returns true
isOdd(-1)
//throws a new error
```
