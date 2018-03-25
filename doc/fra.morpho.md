# French Morpho module

This module is used for morphological tasks such as stemming, conjugation, etc.

## Accessing

```javascript
var fraMorpho = new (JsLingua.getService("Morpho", "fra"))();
```

To shorten the code in the rest of this tutorial, we will define different morphological properties here:

```javascript
var Morpho = JsLingua.Cls.Morpho;
//Different global features
var F = Morpho.Feature,
    Tense = F.Tense,
    Mood = F.Mood,
    Voice = F.Voice,
    GNumber = F.Number,
    Aspect = F.Aspect,
    Gender = F.Gender,
    Person = F.Person;
```

## Conjugation

###  Conjugation forms

English module affords the following conjugation forms (we give the options of each)

#### Indicative Present (présent):

```javascript
{
  mood: Mood.Ind, //"indicative"
  tense: Tense.Pr, //"present"
  aspect: Aspect.S //"simple"
}
```

#### Indicative Present perfect (passé composé):

```javascript
{
  mood: Mood.Ind, //"indicative"
  tense: Tense.Pr, //"present"
  aspect: Aspect.P //"perfect"
}
```

#### Indicative Imperfect (imparfait):

```javascript
{
  mood: Mood.Ind, //"indicative"
  tense: Tense.Pr, //"present"
  aspect: Aspect.I // "imperfect"
}
```

#### Indicative Pluperfect (plus-que-parfait):

It is a past action, ended, with a long period of time and anterior to another past action.
Here, we add the property "period" to differentiate this from "passé antérieur".

```javascript
{
  mood: Mood.Ind, //"indicative"
  tense: Tense.Pa, //"past"
  aspect: Aspect.P, //"perfect"
  period: "long"
}
```

#### Indicative Simple past (passé simple):

```javascript
{
  mood: Mood.Ind, //"indicative"
  tense: Tense.Pa, //"past"
  aspect: Aspect.S //"simple"
}
```

#### Indicative Past perfect (passé antérieur):

```javascript
{
  mood: Mood.Ind, //"indicative"
  tense: Tense.Pa, //"past"
  aspect: Aspect.P, //"perfect"
  period: "short"
}
```

#### Indicative Simple future (futur simple):

```javascript
{
  mood: Mood.Ind, //"indicative"
  tense: Tense.Fu, //"future"
  aspect: Aspect.S //"simple"
}
```

#### Indicative Future perfect (futur antérieur):

```javascript
{
  mood: Mood.Ind, //"indicative"
  tense: Tense.Fu, //"future"
  aspect: Aspect.P //"perfect"
}
```

#### Subjunctive Present:

```javascript
{
  mood: Mood.Sub, //"subjective"
  tense: Tense.Pr, //"present"
  aspect: Aspect.S //"simple"
}
```

#### Subjunctive Past (passé):

```javascript
{
  mood: Mood.Sub, //"subjective"
  tense: Tense.Pa, //"past"
  aspect: Aspect.S //"simple"
}
```

#### Subjunctive Imperfect:

```javascript
{
  mood: Mood.Sub, //"subjective"
  tense: Tense.Pr, //"present"
  aspect: Aspect.I //"imperfect"
}
```

#### Subjunctive Pluperfect:

```javascript
{
  mood: Mood.Sub, //"subjective"
  tense: Tense.Pa, //"past"
  aspect: Aspect.P //"perfect"
}
```

#### Imperative Present:

```javascript
{
  mood: Mood.Imp, //"imperative"
  tense: Tense.Pr //"present"
}
```

#### Imperative Past:

```javascript
{
  mood: Mood.Imp, //"imperative"
  tense: Tense.Pa //"past"
}
```

#### Conditional Present:

```javascript
{
  mood: Mood.Cnd, //"conditional"
  tense: Tense.Pr //"present"
}
```

#### Conditional Past (form 1):

There are two forms of conditional past; this is why we used another property "form".

```javascript
{
  mood: Mood.Cnd, //"conditional"
  tense: Tense.Pa, //"past"
  form: 1
}
```

#### Conditional Past (form 2):

```javascript
{
  mood: Mood.Cnd, //"conditional"
  tense: Tense.Pa, //"past"
  form: 2
}
```

### Pronouns

In French, the pronouns follow: person, number and gender properties

#### I

```javascript
{
  person:Person.F, // "first"
  number: GNumber.S // "singular"
}
```

#### We

```javascript
{
  person:Person.F, // "first"
  number: GNumber.P // "plural"
}
```

#### You (singular)

```javascript
{
  person:Person.S, // "second"
  number: GNumber.S // "singular"
}
```

#### You (plural)

```javascript
{
  person:Person.S, // "second"
  number: GNumber.P // "plural"
}
```

#### He

```javascript
{
  person:Person.T, // "third"
  number: GNumber.S, // "singular"
  gender: Gender.M // "masculine"
}
```

#### She

```javascript
{
  person:Person.S, // "third"
  number: GNumber.S, // "singular"
  gender: Gender.F // "feminine"
}
```

#### They (masculine)

```javascript
{
  person:Person.T, // "third"
  number: GNumber.P, // "plural", even "dual" will work as "plural"
  gender: Gender.M // "masculine"
}
```

#### They (feminine)

```javascript
{
  person:Person.T, // "third"
  number: GNumber.P, // "plural", even "dual" will work as "plural"
  gender: Gender.F // "feminine"
}
```

### Voices

The module affords just active voice (for now)

### Negations

The module affords affirmative conjugation.

### Conjugation examples

Let's conjugate the verb "aller" in indicative mood , present tense, perfect aspect (which is passé composé) with the pronoun "They (feminine)".

Then, we conjugate it with the pronoun "We".

After that, we conjugate it with the pronoun "I", in "plus-que-parfait": indicative mood, past tense, perfect aspect, long period.

Next, we conjugate it with the pronoun "You (singular)", in "passé antérieur": same as "plus-que-parfait" but short period.

Finally, we conjugate it in "Subjunctive past": subjunctive mood, past tense, simple aspect; with the pronoun "You (singular)".

```javascript
var verb = "aller";
var opts = {
  //Form properties
  mood: "indicative",
  tense: "present",
  aspect: "perfect",

  //pronoun properties
  person: "third",
  number: "plural",
  gender: "feminine"
};
console.log("=== Elles: Passé composé ===");
console.log(fraMorpho.conjugate(verb, opts));

//gender doesn't apply with "we", so let it be
opts.person = "first"; //we
console.log("=== Nous: Passé composé ===");
console.log(fraMorpho.conjugate(verb, opts));

opts.number = "singular"; //I
opts.tense = "past";
opts.period = "long";
console.log("=== Je: plus-que-parfait ===");
console.log(fraMorpho.conjugate(verb, opts));

opts.person = "second";
opts.period = "short";
console.log("=== Tu: passé antérieur ===");
console.log(fraMorpho.conjugate(verb, opts));

opts.mood = "subjunctive";
opts.aspect = "simple";
console.log("=== Tu: subjonctif passé ===");
console.log(fraMorpho.conjugate(verb, opts));
```

The result:

```
=== Elles: Passé composé ===
sont allées
=== Nous: Passé composé ===
allons
=== Je: plus-que-parfait ===
allai
=== Tu: passé antérieur ===
allas
=== Tu: subjonctif passé ===
sois allée
```

Let's conjugate the verb "choisir" with the same steps .
The result, will be

```
=== Elles: Passé composé ===
ont choisi
=== Nous: Passé composé ===
choisissons
=== Je: plus-que-parfait ===
choisis
=== Tu: passé antérieur ===
choisis
=== Tu: subjonctif passé ===
aies choisi
```

You can check the code here: [https://runkit.com/kariminf/jslingua-french-conjugation-test-1](https://runkit.com/kariminf/jslingua-french-conjugation-test-1)

## Stemming

### Stemming algorithms

For now, French Morpho affords one stemming Algorithm

#### French Snowball stemmr

```javascript
araMorpho.setCurrentStemmer("snowballFrStemmer");
```

### Stemming examples

```javascript
fraMorpho.setCurrentStemmer("snowballFrStemmer");
console.log(fraMorpho.stem("continué"));
console.log(fraMorpho.stem("continuelle"));
console.log(fraMorpho.stem("continuellement"));
console.log(fraMorpho.stem("contournait"));
console.log(fraMorpho.stem("majestueusement"));
console.log(fraMorpho.stem("majorités"));
```
The result will be:

```
continu
continuel
continuel
contourn
majestu
major
```

## Normalization

For now, no normalization.

[Return to index](./index.md)
