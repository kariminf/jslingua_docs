# English Trans module

This module is used for transliteration.

## Accessing

```javascript
const engTrans = JsLingua.gserv("trans", "eng");
```

## Available transliteration methods

```javascript
const transList = engTrans.l();
```

- morse: morse code for English

## Examples

```javascript
engTrans.s("morse");
console.log(engTrans.t("go"));
console.log(engTrans.u(".-. . - ..- .-. -."));
```

The result will be:

```
--. ---
RETURN
```

[Return to index](./index.md)
