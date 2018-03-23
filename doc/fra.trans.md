# French Trans module

This module is used for transliteration.

## Accessing

```javascript
var fraTrans = new JsLingua.getService("Trans", "fra")();
```

On the browser side, you have to call English module too, since morse code is shared

```javascript
<script type="text/javascript" src="jslingua.js" ></script>
<script type="text/javascript" src="trans.js" ></script>
<script type="text/javascript" src="eng/eng.trans.js" ></script>
<script type="text/javascript" src="fra/fra.trans.js" ></script>
...

## Available transliteration methods

- Morse: morse code for French

## Examples

```javascript
engTrans.setCurrentMethod("Morse");
console.log(araTrans.transliterate("père"));
console.log(araTrans.untransliterate(".--. . .-. ."));
```

The result will be:

```
.--. . .-. .
PERE
```

[Return to index](./index.md)
