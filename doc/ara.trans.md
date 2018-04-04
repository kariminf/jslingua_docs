# Arabic Trans module

This module is used for transliteration.
See Arabic romanization on [Wikipedia](https://en.wikipedia.org/wiki/Romanization_of_Arabic)

## Accessing

```javascript
let araTrans = JsLingua.nserv("trans", "ara");
//Or, let araTrans = new (JsLingua.getService("trans", "ara"))();
```

## Available transliteration methods

- buckwalter: Buckwalter transliteration for Arabic
- arabtex: ArabTeX transliteration which is used to write Arabic on LaTeX
- morse: morse code for Arabic

## Examples

```javascript
araTrans.strans("buckwalter");
//araTrans.setCurrentMethod("Buckwalter");
console.log(araTrans.trans("ذهب"));
//console.log(araTrans.transliterate("ذهب"));
console.log(araTrans.untrans("rjE"));
//console.log(araTrans.untransliterate("rjE"));

araTrans.strans("arabtex");
console.log(araTrans.trans("ذهب"));
console.log(araTrans.untrans("rj`"));

araTrans.strans("Morse");
console.log(araTrans.trans("ذهب"));
console.log(araTrans.untrans(".-. .--- .-.-"));

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
