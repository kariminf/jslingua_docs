# Lang module

This module is used for language charsets and transformations between them.

## Accessing

### Access the module itself

```javascript
var Trans = JsLingua.Cls.Lang;
```

### Access a language implementation of the module

```javascript
var lang = new (JsLingua.getService("Lang", "<langCode>"))();
```

## Charsets

To get the list of charsets names for the module's language:

```javascript
var charsetList = lang.availableCharSets();
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

To verify if all the text is formed of a given charset

```javascript
var verifTextFunc = lang.allCharSetFunction("<charset name>");
var all = verifTextFunc("<text>");
//returns true or false
```

## Transformations

To transform from a charset to another (for example: min to maj ) there are some functions for each language.
To get the list of transformation functions names:

```javascript
var transfList = lang.availableTransformations();
```

To get the function for a given transformation name:
```javascript
var transfFunc = lang.transformationFunction("<function name>");
var transfText = transfFunc(origText);
```

For example, in English (minusculeToMajuscule)

```javascript
var engLang = new (JsLingua.getService("Lang", "eng"))();
var min2maj = engLang.transformationFunction("minusculeToMajuscule");
var majText = min2maj("text in minuscule.");
//The variable majText will be a string of "TEXT IN MINUSCULE."
```

## Numbers to Texts

To pronounce a number in the current language, just use:

```javascript
var text = lang.pronounceNumber(<number>);
```

For example, in English:

```javascript
var engLang = new (JsLingua.getService("Lang", "eng"))();
var text = engLang.pronounceNumber(12589);
//The variable text will be a string of "twelve thousand, five hundred, eighty-nine"
```

[Return to index](./index.md)
