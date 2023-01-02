# Japanese Trans module

This module is used for transliteration.
See Japanese romanization on [Wikipedia](https://en.wikipedia.org/wiki/Romanization_of_Japanese)

## Accessing

```javascript
const jpnTrans = JsLingua.gserv("trans", "jpn");
```

## Available transliteration methods

```javascript
const transList = jpnTrans.l();
```

- hepburn: Hepburn transliteration for Japanese
- nihonshiki: NihonShiki transliteration for Japanese
- kunreishiki: KunreiShiki transliteration for Japanese
- Morse: morse code for Japanese

## Examples

```javascript
jpnTrans.s("hepburn");
console.log(jpnTrans.t("つづく"));
console.log(jpnTrans.u("tsuzuku"));

jpnTrans.s("nihonshiki");
console.log(jpnTrans.t("つづく"));
console.log(jpnTrans.u("tuduku"));

jpnTrans.s("kunreishiki");
console.log(jpnTrans.t("つづく"));
console.log(jpnTrans.u("tuzuku"));

jpnTrans.s("morse");
console.log(jpnTrans.t("つづく"));
console.log(jpnTrans.u("-..--- .--. .--. .. ...- ...-."));

```

The result will be:

```
tsuzuku
つずく
tuduku
つづく
tuzuku
つずく
-..--- .--. .--. .. ...- ...-.
つづく
```

[Return to index](./index.md)
