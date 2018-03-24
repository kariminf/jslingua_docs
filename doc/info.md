# Info module

This module is used to get information about the language.

## Accessing

### Access the module itself

```javascript
var Info = JsLingua.Cls.Info;
```

### Access a language implementation of the module

```javascript
var info = new (JsLingua.getService("Info", "<langCode>"))();
```

**langCode** is  [ISO_639-2](https://www.loc.gov/standards/iso639-2/php/code_list.php) code of the language


## Information

Getting the name of the language in English

```javascript
var name = info.getName();
```

Getting the name of the language in its original language

```javascript
var origname = info.getOrigName();
```

Getting [ISO_639-2](https://www.loc.gov/standards/iso639-2/php/code_list.php) code of the language

```javascript
var code = info.getCode();
```

Getting the family of the language

```javascript
var family = info.getFamily();
```

Getting the branch of the language

```javascript
var family = info.getBranch();
```

Getting the language's direction of writing ("ltr" or "rtl")

```javascript
var family = info.getDir();
```

Getting the language's words order (s: subject, v: verb, o:object).
English is "svo", Arabic is "vso", etc.

```javascript
var family = info.getWordOrder();
```


[Return to index](./index.md)
