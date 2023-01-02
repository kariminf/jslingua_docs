# Lang module

This module is used for language charsets and transformations between them.


## Access a language implementation of the module

```javascript
const Lang = JsLingua.gserv("lang", "<langCode>");
```

## Charsets

To get the list of charset names for the module's language:

```javascript
const charsetList = Lang.lchars();
```

To verify if a text's characters have some or are all of this charset.

```javascript
//an object with two functions: "some" and "all"
const verifCharFunc = lang.gcharverify("<charset name>");
//returns true or false
const some = verifCharFunc.some("<text>");
//returns true or false
const some = verifCharFunc.all("<text>");
```

A much nicer way:

```javascript
//set current charset name
Lang.schars("<charset name>");
//returns true or falsevar verifCharFunc =
const some = Lang.some("<text>");
//returns true or false
const some = Lang.all("<text>");
```

For example, in English, we want to test "BasicLatin" charset

```javascript
const engLang = JsLingua.gserv("lang", "eng");
engLang.schars("BasicLatin");
//returns true because some characters are BasicLatin
const some = engLang.some("this is a text");
//returns false because the blanc character is not BasicLatin
const some = engLang.all("this is a text");
```

## Transformations

To transform a text from a charset to another (for example: lowercase to uppercase) there are some functions for each language.
To get the list of transformation functions names:

```javascript
const transfList = Lang.ltrans();
```

To get the function for a given transformation name:
```javascript
const transfFunc = Lang.gtrans("<function name>");
let transfText = transfFunc(origText);
```

Or, a much nicer way:
```javascript
Lang.strans("<function name>");
let transfText = Lang.trans(origText);
```

To get the description of the function
```javascript
Lang.strans("<function name>");
let transfDesc = Lang.gtransdesc(origText);
```

For example, in English (lowercase to uppercase)


```javascript
const engLang = JsLingua.gserv("lang", "eng");
engLang.strans("low2up");
let upText = engLang.trans("text in lowercase.");
//The variable upText will be a string of "TEXT IN LOWERCASE."
```

## Numbers to Texts

To pronounce a number in the current language, just use:

```javascript
let text = Lang.nbr2words(<number>);
//var text = lang.pronounceNumber(<number>);
```

For example, in English:

```javascript
const engLang = JsLingua.gserv("lang", "eng");
let text = engLang.nbr2words(12589);
//The variable text will be a string of "twelve thousand, five hundred, eighty-nine"
```


[Return to index](./index.md)
