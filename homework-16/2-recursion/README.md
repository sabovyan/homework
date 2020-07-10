## Functions

<dl>
<dt><a href="#findBrokenItem">findBrokenItem(arr)</a> ⇒ <code>number</code></dt>
<dd><p>findBrokenItem() will check whether an array has an increasing order and if it doesn&#39;t, it will return the index of that number that violates the sequence.</p>
</dd>
<dt><a href="#getMinPositive">getMinPositive(arr)</a> ⇒ <code>number</code></dt>
<dd><p>getMinPositive() will find minimal positive number</p>
</dd>
<dt><a href="#isOdd">isOdd(n)</a> ⇒ <code>Boolean</code></dt>
<dd><p>check if all the digits of the number is odd</p>
</dd>
</dl>

<a name="findBrokenItem"></a>

## findBrokenItem(arr) ⇒ <code>number</code>

findBrokenItem() will check whether an array has an increasing order and if it doesn't, it will return the index of that number that violates the sequence.

**Kind**: global function  
**Returns**: <code>number</code> - the index of the number that out of the order

| Param | Type               | Description               |
| ----- | ------------------ | ------------------------- |
| arr   | <code>Array</code> | takes an array of numbers |

**Example** _(usage of findBrokenItem function)_

```js
findBrokenItem([-9, -4, -4, 3, 12, 4, 5]); // returns 5
findBrokenItem([2, 12, 15, 48, 64]); // returns -1
```

<a name="getMinPositive"></a>

## getMinPositive(arr) ⇒ <code>number</code>

getMinPositive() will find minimal positive number

**Kind**: global function  
**Returns**: <code>number</code> - - the minimal positive number of the given array

| Param | Type               | Description                   |
| ----- | ------------------ | ----------------------------- |
| arr   | <code>Array</code> | an array of arbitrary numbers |

**Example** _(Usage of minPositive.js)_

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

| Param | Type                | Description                |
| ----- | ------------------- | -------------------------- |
| n     | <code>number</code> | takes any arbitrary number |

**Example** _(usage of symmetricDifference(set1, set2))_

```js
isOdd(0);
//returns false
isOdd(5);
//returns true
isOdd(-1);
//throws a new error
```
