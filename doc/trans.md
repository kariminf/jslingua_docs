# Trans module

This module is used for transliteration.

## Access a language implementation of the module

```javascript
const Trans = JsLingua.gserv("trans", "<langCode>");
```

For "French" language on the browser, you have to import "English" module before.

```javascript
<script type="text/javascript" src="jslingua.js" ></script>
<script type="text/javascript" src="trans.js" ></script>
<script type="text/javascript" src="eng/eng.trans.js" ></script>
<script type="text/javascript" src="fra/fra.trans.js" ></script>
...
```

## Getting a list of available transliteration methods

```javascript
const methodList = Trans.l();
```

## Setting the current transliteration method

```javascript
Trans.s(<methodName>);
```

**methodName**: a method from the available methods for the current language

## Transliterate

After setting the current transliteration method, you can transliterate a text.

```javascript
let transText = Trans.t(origText);
```

## Untransliterate

After setting the current transliteration method, you can transliterate a text.

```javascript
let origText = Trans.u(transText);
```


[Return to index](./index.md)
