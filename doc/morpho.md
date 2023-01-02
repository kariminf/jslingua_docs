# Morpho module

This module is used for morphological tasks such as stemming, conjugation, etc.


## Access a language implementation of the module

```javascript
const Morpho = JsLingua.gserv("morpho", "<langCode>");
```

## Access Morpho properties

These properties are used for conjugation, transformation, etc.

### Tense properties

It is an enumeration of different tenses.
You can get it as shown in the following code:

```javascript
const T = Morpho.Tense;
console.log(T.Pa);
//will print: past
```

This is a table of available tenses: access and string values

| Access | value |
| --- | --- |
| Morpho.Tense.Pa | past |
| Morpho.Tense.Pr | present |
| Morpho.Tense.Fu | future |

### Aspect properties

It is an enumeration of different aspects.
You can get it as shown in the following code:

```javascript
const A = Morpho.Aspect;
console.log(A.S);
//will print: simple
```

This is a table of available aspects: access and string values

| Access | value |
| --- | --- |
| Morpho.Aspect.S | simple |
| Morpho.Aspect.C | continuous |
| Morpho.Aspect.P | perfect |
| Morpho.Aspect.PC | perfect-continuous |
| Morpho.Aspect.I | imperfect |

### Mood properties

It is an enumeration of different moods.
You can get it as shown in the following code:

```javascript
const M = Morpho.Mood;
console.log(M.Ind);
//will print: indicative
```

This is a table of available moods: access and string values

| Access | value |
| --- | --- |
| Morpho.Mood.Ind | indicative |
| Morpho.Mood.Imp | imperative |
| Morpho.Mood.Cnd | conditional |
| Morpho.Mood.Pot | potential |
| Morpho.Mood.Sub | subjunctive |
| Morpho.Mood.Jus | jussive |
| Morpho.Mood.Prp | purposive |
| Morpho.Mood.Qot | quotative |
| Morpho.Mood.Opt | optative |
| Morpho.Mood.Des | desiderative |
| Morpho.Mood.Nec | necessitative |
| Morpho.Mood.Adm | admirative |

### Voice properties

It is an enumeration of different conjugation voices.
You can get it as shown in the following code:

```javascript
const V = Morpho.Voice;
console.log(V.A);
//will print: active
```

This is a table of available voices: access and string values

| Access | value |
| --- | --- |
| Morpho.Voice.A | active |
| Morpho.Voice.P | passive |
| Morpho.Voice.M | middle |

### Persons number properties

It is an enumeration of different persons numbers for personal pronouns.
You can get it as shown in the following code:

```javascript
const Num = Morpho.GNumber;
console.log(Num.P);
//will print: plural
```

This is a table of available numbers: access and string values

| Access | value |
| --- | --- |
| Morpho.GNumber.S | singular |
| Morpho.GNumber.D | dual |
| Morpho.GNumber.P | plural |

### Persons properties

It is an enumeration of different persons (first, second, third) for personal pronouns.
You can get it as shown in the following code:

```javascript
const P = Morpho.Person;
console.log(P.F);
//will print: first
```

This is a table of available numbers: access and string values

| Access | value |
| --- | --- |
| Morpho.Person.F | first |
| Morpho.Person.S | second |
| Morpho.Person.T | third |

### Gender properties

It is an enumeration of different genders for personal pronouns.
You can get it as shown in the following code:

```javascript
const G = Morpho.Gender;
console.log(G.F);
//will print: feminine
```

This is a table of available numbers: access and string values

| Access | value |
| --- | --- |
| Morpho.Gender.M | masculine |
| Morpho.Gender.F | feminine |
| Morpho.Gender.N | neuter |

## Conjugation

###  Conjugation forms

Each language has a set of conjugation forms, which are composed of mood, tense, aspect and other properties if necessary.
We can get the different forms of a language as an object with the form's name as key and the options as value. Here an example of an object with different conjugation forms:

```
{
  "pres": {
    desc: "Indicative present",
    mood: Mood.Indi,
    tense: Tense.Pr,
    aspect: Aspect.S
  },
  "past": {
    desc: "Indicative past",
    mood: Mood.Indi,
    tense: Tense.Pa,
    aspect: Aspect.S
  },
  "fut": {
    desc: "Indicative future",
    mood: Mood.Indi,
    tense: Tense.Fu,
    aspect: Aspect.S
  }
}
```

To get the forms :

```javascript
const forms = Morpho.lform();
```

To get a specific form:

```javascript
const form = Morpho.gform(<formName>);
```

To get its description:

```javascript
const form_desc = Morpho.gformdesc(<formName>);
```

English, for example:

```javascript
const engMorpho = JsLingua.gserv("morpho", "eng");//get service
const forms = engMorpho.lform();//list forms
const pres_form = engMorpho.gform("pres");//will contain the form specifications for present
const pres_formDesc = engMorpho.gformdesc("pres"); //== Indicative present
```

### Pronouns

To get the list of pronouns options list ( a list of objects containing: person, number and gender properties):

```javascript
const pronounsOpts = Morpho.lconjopt("Pronoun");
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
let pronoun = morpho.gconjoptname("Pronoun", <options>);
//var pronoun = morpho.getOptName("Pronoun", <options>);
```

For example, if we want to get the English pronoun of the third person, plural, masculine:

```javascript
const opts = {
  person: "third",
  number: "plural",
  gender: "masculine" //we don't need this, actually
};
let pronoun = Morpho.gconjoptname("Pronoun", opts);
//This will have: "They"
```

Or:

```javascript
const opts = {
  person: Morpho.Person.T,
  number: Morpho.Number.P,
  gender: Morpho.Gender.M //we don't need this, actually
};
let pronoun = morpho.gconjoptname("Pronoun", opts);
//This will have: "They"
```

### Voices

To get the list of voice options list ( a list of objects containing: person, number and gender properties):

```javascript
const voiceOpts = Morpho.lconjopt("Voice");
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
let v = morpho.gconjoptname("Voice", <options>);
```

For example, if we want to get the passive voice:

```javascript
const opts = {
  voice: "passive"
};
let v = Morpho.gconjoptname("Voice", opts);
//This will have: "Passive"
```

Or:

```javascript
const opts = {
  voice: Morpho.Voice.P
};
let v = Morpho.gconjoptname("Voice", opts);
//This will have: "Passive"
```

### Negations

To get the list of voice options list ( a list of objects containing: person, number and gender properties):

```javascript
const negationOpts = Morpho.lconjopt("Negation");
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
let n = Morpho.gconjoptname("Negation", <options>);
```

For example, if we want to get non negative name:

```javascript
const opts = {
  negated:0
};
let n = Morpho.gconjoptname("Negation", opts);
//This will have: "affirmative"
```

### Get a verb's type

```javascript
let type = Morpho.gconjoptname("Negation", <options>);
```

### Conjugate a verb

To conjugate a verb, we pass its infinitive form and conjugation options to **conj** function, as follows:

```javascript
let conjugated = Morpho.conj("<verb>", <options>, [<form_name>]);
```

The options is an object with: mood, tense, aspect, negated, voice, person, number, gender, etc. properties.
If the form name is afforded, the properties of the options object will be override by the forms properties.

For example, if we want to conjugate the verb **take** in "Indicative past continuous" form, negated and in passive voice with the pronoun **he**:

```javascript
//Instantiate the English Morpho class
const engMorpho = JsLingua.gserv("morpho", "eng");
const opts = {
  //Form properties
  mood: "indicative", // Morpho.Mood.Ind
  tense: "past", // Morpho.Tense.Pa
  aspect: "continuous", //Morpho.Aspect.C

  //negation and voice properties
  negated: 1,
  voice: "passive", //Morpho.Voice.P

  //pronoun properties
  person: "first", //Morpho.Person.F
  number: "singular", //Morpho.Number.S
  gender: "masculine" //Morpho.Gender.M

};
let conjugated = engMorpho.conj("take", opts);
//This will have: "was not being taken"
```

Please refer to Morpho of the language you use to see more options.

## Stemming

Stemming is the operation of chopping prefixes, suffixes and infixes out of a word.
Mostly, it gives a non vocabulary word.

### Stemming algorithms

To get the list of available stemmers' names, use the method **lstem()**

```javascript
const stemList = Morpho.lstem();
//var stemList = morpho.availableStemmers();
```

It will return a list of strings referring stemmers names.

### Get a stemmer's description

```javascript
let desc = Morpho.gstemdesc("<stemmer's name>");
```

### Set the current stemmer

Before stemming you have to select the stemming algorithm using **sstem**

```javascript
Morpho.sstem("<stemmer's name>");
```

The stemmer's name must be one from the list afforded by the language.


### Stemming a word

```javascript
let stem = Morpho.stem("<word>");
```

### Stemming example

Suppose we want to stem English words using "porter" which is available for English.

```javascript
const engMorpho = JsLingua.gserv("morpho", "eng");
engMorpho.sstem("porter");
console.log(engMorpho.stem("conditional"));
console.log(engMorpho.stem("allowance"));
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
let norm = Morpho.norm("<word>", <options>);
```

The "options" is a string which controls normalization of a language; But, you can use the function without options to normalize by default.

For example; In English:

```javascript
let norm = Morpho.norm("ain't");
//will have the value: "is not"
```

Options can be found in Arabic, if the string contains "voc", it will delete vocalization.
If it contains "alef", it will replace all alef variants with the simple alef.
If it contains "\_", it will delete tatweel.
There are other options, you can see them all in Arabic Morpho.

```javascript
const araMorpho = JsLingua.gserv("morpho", "ara");
const word = "أذهَــــــــب";
console.log(araMorpho.norm(word, "voc"));//just vocalization
console.log(araMorpho.norm(word, "alef"));//just alef
console.log(araMorpho.norm(word, "_"));//just tatweel
console.log(araMorpho.norm(word, "alef,_"));//alif and tatweel
console.log(araMorpho.norm(word, "alef,voc"));//alif and vocalization
console.log(araMorpho.norm(word));//default: all options
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

### conversion algorithms list

To get the list of available conversion algorithms implemented for the language

```javascript
const convList = Morpho.lconv();
```

It will return a list of strings referring converters names.

### Set the current converter

Before conversion, you have to tell which conversion algorithm you want to use

```javascript
Morpho.sconv("<converter's name>");
```

The converter's name must be in the list afforded by the language

### Get a converter's description

```javascript
let desc = Morpho.gconvdesc("<converter's name>");
```

### Converting a word

After setting the current converter, this function can be called

```javascript
let convWord = Morpho.conv("<word>");
```

### conversion example

Suppose we want to convert English words using "sing2pl" converter which is available for English.

```javascript
const engMorpho = JsLingua.nserv("morpho", "eng");
engMorpho.sconv("sing2pl");
console.log(engMorpho.conv("ox"));
console.log(engMorpho.conv("cat"));
console.log(engMorpho.conv("cat"));
console.log(engMorpho.conv("life"));
```

The result will be:

```
cats
oxen
lives
```

## Text segmentation

Sentence segmentation and word tokenization.

### Sentence segmentation

```javascript
let sentences = Morpho.gsents("<text>");
```

### Word tokenization

```javascript
let words = Morpho.gwords("<text>");
```

### Segmentation example

```javascript
const engMorpho = JsLingua.gserv("morpho", "eng");
const text = "I've seen Dr. Watson. Is he good?";
console.log(engMorpho.gsents(text));
console.log(engMorpho.gwords(text));
```
The result will be:

```
[ "I've seen Dr. Watson", '.', 'Is he good', '?' ]
[ "I've", 'seen', 'Dr.', 'Watson.', 'Is', 'he', 'good?' ]
```

## Stop Words Filtering

Deleting stop words from a given list of words.
Either using default stop word list

```javascript
let filtered_words = Morpho.filter(<list-words>);
```

Or, by affording a list of stop words

```javascript
let filtered_words = Morpho.filter(<list-words>, <list-of-stop-words>);
```

For example:




[Return to index](./index.md)
