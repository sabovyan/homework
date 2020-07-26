## Classes

<dl>
<dt><a href="#DateTimeData">DateTimeData</a></dt>
<dd><p>dateTimeDate -  to gather info about date and time separately</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#dateFunc">dateFunc</a> : <code>Object</code></dt>
<dd><ul>
<li>it contains all the functions</li>
</ul>
</dd>
</dl>

<a name="DateTimeData"></a>

## DateTimeData
dateTimeDate -  to gather info about date and time separately

**Kind**: global class  
<a name="dateFunc"></a>

## dateFunc : <code>Object</code>
- it contains all the functions

**Kind**: global constant  

* [dateFunc](#dateFunc) : <code>Object</code>
    * [.makeChild(arr)](#dateFunc.makeChild) ⇒ <code>Array</code>
    * [.makeParent(arr)](#dateFunc.makeParent) ⇒ <code>HTMLElement</code>
    * [.updateData(elem, innerText, symbol)](#dateFunc.updateData) ⇒ <code>HTMLElement</code>

<a name="dateFunc.makeChild"></a>

### dateFunc.makeChild(arr) ⇒ <code>Array</code>
makeChild(arr) is responsible for creating spans

**Kind**: static method of [<code>dateFunc</code>](#dateFunc)  
**Returns**: <code>Array</code> - - array of spans with classes  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | an array of class names for spans |

**Example**  
```js
let spans = this.makeChild(obj.spanClassName);
```
<a name="dateFunc.makeParent"></a>

### dateFunc.makeParent(arr) ⇒ <code>HTMLElement</code>
makeParent(obj) is responsible for creating parent element

**Kind**: static method of [<code>dateFunc</code>](#dateFunc)  
**Returns**: <code>HTMLElement</code> - - an HTML element width inner span elements  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>object</code> | an array of class names for spans |

**Example**  
```js
let time = dateFunc.makeParent(timeData);
```
<a name="dateFunc.updateData"></a>

### dateFunc.updateData(elem, innerText, symbol) ⇒ <code>HTMLElement</code>
updateData(elem, innerText, symbol) is responsible for updating the data in the span elements

**Kind**: static method of [<code>dateFunc</code>](#dateFunc)  
**Returns**: <code>HTMLElement</code> - - with updated inner Text  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>HTMLElement</code> | an HTML element width inner span elements |
| innerText | <code>object</code> | an array of date information |
| symbol | <code>string</code> | it is a sybol that will be added at the end of the element |

**Example**  
```js
dateFunc.updateData(
time,
[new Date().getHours(), new Date().getMinutes(), new Date().getSeconds()],
' : '
);
```
