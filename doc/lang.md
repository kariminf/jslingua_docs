# Lang module

This module is used for language charsets and transformations between them.

## Accessing

### Access the module itself

```javascript
var Trans = JsLingua.Cls.Lang;
```

### Access a language implementation of the module

```javascript
var lang = JsLingua.nserv("lang", "<langCode>");
//var lang = new (JsLingua.getService("lang", "<langCode>"))();
```

## Charsets

To get the list of charsets names for the module's language:

```javascript
let charsetList = lang.lchars();
//var charsetList = lang.availableCharSets();
```

To verify if a charcater belongs to a charset, you must get the function by affording the charset name

```javascript
var verifCharFunc = lang.verifyCharSetFunction("<charset name>");
var belongs = verifCharFunc("<char>");
//returns true or false
```

For example, in English, we want to test "BasicLatin" charset

```javascript
var engLang = new (JsLingua.getService("Lang", "eng"))();
var verifCharFunc = engLang.verifyCharSetFunction("BasicLatin");
var belongs = verifCharFunc("a"); //true
belongs = verifCharFunc("ç"); //false
```

To verify if a text contains at least one char of a charset

```javascript
var verifTextFunc = lang.containsCharSetFunction("<charset name>");
var contains = verifTextFunc("<text>");
//returns true or false
```

Or, another way:

```javascript
lang.schars("<charset name>");//set current charset name
var contains = lang.contains("<text>");
//returns true or false
```

To verify if all the text is formed of a given charset

```javascript
var verifTextFunc = lang.allCharSetFunction("<charset name>");
var all = verifTextFunc("<text>");
//returns true or false
```

Or, another way:

```javascript
lang.schars("<charset name>");
var all = lang.all("<text>");
//returns true or false
```

## Transformations

To transform from a charset to another (for example: min to maj ) there are some functions for each language.
To get the list of transformation functions names:

```javascript
let transfList = lang.ltrans();
//var transfList = lang.availableTransformations();
```

To get the function for a given transformation name:
```javascript
var transfFunc = lang.transformationFunction("<function name>");
var transfText = transfFunc(origText);
```

Or:
```javascript
lang.strans("<function name>");
var transfText = lang.trans(origText);
```

For example, in English (minusculeToMajuscule)

```javascript
var engLang = new (JsLingua.getService("Lang", "eng"))();
var min2maj = engLang.transformationFunction("min2maj");
var majText = min2maj("text in minuscule.");
//The variable majText will be a string of "TEXT IN MINUSCULE."
```

Or,

```javascript
var engLang = JsLingua.gserv("lang", "eng");
engLang.strans("min2maj");
var majText = engLang.trans("text in minuscule.");
//The variable majText will be a string of "TEXT IN MINUSCULE."
```

## Numbers to Texts

To pronounce a number in the current language, just use:

```javascript
var text = lang.nbr2str(<number>);
//var text = lang.pronounceNumber(<number>);
```

For example, in English:

```javascript
var engLang = JsLingua.nserv("lang", "eng");
var text = engLang.nbr2str(12589);
//The variable text will be a string of "twelve thousand, five hundred, eighty-nine"
```

## Storage chaining functions

If you want to apply the same operation over and over, and get the list of results;
JsLingua affords the storage chaining functions for Lang module.

We access the storage via the object **Lang.s**. There is a function called **clear()** which clears
the storage. It is recommended to call it first, in case you used **Lang.s** before.

```javascript
let engLang = JsLingua.nserv("lang", "eng");
engLang.s.clear();
```

### For transformation

The functions afforded by **Lang.s** are:

- **Lang.s.strans(< trans name >)**: sets the transformation method.
- **Lang.s.trans(< text >)**: transforms the text using the transformation method, and stores the result in an inner table.
- **Lang.s.ltrans()**: returns the result table

Suppose, we want to apply a series of charsets transformations: "maj2min" and "min2maj"

```javascript
let engLang = JsLingua.nserv("lang", "eng");
engLang.s.clear().strans("min2maj").trans("AbA").trans("BaB").trans("aaB").strans("maj2min").trans("AbA").trans("AA");
console.log(engLang.s.ltrans());
```

This will result in:
```
["ABA", "BAB", "AAB", "aba", "aa"]
```

### For number pronunciation

The functions afforded by **Lang.s** are:

- **Lang.s.nbr2str(< number >)**: transforms the number to a text (pronunciation), and stores the result in an inner table.
- **Lang.s.lnbr2str()**: returns the result table

Example:

```javascript
let engLang = JsLingua.nserv("lang", "eng");
engLang.s.clear();

```

This will result in:
```
["twelve", "eight hundred, seventy-five"]
```

## Mixing storage chaining functions

Each result of a function is stored apart. Even if we mix the functions, the results still be in different tables.

Lets mix the previous examples:

```javascript
let engLang = JsLingua.nserv("lang", "eng");
engLang.s.clear().strans("min2maj").nbr2str(12).trans("AbA").trans("BaB").trans("aaB").nbr2str(875).strans("maj2min").trans("AbA").trans("AA");
console.log(engLang.s.ltrans());
console.log(engLang.s.lnbr2str());
```

This will result in:
```
["ABA", "BAB", "AAB", "aba", "aa"]
["twelve", "eight hundred, seventy-five"]
```


[Return to index](./index.md)
