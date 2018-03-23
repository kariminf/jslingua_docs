# Japanese Trans module

This module is used for transliteration.
See Japanese romanization on [Wikipedia](https://en.wikipedia.org/wiki/Romanization_of_Japanese)

## Accessing

```javascript
var jpnTrans = new JsLingua.getService("Trans", "jpn")();
```

## Available transliteration methods

- Hepburn: Hepburn transliteration for Japanese
- NihonShiki: NihonShiki transliteration for Japanese
- KunreiShiki: KunreiShiki transliteration for Japanese
- Morse: morse code for Japanese

## Examples

```javascript
jpnTrans.setCurrentMethod("Hepburn");
console.log(jpnTrans.transliterate("つづく"));
console.log(jpnTrans.untransliterate("tsuzuku"));

jpnTrans.setCurrentMethod("NihonShiki");
console.log(jpnTrans.transliterate("つづく"));
console.log(jpnTrans.untransliterate("tuduku"));

jpnTrans.setCurrentMethod("KunreiShiki");
console.log(jpnTrans.transliterate("つづく"));
console.log(jpnTrans.untransliterate("tuzuku"));

jpnTrans.setCurrentMethod("Morse");
console.log(jpnTrans.transliterate("つづく"));
console.log(jpnTrans.untransliterate("-..--- .--. .--. .. ...- ...-."));

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
