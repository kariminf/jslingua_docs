# Trans module

This module is used for transliteration.

## Accessing

### Access the module itself

```javascript
var Trans = JsLingua.Cls.Trans;
```

### Access a language implementation of the module

```javascript
let trans = JsLingua.nserv("trans", "<langCode>");
//var trans = new (JsLingua.getService("trans", "<langCode>"))();
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
let methodList = trans.ltrans();
//var methodList = trans.availableMethods();
```

## Setting the current transliteration method

```javascript
trans.strans(<methodName>);
//trans.setCurrentMethod(<methodName>);
```

**methodName**: a method from the available methods for the current language

## Transliterate

After setting the current transliteration method, you can transliterate a text.

```javascript
let transText = trans.trans(origText);
//var transText = trans.transliterate(origText);
```

## Untransliterate

After setting the current transliteration method, you can transliterate a text.

```javascript
let origText = trans.untrans(transText);
//var origText = trans.untransliterate(transText);
```

## Storage chaining functions

If you want to apply the same operation over and over, and get the list of results;
JsLingua affords the storage chaining functions for Trans module.

We access the storage via the object **Trans.s**. There is a function called **clear()** which clears
the storage. It is recommended to call it first, in case you used **Trans.s** before.

```javascript
let engTrans = JsLingua.nserv("trans", "eng");
engTrans.s.clear();
```

The afforded functions are:

- **Trans.s.strans(< trans-name >)**: sets the transliteration method.
- **Trans.s.trans(< text >)**: transliterate a text and stores the result in a list.
- **Trans.s.untrans(< text >)**: untransliterate a text and stores the result in the same list.
- **Trans.s.ltrans()**: returns that list.

Example:

```javascript
let jpnTrans = JsLingua.nserv("trans", "jpn");
jpnTrans.s.clear().strans("hepburn").untrans("shashin").trans("いっぱい")
      .strans("nihonshiki").trans("しゃしん").untrans("ippai");
console.log(jpnTrans.s.ltrans());
```

The result:
```
["しゃしん", "ippai", "syasin", "いっぱい"]
```

[Return to index](./index.md)
