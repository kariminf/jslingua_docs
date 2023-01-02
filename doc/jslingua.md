# JsLingua module

This is the main module; It manages different languages and modules.

## Accessing

It is used either in browser or in nodejs to access the different modules.

### Use in Browser

There are two ways, either selecting just some modules, or using a standalone file.

**a) Many files**

Just import the class that you want to use and its language implementation.
You, always, have to import "jaslingua" first, then the module class, then its language implementation.
Here the importation of all classes, where:
- < service > : info, lang, trans, morpho
- < lang > : ara, eng, fra, jpn

```javascript
<script type="text/javascript" src="jslingua.mjs" ></script>
<script type="text/javascript" src="<service>.mjs" ></script>
<script type="text/javascript" src="<lang>/<lang>.<service>.mjs" ></script>
...
```

**b) one file containing all package**

Using **webpack**, you can bundle up all implementations into one file **jslingua.js**.

You can use a CDN (content-delivery network):

```javascript
<script type="text/javascript" src="https://unpkg.com/jslingua@version/file" ></script>
```

if you want to use the last version, just replace "version" with "latest".
For example:

```javascript
<script type="text/javascript" src="https://unpkg.com/jslingua@latest/jslingua.min.js" ></script>
...
```

Then, you can use the variable **JsLingua** referring to this module;
When you call **jslingua.js**, the module will create the variable automatically.

### Use in Node

First of all, you have to install the package in your current project

```
npm i jslingua
```

Then in your test file, call the main module "jslingua".

```javascript
const JsLingua = require("jslingua");
```

## Get the version

Either in browser or nodejs, you will end up with a variable called **JsLingua**.

To get the current version:

```javascript
const version = JsLingua.gversion();
```

It returns the version as a string.

## Get the writing direction

Info module has this function, but it is implemented here to facilitate the task.
Almost all languages are left to right "ltr"; the most popular right to left languages are Arabic "ara" and Hebrew "heb".

```javascript
const dir = JsLingua.gdir("<langCode>");
```

**langCode** is  [ISO_639-2](https://www.loc.gov/standards/iso639-2/php/code_list.php) code of the language

It returns either "ltr" or "rtl".

## Get a list of languages implementing a module

```javascript
const langIDs = JsLingua.llang("<service>");
```

**module** is the name of the module which we want to recover its implemented languages: "Info", "Lang", "Trans", "Morpho"

It returns a list of [ISO_639-2](https://www.loc.gov/standards/iso639-2/php/code_list.php) strings representing the languages you can use with this service.

## Get a service

Get the class implementing a given **service** and **langCode**.
The class contains static methods, so no need to instanciate it.

```javascript
const Service = JsLingua.gserv("<service>", "<langCode>");
```

For example, if we want to use the module "Info" of "Arabic" language, we use this code

```javascript
const araInfo = JsLingua.gserv("info", "ara");
```

## Add a service

If you implemented a service of a module for a certain language, and want to access it via JsLingua's functions, you can add it as:

```javascript
JsLingua.aserv("<service>", "<langCode>", theClass);
```


[Return to index](./index.md)
