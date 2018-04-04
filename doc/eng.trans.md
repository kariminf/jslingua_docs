# English Trans module

This module is used for transliteration.

## Accessing

```javascript
let engTrans = JsLingua.nserv("trans", "eng");
//let engTrans = new (JsLingua.getService("trans", "eng"))();
```

## Available transliteration methods

- morse: morse code for English

## Examples

```javascript
engTrans.strans("morse");
//engTrans.setCurrentMethod("morse");
console.log(engTrans.trans("go"));
console.log(engTrans.untrans(".-. . - ..- .-. -."));
```

The result will be:

```
--. ---
RETURN
```

[Return to index](./index.md)
