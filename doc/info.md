# Info module

This module is used to get information about the language.

## Access a language implementation of the module

```javascript
const Info = JsLingua.nserv("info", "<langCode>");
```

**langCode** is  [ISO_639-2](https://www.loc.gov/standards/iso639-2/php/code_list.php) code of the language


## Information

Getting the name of the language in English

```javascript
let name = Info.gname();
```

Getting the name of the language in its original language

```javascript
let origname = Info.goname();
```

Getting [ISO_639-2](https://www.loc.gov/standards/iso639-2/php/code_list.php) code of the language

```javascript
let code = Info.gcode();
```

Getting the family of the language

```javascript
let family = Info.gfamily();
```

Getting the branch of the language

```javascript
let family = Info.gbranch();
```

Getting the language's direction of writing ("ltr" or "rtl")

```javascript
let dir = Info.gdir();
```

Getting the language's words order (s: subject, v: verb, o:object).
English is "svo", Arabic is "vso", etc.

```javascript
let order = Info.gorder();
```


[Return to index](./index.md)
