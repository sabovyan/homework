## Functions

<dl>
<dt><a href="#fn">fn(tree)</a> ⇒ <code>function</code></dt>
<dd><p>a function that will return</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#tree">tree</a> : <code>Object</code></dt>
<dd><p>a singly linked list object Main</p>
</dd>
<dt><a href="#next">next</a> : <code>Object</code></dt>
<dd><p>a nessted object Next</p>
</dd>
<dt><a href="#next">next</a> : <code>Object</code></dt>
<dd><p>a nessted object Next</p>
</dd>
<dt><a href="#next">next</a> : <code>Object</code></dt>
<dd><p>a nessted object Next</p>
</dd>
</dl>

<a name="fn"></a>

## fn(tree) ⇒ <code>function</code>
a function that will return

**Kind**: global function  
**Returns**: <code>function</code> - - which will turn singly linked list into an array of values  

| Param | Type | Description |
| --- | --- | --- |
| tree | <code>object</code> | singly linked list |

**Example** *(usage of fn(tree))*  
```js
fn(tree); // returns [12, 20, 30, -10]
```
<a name="fn..inFn"></a>

### fn~inFn(tree, arr) ⇒ <code>Array</code>
**Kind**: inner method of [<code>fn</code>](#fn)  
**Returns**: <code>Array</code> - - an array of values from singly linked list  

| Param | Type | Description |
| --- | --- | --- |
| tree | <code>object</code> | singly linked list |
| arr | <code>Array</code> | an accumulator which will collect data as an array |

**Example** *(usage of inFn(tree))*  
```js
inFn(tree) // returns an array [12, 20, 30, -10]
```
<a name="tree"></a>

## tree : <code>Object</code>
a singly linked list object Main

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| value | <code>number</code> |  |
| next | <code>object</code> | a pointer to the next object |

<a name="next"></a>

## next : <code>Object</code>
a nessted object Next

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| value | <code>number</code> |  |
| next | <code>object</code> | a pointer to the next object |

<a name="next"></a>

## next : <code>Object</code>
a nessted object Next

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| value | <code>number</code> |  |
| next | <code>object</code> | a pointer to the next object |

<a name="next"></a>

## next : <code>Object</code>
a nessted object Next

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| value | <code>number</code> |  |
| next | <code>null</code> | a pointer to the last item |

