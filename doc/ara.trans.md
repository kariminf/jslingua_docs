# Arabic Trans module

This module is used for transliteration.
See Arabic romanization on [Wikipedia](https://en.wikipedia.org/wiki/Romanization_of_Arabic)

## Accessing

```javascript
var araTrans = new (JsLingua.getService("Trans", "ara"))();
```

## Available transliteration methods

- Buckwalter: Buckwalter transliteration for Arabic
- ArabTeX: ArabTeX transliteration which is used to write Arabic on LaTeX
- Morse: morse code for Arabic

## Examples

```javascript
araTrans.setCurrentMethod("Buckwalter");
console.log(araTrans.transliterate("ذهب"));
console.log(araTrans.untransliterate("rjE"));

araTrans.setCurrentMethod("ArabTeX");
console.log(araTrans.transliterate("ذهب"));
console.log(araTrans.untransliterate("rj`"));

araTrans.setCurrentMethod("Morse");
console.log(araTrans.transliterate("ذهب"));
console.log(araTrans.untransliterate(".-. .--- .-.-"));

```

The result will be:

```
*hb
رجع
_dhb
رجع
--.. ..-.. -...
رجع
```

[Return to index](./index.md)
