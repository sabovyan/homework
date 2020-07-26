## Constants

<dl>
<dt><a href="#sortingType">sortingType</a> : <code>Array</code></dt>
<dd><p>array of objects</p>
</dd>
<dt><a href="#sortedOrder">sortedOrder</a> ⇒ <code>array</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#render">render()</a> ⇒ <code>void</code></dt>
<dd><p>it will sort the order of the table</p>
</dd>
<dt><a href="#isEmpty">isEmpty(inputs)</a> ⇒ <code>Boolean</code></dt>
<dd><p>checks if every element is empty or not</p>
</dd>
<dt><a href="#changeIcon">changeIcon(arr, type, icon)</a> ⇒ <code>void</code></dt>
<dd><p>changes the order status and the text of the span</p>
</dd>
<dt><a href="#makeRow">makeRow(arr)</a> ⇒ <code>HTMLCollection</code></dt>
<dd><p>creates a new table row</p>
</dd>
<dt><a href="#updateTable">updateTable(students, body)</a> ⇒ <code>void</code></dt>
<dd><p>updates the actual table with sorted table</p>
</dd>
</dl>

## Events

<dl>
<dt><a href="#event_keydown">"keydown"</a></dt>
<dd></dd>
<dt><a href="#event_click">"click"</a></dt>
<dd></dd>
</dl>

<a name="sortingType"></a>

## sortingType : <code>Array</code>
array of objects

**Kind**: global constant  
<a name="sortedOrder"></a>

## sortedOrder ⇒ <code>array</code>
**Kind**: global constant  
**Returns**: <code>array</code> - sorted array  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>array</code> | array of studends |
| type | <code>object</code> | object of objects |

<a name="render"></a>

## render() ⇒ <code>void</code>
it will sort the order of the table

**Kind**: global function  
<a name="isEmpty"></a>

## isEmpty(inputs) ⇒ <code>Boolean</code>
checks if every element is empty or not

**Kind**: global function  

| Param | Type |
| --- | --- |
| inputs | <code>HTMLCollection</code> | 

<a name="changeIcon"></a>

## changeIcon(arr, type, icon) ⇒ <code>void</code>
changes the order status and the text of the span

**Kind**: global function  

| Param | Type |
| --- | --- |
| arr | <code>array</code> | 
| type | <code>object</code> | 
| icon | <code>HTMLElement</code> | 

<a name="makeRow"></a>

## makeRow(arr) ⇒ <code>HTMLCollection</code>
creates a new table row

**Kind**: global function  
**Returns**: <code>HTMLCollection</code> - table row  

| Param | Type |
| --- | --- |
| arr | <code>array</code> | 

<a name="updateTable"></a>

## updateTable(students, body) ⇒ <code>void</code>
updates the actual table with sorted table

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| students | <code>array</code> | array of objects |
| body | <code>HTMLElement</code> |  |

<a name="event_keydown"></a>

## "keydown"
**Kind**: event emitted  
**Emits**: <code>event:row - a new table row</code>  
<a name="event_click"></a>

## "click"
**Kind**: event emitted  
**Emits**: <code>event:table - reordered table</code>  
