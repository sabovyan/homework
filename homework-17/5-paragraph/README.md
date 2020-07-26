## Members

<dl>
<dt><a href="#textInside">textInside</a> : <code>array</code></dt>
<dd><p>consists of several different texts for p tags</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#randomNumber">randomNumber(num)</a> ⇒ <code>number</code></dt>
<dd></dd>
<dt><a href="#restitInput">restitInput(key)</a> ⇒</dt>
<dd></dd>
<dt><a href="#createPara">createPara(quantity, elems, div)</a> ⇒ <code>HTMLElement</code></dt>
<dd></dd>
</dl>

## Events

<dl>
<dt><a href="#event_keydown">"keydown"</a></dt>
<dd><p>not sure about this solution</p>
</dd>
<dt><a href="#event_input">"input"</a></dt>
<dd><p>changes the border color according to the value of the input</p>
</dd>
<dt><a href="#event_click">"click"</a></dt>
<dd><p>sets one of the elements as chosen</p>
</dd>
<dt><a href="#event_click">"click"</a></dt>
<dd><p>takes the inputed values and sets them as background and text color</p>
</dd>
</dl>

<a name="textInside"></a>

## textInside : <code>array</code>
consists of several different texts for p tags

**Kind**: global variable  
<a name="randomNumber"></a>

## randomNumber(num) ⇒ <code>number</code>
**Kind**: global function  
**Returns**: <code>number</code> - a random number based on the argument  

| Param | Type |
| --- | --- |
| num | <code>number</code> | 

<a name="restitInput"></a>

## restitInput(key) ⇒
**Kind**: global function  
**Returns**: restricted rules for inputs  

| Param | Type |
| --- | --- |
| key | <code>key</code> | 

<a name="createPara"></a>

## createPara(quantity, elems, div) ⇒ <code>HTMLElement</code>
**Kind**: global function  
**Returns**: <code>HTMLElement</code> - - a container for all the p elements  

| Param | Type | Description |
| --- | --- | --- |
| quantity | <code>number</code> | the quantity of the elements |
| elems | <code>string</code> | the inner text for p tags |
| div | <code>HTMLElement</code> | container |

<a name="event_keydown"></a>

## "keydown"
not sure about this solution

**Kind**: event emitted  

| Param | Type |
| --- | --- |
| event.key | <code>event</code> | 

<a name="event_input"></a>

## "input"
changes the border color according to the value of the input

**Kind**: event emitted  
<a name="event_click"></a>

## "click"
sets one of the elements as chosen

**Kind**: event emitted  
<a name="event_click"></a>

## "click"
takes the inputed values and sets them as background and text color

**Kind**: event emitted  
