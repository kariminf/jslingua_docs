# Trans module

This module is used for transliteration.

## Accessing

### Access the module itself

```javascript
var Trans = JsLingua.Cls.Trans;
```

### Access a language implementation of the module

```javascript
var trans = new JsLingua.getService("Trans", "<langCode>")();
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
var methodList = trans.availableMethods();
```

## Setting the current transliteration method

```javascript
trans.setCurrentMethod(<methodName>);
```

**methodName**: a method from the available methods for the current language

## Transliterate

After setting the current transliteration method, you can transliterate a text.

```javascript
var transText = trans.transliterate(origText);
```

## Untransliterate

After setting the current transliteration method, you can transliterate a text.

```javascript
var origText = trans.transliterate(transText);
```


[Return to index](./index.md)
