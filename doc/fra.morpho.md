# French Morpho module

This module is used for morphological tasks such as stemming, conjugation, etc.

## Accessing

```javascript
const fraMorpho = JsLingua.gserv("morpho", "fra");
```

To shorten the code in the rest of this tutorial, we will define different morphological properties here:

```javascript
//Different global features
const Tense = fraMorpho.Tense,
      Mood = fraMorpho.Mood,
      Voice = fraMorpho.Voice,
      GNumber = fraMorpho.GNumber,
      Aspect = fraMorpho.Aspect,
      Gender = fraMorpho.Gender,
      Person = fraMorpho.Person;
```

## Conjugation

###  Conjugation forms

English module affords the following conjugation forms (we give the options of each)

#### Indicative Present (présent):

```javascript
let form = morpho.gform("pres");
```

```javascript
{
  mood: Mood.Ind, //"indicative"
  tense: Tense.Pr, //"present"
  aspect: Aspect.S //"simple"
}
```

#### Indicative Present perfect (passé composé):

```javascript
const form = fraMorpho.gform("pres_perf");
```

```javascript
{
  mood: Mood.Ind, //"indicative"
  tense: Tense.Pr, //"present"
  aspect: Aspect.P //"perfect"
}
```

#### Indicative Imperfect (imparfait):

```javascript
const form = fraMorpho.gform("imperf");
```

```javascript
{
  mood: Mood.Ind, //"indicative"
  tense: Tense.Pr, //"present"
  aspect: Aspect.I // "imperfect"
}
```

#### Indicative Pluperfect (plus-que-parfait):

```javascript
const form = fraMorpho.gform("pluperf");
```

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
const form = fraMorpho.gform("past");
```

```javascript
{
  mood: Mood.Ind, //"indicative"
  tense: Tense.Pa, //"past"
  aspect: Aspect.S //"simple"
}
```

#### Indicative Past perfect (passé antérieur):


```javascript
const form = fraMorpho.gform("past_perf");
```

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
const form = fraMorpho.gform("fut");
```

```javascript
{
  mood: Mood.Ind, //"indicative"
  tense: Tense.Fu, //"future"
  aspect: Aspect.S //"simple"
}
```

#### Indicative Future perfect (futur antérieur):


```javascript
const form = fraMorpho.gform("fut_perf");
```

```javascript
{
  mood: Mood.Ind, //"indicative"
  tense: Tense.Fu, //"future"
  aspect: Aspect.P //"perfect"
}
```

#### Subjunctive Present:


```javascript
const form = fraMorpho.gform("subj_pres");
```

```javascript
{
  mood: Mood.Sub, //"subjective"
  tense: Tense.Pr, //"present"
  aspect: Aspect.S //"simple"
}
```

#### Subjunctive Past (passé):


```javascript
const form = fraMorpho.gform("subj_past");
```

```javascript
{
  mood: Mood.Sub, //"subjective"
  tense: Tense.Pa, //"past"
  aspect: Aspect.S //"simple"
}
```

#### Subjunctive Imperfect:


```javascript
const form = fraMorpho.gform("subj_imperf");
```

```javascript
{
  mood: Mood.Sub, //"subjective"
  tense: Tense.Pr, //"present"
  aspect: Aspect.I //"imperfect"
}
```

#### Subjunctive Pluperfect:


```javascript
const form = fraMorpho.gform("subj_pluperf");
```

```javascript
{
  mood: Mood.Sub, //"subjective"
  tense: Tense.Pa, //"past"
  aspect: Aspect.P //"perfect"
}
```

#### Imperative Present:


```javascript
const form = fraMorpho.gform("imp_pres");
```

```javascript
{
  mood: Mood.Imp, //"imperative"
  tense: Tense.Pr //"present"
}
```

#### Imperative Past:


```javascript
const form = fraMorpho.gform("imp_past");
```

```javascript
{
  mood: Mood.Imp, //"imperative"
  tense: Tense.Pa //"past"
}
```

#### Conditional Present:


```javascript
const form = fraMorpho.gform("cond_pres");
```

```javascript
{
  mood: Mood.Cnd, //"conditional"
  tense: Tense.Pr //"present"
}
```

#### Conditional Past (form 1):


```javascript
const form = fraMorpho.gform("cond_past1");
```

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
const form = fraMorpho.gform("cond_past2");
```

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

#### You (singular)

```javascript
{
  person: Person.S, // "second"
  number: GNumber.S // "singular"
}
```

#### You (plural)

```javascript
{
  person: Person.S, // "second"
  number: GNumber.P // "plural"
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

#### They (masculine)

```javascript
{
  person: Person.T, // "third"
  number: GNumber.P, // "plural", even "dual" will work as "plural"
  gender: Gender.M // "masculine"
}
```

#### They (feminine)

```javascript
{
  person: Person.T, // "third"
  number: GNumber.P, // "plural", even "dual" will work as "plural"
  gender: Gender.F // "feminine"
}
```

### Voices

French module affords passive and active voices

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

French module affords negative conjugation. In case of affirmative, just ignore this property

```javascript
{
  negated: 1
}
```

### Conjugation examples

Let's conjugate the verb "aller" in indicative mood , present tense, perfect aspect (which is passé composé) with the pronoun "They (feminine)".

Then, we conjugate it with the pronoun "We".

After that, we conjugate it with the pronoun "I", in "plus-que-parfait": indicative mood, past tense, perfect aspect, long period.

Next, we conjugate it with the pronoun "You (singular)", in "passé antérieur": same as "plus-que-parfait" but short period.

Finally, we conjugate it in "Subjunctive past": subjunctive mood, past tense, simple aspect; with the pronoun "You (singular)".

```javascript
const verb = "aller";
const opts = {
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
console.log(fraMorpho.conj(verb, opts));
//console.log(fraMorpho.conjugate(verb, opts));

//gender doesn't apply with "we", so let it be
opts.person = "first"; //we
console.log("=== Nous: Passé composé ===");
console.log(fraMorpho.conj(verb, opts));

opts.number = "singular"; //I
opts.tense = "past";
opts.period = "long";
console.log("=== Je: plus-que-parfait ===");
console.log(fraMorpho.conj(verb, opts));

opts.person = "second";
opts.period = "short";
console.log("=== Tu: passé antérieur ===");
console.log(fraMorpho.conj(verb, opts));

opts.mood = "subjunctive";
opts.aspect = "simple";
console.log("=== Tu: subjonctif passé ===");
console.log(fraMorpho.conj(verb, opts));
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
//jslingua < 0.9.0 use "snowballFrStemmer"
fraMorpho.sstem("snowball");
```

### Stemming examples

```javascript
fraMorpho.sstem("snowball");
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

## Word conversion

### conversion algorithms

For now, French Morpho affords one conversion algorithm

#### Singular to Plural

```javascript
//jslingua < 0.9.0 use "singularToPlural"
fraMorpho.sconv("sing2pl");
//fraMorpho.setCurrentPosConverter("sing2pl");
```

### conversion examples

```javascript
fraMorpho.sconv("sing2pl");
console.log(engMorpho.conv("souris"));
//console.log(engMorpho.convertPoS("souris"));
console.log(engMorpho.conv("nez"));
console.log(engMorpho.conv("clou"));
console.log(engMorpho.conv("chou"));
console.log(engMorpho.conv("cheval"));
console.log(engMorpho.conv("chacal"));
console.log(engMorpho.conv("travail"));
console.log(engMorpho.conv("bateau"));
console.log(engMorpho.conv("landau"));
console.log(engMorpho.conv("arbre"));
```

The result will be:

```
souris
nez
clous
choux
chevaux
chacals
travaux
bateaux
landaus
arbres
```

[Return to index](./index.md)
