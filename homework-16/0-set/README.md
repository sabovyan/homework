## Functions

<dl>
<dt><a href="#difference">difference(set1, set2)</a> ⇒ <code>set</code></dt>
<dd><p>Checking the difference between two sets</p>
</dd>
<dt><a href="#symmetricDifference">symmetricDifference(set1, set2)</a> ⇒ <code>set</code></dt>
<dd><p>Checking the difference between two sets</p>
</dd>
</dl>

<a name="difference"></a>

## difference(set1, set2) ⇒ <code>set</code>
Checking the difference between two sets

**Kind**: global function  
**Returns**: <code>set</code> - - the numbers that are not the same in between the above-mentioned two sets  

| Param | Type | Description |
| --- | --- | --- |
| set1 | <code>set</code> | fist set |
| set2 | <code>set</code> | second set |

**Example** *(Example usage of difference(set1, set2))*  
```js
const setA = new Set([1, 2, 3, 4]);
const setC = new Set([3, 4, 5, 6]);
difference(setA, setC);
// returns Set { 1, 2 }
```
<a name="symmetricDifference"></a>

## symmetricDifference(set1, set2) ⇒ <code>set</code>
Checking the difference between two sets

**Kind**: global function  
**Returns**: <code>set</code> - - union of (set1 - set2) and (set2 - set1)  

| Param | Type | Description |
| --- | --- | --- |
| set1 | <code>set</code> | fist set |
| set2 | <code>set</code> | second set |

**Example** *(Example usage of symmetricDifference(set1, set2))*  
```js
const setA = new Set([1, 2, 3, 4]);
const setC = new Set([3, 4, 5, 6]);
symadifference(setA, setC);
// returns Set { 1, 2, 5, 6 }
```
