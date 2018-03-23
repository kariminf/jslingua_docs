# JsLingua module

This is the main module; It's function is to act as a medium between the other modules.
It can be used to access the different modules and languages implementing them.

## Accessing

It is used either in browser or in nodejs to access the different modules, though you can access them directly.

### Use in Browser

Just import the class that you want to use and its implementations.
You, always, have to import "jaslingua" first, then the module class, then its implementations.
Here the importation of all classes, where:
- < module > : info, lang, trans, morpho
- < lang > : ara, eng, fra, jpn

```javascript
<script type="text/javascript" src="jslingua.js" ></script>
<script type="text/javascript" src="<module>.js" ></script>
<script type="text/javascript" src="<lang>/<lang>.<module>.js" ></script>
...
```

You can use a CDN (content-delivery network):

```javascript
<script type="text/javascript" src="https://unpkg.com/jslingua@version/file" ></script>
```

if you want to use the last version, just replace "version" with "latest".
For example:

```javascript
<script type="text/javascript" src="https://unpkg.com/jslingua@latest/jslingua.min.js" ></script>
<script type="text/javascript" src="https://unpkg.com/jslingua@latest/lang.min.js" ></script>
<script type="text/javascript" src="https://unpkg.com/jslingua@latest/ara.lang.min.js" ></script>
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
var JsLingua = require("jslingua");
```

## Get the version

To get the current version

```javascript
var version = JsLingua.getVersion();
```

It returns the version as a string.

## Get the writing direction

Info module has this function, but it is implemented here to facilitate the task.
Almost all languages are left to right "ltr"; the most popular right to left languages are Arabic "ara" and Hebrew "heb"

```javascript
var version = JsLingua.getDir("<langCode>");
```

**langCode** is  [ISO_639-2](https://www.loc.gov/standards/iso639-2/php/code_list.php) code of the language

It returns either "ltr" or "rtl".

## Get a list of languages implementing a module

```javascript
var langIDs = JsLingua.serviceLanguages("<module>");
```

**module** is the name of the module which we want to recover its implemented languages: "Info", "Lang", "Trans", "Morpho"

It returns a list of [ISO_639-2](https://www.loc.gov/standards/iso639-2/php/code_list.php) strings representing the languages you can use with this service.

## Get a service

Get the class implementing a given **module** and **language**.

```javascript
var Service = JsLingua.getService("<module>", "<langCode>");
var service = new Service();
```

For short

```javascript
var service = new JsLingua.getService("<module>", "<langCode>")();
```

For example, if we want to use the module "Info" of "Arabic" language, we use this code

```javascript
var araInfo = new JsLingua.getService("Info", "ara")();
```

## Add a service

If you implemented a service of a module for a certain language, and want to access it via JsLingua's functions, you can add it as:

```javascript
JsLingua.addService("<module>", "<langCode>", theClass);
```
