# French Trans module

This module is used for transliteration.

## Accessing

```javascript
const fraTrans = JsLingua.gserv("trans", "fra");
```

On the browser side, you have to call English module too, since morse code is shared

```javascript
<script type="text/javascript" src="jslingua.js" ></script>
<script type="text/javascript" src="trans.js" ></script>
<script type="text/javascript" src="eng/eng.trans.js" ></script>
<script type="text/javascript" src="fra/fra.trans.js" ></script>
...
```

## Available transliteration methods

```javascript
const transList = engTrans.l();
```

- morse: morse code for French

## Examples

```javascript
fraTrans.s("morse");
console.log(fraTrans.t("père"));
console.log(fraTrans.u(".--. . .-. ."));
```

The result will be:

```
.--. . .-. .
PERE
```

[Return to index](./index.md)
