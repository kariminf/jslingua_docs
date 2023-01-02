# Arabic Morpho module

This module is used for morphological tasks such as stemming, conjugation, etc.

## Accessing

```javascript
const araMorpho = JsLingua.gserv("morpho", "ara");
```

To shorten the code in the rest of this tutorial, we will define different morphological properties here:

```javascript
//Different global features
var Tense = araMorpho.Tense,
    Mood = araMorpho.Mood,
    Voice = araMorpho.Voice,
    GNumber = araMorpho.GNumber,
    Aspect = araMorpho.Aspect,
    Gender = araMorpho.Gender,
    Person = araMorpho.Person;
```

## Conjugation

###  Conjugation forms

Arabic module affords the following conjugation forms (we give the options of each).

```javascript
const forms = araMorpho.lform();
```

#### Indicative present:

To get the present form:

```javascript
const form = araMorpho.gform("pres");
```

```javascript
{
  mood: Mood.Ind, // "indicative"
  tense: Tense.Pr // "present"
}
```

#### Indicative past:

```javascript
const form = araMorpho.gform("past");
```

```javascript
{
  mood: Mood.Ind, // "indicative"
  tense: Tense.Pa // "past"
}
```

#### Indicative future:

```javascript
const form = araMorpho.gform("fut");
```

```javascript
{
  mood: Mood.Ind, // "indicative"
  tense: Tense.Fu // "future"
}
```

#### Imperative

```javascript
const form = araMorpho.gform("imp");
```

```javascript
{
  mood: Mood.Imp // "imperative"
}
```

### Pronouns

In Arabic, the pronouns follow: person, number and gender properties

#### I

```javascript
{
  person: Person.F, // "first"
  number: GNumber.S // "singular"
}
```

#### We

```javascript
{
  person: Person.F, // "first"
  number: GNumber.P // "plural"
}
```

#### You (singular, masculine)

```javascript
{
  person: Person.S, // "second"
  number: GNumber.S, // "singular"
  gender: Gender.M // "masculine"
}
```

#### You (singular, feminine)

```javascript
{
  person: Person.S, // "second"
  number: GNumber.S, // "singular"
  gender: Gender.F // "feminine"
}
```

#### You (dual, masculine)

```javascript
{
  person: Person.S, // "second"
  number: GNumber.D, // "dual"
  gender: Gender.M // "masculine"
}
```

#### You (dual, feminine)

```javascript
{
  person: Person.S, // "second"
  number: GNumber.D, // "dual"
  gender: Gender.F // "feminine"
}
```

#### You (plural, masculine)

```javascript
{
  person: Person.S, // "second"
  number: GNumber.P, // "plural"
  gender: Gender.M // "masculine"
}
```

#### You (plural, feminine)

```javascript
{
  person: Person.S, // "second"
  number: GNumber.P, // "plural"
  gender: Gender.F // "feminine"
}
```

#### He

```javascript
{
  person: Person.T, // "third"
  number: GNumber.S, // "singular"
  gender: Gender.M // "masculine"
}
```

#### She

```javascript
{
  person: Person.S, // "third"
  number: GNumber.S, // "singular"
  gender: Gender.F // "feminine"
}
```

#### They (dual, masculine)

```javascript
{
  person: Person.T, // "third"
  number: GNumber.D, // "dual"
  gender: Gender.M // "masculine"
}
```

#### They (dual, feminine)

```javascript
{
  person: Person.T, // "they"
  number: GNumber.D, // "dual"
  gender: Gender.F // "feminine"
}
```

#### They (plural, masculine)

```javascript
{
  person: Person.T, // "third"
  number: GNumber.P, // "plural"
  gender: Gender.M // "masculine"
}
```

#### They (plural, feminine)

```javascript
{
  person: Person.T, // "third"
  number: GNumber.P, // "plural"
  gender: Gender.F // "feminine"
}
```

### Voices

Arabic module affords passive and active voices

```javascript
{
  voice: Voice.A //"active"
}
```

```javascript
{
  voice: Voice.P //"passive"
}
```

### Negations

Arabic module affords negative conjugation. In case of affirmative, just ignore this property

```
{
  negated:1
}
```

### Conjugation examples

Let's conjugate the verb "استعمل" in indicative mood (default), present tense, affirmative (default), active voice (default), with the pronoun "They (plural, masculine)".

Then, we conjugate it with the pronoun "They (plural, feminine)" in the past tense.

After that, we conjugate it with the pronoun "She" in the past tense, negative, passive voice

```javascript
const verb = "استعمل";
const opts = {
  //Form properties
  tense: "present",

  //negation and voice properties
  //no need (defaults)

  //pronoun properties
  person: "third",
  number: "plural",
  gender: "masculine"

};
console.log(araMorpho.conj(verb, opts));
//Or, console.log(araMorpho.conjugate(verb, opts));

opts.gender = "feminine";
opts.tense = "past";
console.log(araMorpho.conj(verb, opts));
//Or, console.log(araMorpho.conjugate(verb, opts));

opts.number = "singular";
opts.negated = 1;
opts.voice = "passive";
console.log(araMorpho.conj(verb, opts));
// Or, console.log(araMorpho.conjugate(verb, opts));
```

The result:

```
يَستعمِلُونَ
استَعمَلْنَ
لَمْ تُستعمَلْ
```

Let's conjugate the verb "دعى" in indicative mood (default), past tense, affirmative (default), active voice (default), with the pronoun "You (singular, masculine)".

Then, in imperative mood

After that, in imperative mood, negated

Next, in indicative mood, past tense, negative, with the pronoun "You (dual, masculine)".

Finally, in indicative mood, past tense, negative, with the pronoun "They (dual, masculine)".

```javascript
const verb = "دعى";
const opts = {
  //Form properties
  //mood: "indicative",
  tense: "past",

  //negation and voice properties
  //no need (defaults)

  //pronoun properties
  person: "second",
  number: "singular",
  gender: "masculine"

};
console.log(araMorpho.conj(verb, opts));

opts.mood = "imperative";//this will ignore tense
console.log(araMorpho.conj(verb, opts));

opts.negated = 1;//negation is not ignored by imperative mood
console.log(araMorpho.conj(verb, opts));

opts.mood = "indicative";//this will take tense in consideration
opts.number = "dual";
console.log(araMorpho.conj(verb, opts));

opts.person = "third";
console.log(araMorpho.conj(verb, opts));
```

```
دَعَيْتَ
ادْعِ
لَا تَدْعِ
لَمْ تَدْعِيَا
لَمْ يَدْعِيَا
```

You can check the code here: [https://runkit.com/kariminf/arabic-conjugation-1](https://runkit.com/kariminf/arabic-conjugation-1)

## Stemming

### Stemming algorithms

For now, Arabic Morpho affords two stemming Algorithms

#### ISRI Arabic stemmer

A reimplementation of ISRI Arabic stemmer in javascript.

```javascript
//in jaslingua < 0.9.0 use "IsriAraStemmer"
araMorpho.sstem("isri");
//Or, araMorpho.setCurrentStemmer("isri");
```

#### JsLingua Arabic stemmer

A modest stemmer for Arabic; In its beginning

```javascript
//in jaslingua < 0.9.0 use "jslinguaAraStemmer"
araMorpho.sstem("jslingua");
//Or, araMorpho.setCurrentStemmer("jslingua");
```

### Stemming examples

```javascript
araMorpho.sstem("isri");
console.log(araMorpho.stem("أتكلمونني"));
console.log(araMorpho.stem("فراشات"));
console.log(araMorpho.stem("فرشاة"));
console.log(araMorpho.stem("استفاق"));
```
The result will be:

```
كلمو
فرش
فرش
فاق
```

You can check the code here: [https://runkit.com/kariminf/jslingua-arabic-stemming-test-1](https://runkit.com/kariminf/jslingua-arabic-stemming-test-1)

## Normalization

In Arabic Morpho normalization, there are many options:

* "voc": delete vocalization
* "alef": Replace all alef variants with the simple alef
* "ihamza": Replace all beginning hamza variants with the simple alef
* "yeh": Relace the alif maqsorah with yeh
* "teh": Replace teh marbuta with heh
* "\_": Delete tatweel

The options are passed as a string; For many options, just separate them with a comma.

Here, is an example of normalization

```javascript
let word = "أذهَــــــــب";
// use normalize or norm (the same thing)
console.log(araMorpho.norm(word, "voc"));//just vocalization
console.log(araMorpho.norm(word, "alef"));//just alef
console.log(araMorpho.norm(word, "_"));//just tatweel
console.log(araMorpho.norm(word, "alef,_"));//alif and tatweel
console.log(araMorpho.norm(word, "alef,voc"));//alif and vocalization
console.log(araMorpho.norm(word));//default: all options

word = "دَعَـــــــى";
console.log(araMorpho.norm(word, "yeh"));//just yeh
console.log(araMorpho.norm(word, "_"));//just tatweel
console.log(araMorpho.norm(word));//default: all options

word = "أَداة";
console.log(araMorpho.norm(word, "yeh"));//just yeh
console.log(araMorpho.norm(word, "teh"));//just teh
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
دَعَـــــــي
دَعَى
دعي
أَداة
أَداه
اداه
```

You can check the code here: [https://runkit.com/kariminf/jslingua-arabic-normalization-test-1](https://runkit.com/kariminf/jslingua-arabic-normalization-test-1)

## Word conversion

### conversion algorithms

For now, Arabic Morpho affords two conversion Algorithms

#### Singular to Plural

It is not complete; It just convert regular nouns

```javascript
//in jslingua < 0.9.0 use "singularToPlural"
araMorpho.sconv("sing2pl");
```

#### Singular to Dual

It is not complete; It just convert regular nouns

```javascript
//in jslingua < 0.9.0 use "singularToDual"
araMorpho.sconv("sing2dual");
```

### conversion examples

```javascript
araMorpho.sconv("sing2pl");
console.log(araMorpho.conv("معلم"));
console.log(araMorpho.conv("معلمة"));
araMorpho.sconv("sing2dual");
console.log(araMorpho.conv("معلم"));
console.log(araMorpho.conv("معلمة"));
```
The result will be:

```
معلمون
معلمات
معلمان
معلمتان
```


[Return to index](./index.md)
