# English Trans module

This module is used for transliteration.

## Accessing

```javascript
var engTrans = new (JsLingua.getService("Trans", "eng"))();
```

## Available transliteration methods

- Morse: morse code for English

## Examples

```javascript
engTrans.setCurrentMethod("Morse");
console.log(engTrans.transliterate("go"));
console.log(engTrans.untransliterate(".-. . - ..- .-. -."));
```

The result will be:

```
--. ---
RETURN
```

[Return to index](./index.md)
