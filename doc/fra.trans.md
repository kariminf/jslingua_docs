# French Trans module

This module is used for transliteration.

## Accessing

```javascript
let fraTrans = JsLingua.nserv("trans", "fra");
//let fraTrans = new (JsLingua.getService("trans", "fra"))();
```

On the browser side, you have to call English module too, since morse code is shared

```javascript
<script type="text/javascript" src="jslingua.js" ></script>
<script type="text/javascript" src="trans.js" ></script>
<script type="text/javascript" src="eng/eng.trans.js" ></script>
<script type="text/javascript" src="fra/fra.trans.js" ></script>
...

## Available transliteration methods

- morse: morse code for French

## Examples

```javascript
fraTrans.strans("morse");
console.log(fraTrans.trans("père"));
console.log(fraTrans.untrans(".--. . .-. ."));
```

The result will be:

```
.--. . .-. .
PERE
```

[Return to index](./index.md)
