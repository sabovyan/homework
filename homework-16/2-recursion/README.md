## Functions

<dl>
<dt><a href="#findBrokenItem">findBrokenItem(arr)</a> ⇒ <code>number</code></dt>
<dd><p>findBrokenItem() will check whether an array has an increasing order and if it doesn&#39;t, it will return the index of that number that violates the sequence.</p>
</dd>
<dt><a href="#getMinPositive">getMinPositive(arr)</a> ⇒ <code>number</code></dt>
<dd><p>getMinPositive() will find minimal positive number</p>
</dd>
<dt><a href="#getSumOfDigits">getSumOfDigits(num)</a> ⇒ <code>number</code></dt>
<dd><p>getSumOfDigits(num) calculates summary of all the digits of the given number. If the summary is grater than ten getSumOfDigits(num) will also summarize also those digits</p>
</dd>
<dt><a href="#isOdd">isOdd(n)</a> ⇒ <code>Boolean</code></dt>
<dd><p>check if all the digits of the number is odd</p>
</dd>
<dt><a href="#recursiveFlat">recursiveFlat(arr)</a> ⇒ <code>array</code></dt>
<dd></dd>
<dt><a href="#removeFirstElem">removeFirstElem(arr)</a> ⇒ <code>array</code></dt>
<dd><p>A function that will remove the first element from the array</p>
</dd>
</dl>

<a name="findBrokenItem"></a>

## findBrokenItem(arr) ⇒ <code>number</code>
findBrokenItem() will check whether an array has an increasing order and if it doesn't, it will return the index of that number that violates the sequence.

**Kind**: global function  
**Returns**: <code>number</code> - the index of the number that out of the order  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | takes an array of numbers |

**Example** *(usage of findBrokenItem function)*  
```js
findBrokenItem([-9, -4, -4, 3, 12, 4, 5]) // returns 5
findBrokenItem([2, 12, 15, 48, 64]) // returns -1
```
<a name="getMinPositive"></a>

## getMinPositive(arr) ⇒ <code>number</code>
getMinPositive() will find minimal positive number

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
<a name="getSumOfDigits"></a>

## getSumOfDigits(num) ⇒ <code>number</code>
getSumOfDigits(num) calculates summary of all the digits of the given number. If the summary is grater than ten getSumOfDigits(num) will also summarize also those digits

**Kind**: global function  
**Returns**: <code>number</code> - summary of the digits  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> | an arbitrary number |

**Example** *(usage of getSumOfDigits(num))*  
```js
getSumOfDigits(23) // returns 5
getSumOfDigits(29) // returns 2
getSumOfDigits(999999999999) // returns 9
getSumOfDigits(-45) // returns 9
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
<a name="recursiveFlat"></a>

## recursiveFlat(arr) ⇒ <code>array</code>
**Kind**: global function  
**Returns**: <code>array</code> - - whereas all the values are inside of one flat array  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>array</code> | it accepts an array of any values, |

**Example** *( usage of recursiveFlat(arr))*  
```js
recursiveFlat([1, [3, 4, [1, 2]], 10]); // returns [ 1, 3, 4, 1, 2, 10 ]
recursiveFlat([14, [1, [[[3, []]], 1], 0]]); // returns [ 14, 1, 3, 1, 0 ]
```
<a name="removeFirstElem"></a>

## removeFirstElem(arr) ⇒ <code>array</code>
A function that will remove the first element from the array

**Kind**: global function  
**Returns**: <code>array</code> - - a new array without the first element  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>array</code> | an array of different values |

**Example** *(usage of removeFirstElem(arr))*  
```js
removeFirstElem([6, 78, 'n', 0, 1]); //returns [ 78, 'n', 0, 1 ]
removeFirstElem([5]) // returns []
removeFirstElem([]) // returns []
```
