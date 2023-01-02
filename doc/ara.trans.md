# Arabic Trans module

This module is used for transliteration.
See Arabic romanization on [Wikipedia](https://en.wikipedia.org/wiki/Romanization_of_Arabic)

## Accessing

```javascript
const araTrans = JsLingua.gserv("trans", "ara");
```

## Available transliteration methods

```javascript
const transList = araTrans.l();
```

- buckwalter: Buckwalter transliteration for Arabic
- arabtex: ArabTeX transliteration which is used to write Arabic on LaTeX
- morse: morse code for Arabic

## Examples

```javascript
araTrans.s("buckwalter");
console.log(araTrans.t("ذهب"));
console.log(araTrans.u("rjE"));

araTrans.s("arabtex");
console.log(araTrans.t("ذهب"));
console.log(araTrans.u("rj`"));

araTrans.s("Morse");
console.log(araTrans.t("ذهب"));
console.log(araTrans.u(".-. .--- .-.-"));

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
