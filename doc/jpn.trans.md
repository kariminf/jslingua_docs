# Japanese Trans module

This module is used for transliteration.
See Japanese romanization on [Wikipedia](https://en.wikipedia.org/wiki/Romanization_of_Japanese)

## Accessing

```javascript
let jpnTrans = JsLingua.nserv("trans", "jpn");
//let jpnTrans = new (JsLingua.getService("trans", "jpn"))();
```

## Available transliteration methods

- hepburn: Hepburn transliteration for Japanese
- nihonshiki: NihonShiki transliteration for Japanese
- kunreishiki: KunreiShiki transliteration for Japanese
- Morse: morse code for Japanese

## Examples

```javascript
jpnTrans.strans("hepburn");
//jpnTrans.setCurrentMethod("hepburn");
console.log(jpnTrans.trans("つづく"));
console.log(jpnTrans.untrans("tsuzuku"));

jpnTrans.strans("nihonshiki");
console.log(jpnTrans.trans("つづく"));
console.log(jpnTrans.untrans("tuduku"));

jpnTrans.strans("kunreishiki");
console.log(jpnTrans.trans("つづく"));
console.log(jpnTrans.untrans("tuzuku"));

jpnTrans.strans("morse");
console.log(jpnTrans.trans("つづく"));
console.log(jpnTrans.untrans("-..--- .--. .--. .. ...- ...-."));

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
