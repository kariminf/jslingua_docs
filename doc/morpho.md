# Morpho module

This module is used for morphological tasks such as stemming, conjugation, etc.

## Accessing

### Access the module itself

```javascript
var Morpho = JsLingua.Cls.Morpho;
```

### Access a language implementation of the module

```javascript
var morpho = new (JsLingua.getService("Morpho", "<langCode>"))();
```

## Access Morpho properties

These properties are used for conjugation, transformation, etc.

### Part of speech properties

It is an enumeration of different part of speech.
You can get it as shown in the following code:

```javascript
var POS = Morpho.Feature.POS;
console.log(POS.N);
//will print: noun
```

This is a table of PoS components: access and string values

| Access | value |
| --- | --- |
| Morpho.Feature.POS.N | noun |
| Morpho.Feature.POS.V | verb |
| Morpho.Feature.POS.Adj | adjective |
| Morpho.Feature.POS.Adv | adverb |
| Morpho.Feature.POS.Prep | preposition |
| Morpho.Feature.POS.Pron | pronoun |

### Tense properties

It is an enumeration of different tenses.
You can get it as shown in the following code:

```javascript
var T = Morpho.Feature.Tense;
console.log(T.Pa);
//will print: past
```

This is a table of available tenses: access and string values

| Access | value |
| --- | --- |
| Morpho.Feature.Tense.Pa | past |
| Morpho.Feature.Tense.Pr | present |
| Morpho.Feature.Tense.Fu | future |

### Aspect properties

It is an enumeration of different aspects.
You can get it as shown in the following code:

```javascript
var A = Morpho.Feature.Aspect;
console.log(A.S);
//will print: simple
```

This is a table of available aspects: access and string values

| Access | value |
| --- | --- |
| Morpho.Feature.Aspect.S | simple |
| Morpho.Feature.Aspect.C | continuous |
| Morpho.Feature.Aspect.P | perfect |
| Morpho.Feature.Aspect.PC | perfect-continuous |
| Morpho.Feature.Aspect.I | imperfect |

### Mood properties

It is an enumeration of different moods.
You can get it as shown in the following code:

```javascript
var M = Morpho.Feature.Mood;
console.log(M.Ind);
//will print: indicative
```

This is a table of available moods: access and string values

| Access | value |
| --- | --- |
| Morpho.Feature.Mood.Ind | indicative |
| Morpho.Feature.Mood.Imp | imperative |
| Morpho.Feature.Mood.Cnd | conditional |
| Morpho.Feature.Mood.Pot | potential |
| Morpho.Feature.Mood.Sub | subjunctive |
| Morpho.Feature.Mood.Jus | jussive |
| Morpho.Feature.Mood.Prp | purposive |
| Morpho.Feature.Mood.Qot | quotative |
| Morpho.Feature.Mood.Opt | optative |
| Morpho.Feature.Mood.Des | desiderative |
| Morpho.Feature.Mood.Nec | necessitative |
| Morpho.Feature.Mood.Adm | admirative |

### Voice properties

It is an enumeration of different conjugation voices.
You can get it as shown in the following code:

```javascript
var V = Morpho.Feature.Voice;
console.log(V.A);
//will print: active
```

This is a table of available voices: access and string values

| Access | value |
| --- | --- |
| Morpho.Feature.Voice.A | active |
| Morpho.Feature.Voice.P | passive |
| Morpho.Feature.Voice.M | middle |

### Persons number properties

It is an enumeration of different persons numbers for personal pronouns.
You can get it as shown in the following code:

```javascript
var Num = Morpho.Feature.Number;
console.log(Num.P);
//will print: plural
```

This is a table of available numbers: access and string values

| Access | value |
| --- | --- |
| Morpho.Feature.Number.S | singular |
| Morpho.Feature.Number.D | dual |
| Morpho.Feature.Number.P | plural |

### Persons properties

It is an enumeration of different persons (first, second, third) for personal pronouns.
You can get it as shown in the following code:

```javascript
var P = Morpho.Feature.Person;
console.log(P.F);
//will print: first
```

This is a table of available numbers: access and string values

| Access | value |
| --- | --- |
| Morpho.Feature.Person.F | first |
| Morpho.Feature.Person.S | second |
| Morpho.Feature.Person.T | third |

### Gender properties

It is an enumeration of different genders for personal pronouns.
You can get it as shown in the following code:

```javascript
var G = Morpho.Feature.Gender;
console.log(G.F);
//will print: feminine
```

This is a table of available numbers: access and string values

| Access | value |
| --- | --- |
| Morpho.Feature.Gender.M | masculine |
| Morpho.Feature.Gender.F | feminine |
| Morpho.Feature.Gender.N | neuter |

## Conjugation

###  Conjugation forms

Each language has a set of conjugation forms, which are composed of mood, tense, aspect and other properties if necessary.
We can get the different forms of a language as an object with the form's name as key and the options as value. Here an example of an object with different conjugation forms:

```
{
  "Indicative present": {
    mood: Mood.Indi,
    tense: Tense.Pr,
    aspect: Aspect.S
  },
  "Indicative past": {
    mood: Mood.Indi,
    tense: Tense.Pa,
    aspect: Aspect.S
  },
  "Indicative future": {
    mood: Mood.Indi,
    tense: Tense.Fu,
    aspect: Aspect.S
  }
}
```

To get the forms :

```javascript
var forms = morpho.getForms();
```

English, for example:

```javascript
var morpho = new (JsLingua.getService("Morpho", "eng"))();
var forms = morpho.getForms();
```

### Pronouns

To get the list of pronouns options list ( a list of objects containing: person, number and gender properties):

```javascript
var pronounsOpts = morpho.getOptLists("Pronoun");
```

In English, this will return this:

```
[
  {person: "first", number: "singular"}, //I
  {person: "second"},//You
  {person: "third", number: "singular", gender: "masculine"},//He
  {person: "third", number: "singular", gender: "feminine"},//She
  {person: "third", number: "singular", gender: "neuter"},//It
  {person: "first", number: "plural"}, //We
  {person: "third", number: "plural"}//They
]
```

To get the name of the pronoun in its language:

```javascript
var pronoun = morpho.getOptName("Pronoun", <options>);
```

For example, if we want to get the English pronoun of the third person, plural, masculine:

```javascript
var opts = {
  person: "third",
  number: "plural",
  gender: "masculine" //we don't need this, actually
};
var pronoun = morpho.getOptName("Pronoun", opts);
//This will have: "They"
```

Or:

```javascript
var opts = {
  person: Morpho.Feature.Person.T,
  number: Morpho.Feature.Number.P,
  gender: Morpho.Feature.Gender.M //we don't need this, actually
};
var pronoun = morpho.getOptName("Pronoun", opts);
//This will have: "They"
```

### Voices

To get the list of voice options list ( a list of objects containing: person, number and gender properties):

```javascript
var voiceOpts = morpho.getOptLists("Voice");
```

In English, this will return this:

```
[
  {voice: "active"},
  {voice: "passive"}
]
```

To get the name of the voice in its language:

```javascript
var v = morpho.getOptName("Voice", <options>);
```

For example, if we want to get the passive voice:

```javascript
var opts = {
  voice: "passive"
};
var v = morpho.getOptName("Voice", opts);
//This will have: "Passive"
```

Or:

```javascript
var opts = {
  voice: Morpho.Feature.Voice.P
};
var v = morpho.getOptName("Voice", opts);
//This will have: "Passive"
```

### Negations

To get the list of voice options list ( a list of objects containing: person, number and gender properties):

```javascript
var negationOpts = morpho.getOptLists("Negation");
```

In English, this will return this:

```
[
  {negated:0}, //Positive
  {negated:1} //Negative
]
```

To get the name of the negative in its language:

```javascript
var n = morpho.getOptName("Negation", <options>);
```

For example, if we want to get non negative name:

```javascript
var opts = {
  negated:0
};
var n = morpho.getOptName("Negation", opts);
//This will have: "affirmative"
```

### Conjugate a verb

To conjugate a verb, we give the verb and the conjugation options to **conjugate** function, as follows:

```javascript
var conjugated = morpho.conjugate("<verb>", <options>);
```

For example, if we want to conjugate the verb **take** in "Indicative past continuous" form, negated and in passive voice with the pronoun **he**:

```javascript
//Instantiate the English Morpho class
var morpho = new (JsLingua.getService("Morpho", "eng"))();
var opts = {
  //Form properties
  mood: "indicative", // Morpho.Feature.Mood.Ind
  tense: "past", // Morpho.Feature.Tense.Pa
  aspect: "continuous", //Morpho.Feature.Aspect.C

  //negation and voice properties
  negated: 1,
  voice: "passive", //Morpho.Feature.Voice.P

  //pronoun properties
  person: "first", //Morpho.Feature.Person.F
  number: "singular", //Morpho.Feature.Number.S
  gender: "masculine" //Morpho.Feature.Gender.M

};
var conjugated = morpho.conjugate("take", opts);
//This will have: "was not being taken"
```

Please refer to Morpho of the language you use to see more options.

## Stemming

Stemming is the operation of chopping prefixes, suffixes and infixes out of a word.
Mostly, it gives a non vocabulary word.

### Stemming algorithms

To get the list of available stemming algorithms implemented for the language

```javascript
var stemList = morpho.availableStemmers();
```

It will return a list of strings referring stemmers names.

### Set the current stemmer

Before stemming you have to tell which stemming algorithm you want to use

```javascript
morpho.setCurrentStemmer("<stemmer's name>");
```

The stemmer's name must be one of the list afforded by the language

### Get a stemmer's description

```javascript
var desc = morpho.getStemmerDesc("<stemmer's name>");
```

### Stemming a word

```javascript
var stem = morpho.stem("<word>");
```

### Stemming example

Suppose we want to stem English words using "porterStemmer" which is available for English.

```javascript
var morpho = new (JsLingua.getService("Morpho", "eng"))();
morpho.setCurrentStemmer("porterStemmer");
console.log(morpho.stem("conditional"));
console.log(morpho.stem("allowance"));
```

The result will be:

```
condit
allow
```

## Normalization

It is the task of returning words to a standard unified format.
To normalize a word:

```javascript
var norm = morpho.normalize("<word>", <options>);
```

The options is a string which controls normalization of a language; But, you can use the function without options to normalize by default.

For example; In English:

```javascript
var norm = morpho.normalize("ain't");
//will have the value: "is not"
```

Options can be found in Arabic, if the string contains "voc", it will delete vocalization.
If it contains "alef", it will replace all alef variants with the simple alef.
If it contains "\_", it will delete tatweel.
There are other options, you can see them all in Arabic Morpho.

```javascript
var morpho = new (JsLingua.getService("Morpho", "ara"))();
var word = "أذهَــــــــب";
console.log(morpho.normalize(word, "voc"));//just vocalization
console.log(morpho.normalize(word, "alef"));//just alef
console.log(morpho.normalize(word, "_"));//just tatweel
console.log(morpho.normalize(word, "alef,_"));//alif and tatweel
console.log(morpho.normalize(word, "alef,voc"));//alif and vocalization
console.log(morpho.normalize(word));//default: all options
```

The result:

```
أذهــــــــب
اذهَــــــــب
أذهَب
اذهَب
اذهــــــــب
اذهب
```

## Words conversion

A list of tools to convert a word to another; for example: plurals, etc.

### conversion algorithms

To get the list of available conversion algorithms implemented for the language

```javascript
var convList = morpho.availablePosConverters();
```

It will return a list of strings referring converters names.

### Set the current converter

Before conversion, you have to tell which conversion algorithm you want to use

```javascript
morpho.setCurrentPosConverter("<converter's name>");
```

The converter's name must be one of the list afforded by the language

### Get a converter's description

```javascript
var desc = morpho.getPosConverterDesc("<converter's name>");
```

### Converting a word

```javascript
var convWord = morpho.convertPoS("<word>");
```

### conversion example

Suppose we want to convert English words using "singularToPlural" converter which is available for English.

```javascript
var morpho = new (JsLingua.getService("Morpho", "eng"))();
morpho.setCurrentPosConverter("singularToPlural");
console.log(morpho.convertPoS("ox"));
console.log(morpho.convertPoS("cat"));
console.log(morpho.convertPoS("cat"));
console.log(morpho.convertPoS("life"));
```

The result will be:

```
cats
oxen
lives
```

[Return to index](./index.md)
