# Japanese Morpho module

This module is used for morphological tasks such as stemming, conjugation, etc.

## Accessing

```javascript
let jpnMorpho = JsLingua.nserv("morpho", "jpn");
//let jpnMorpho = new (JsLingua.getService("morpho", "jpn"))();
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

Japanese module affords the following conjugation forms (we give the options of each).
It integrates conjugation voice, so no need to present it later.

#### Present:

```javascript
{ // go
  tense: Tense.Pr
}
```

#### Past:

```javascript
{ //went
  tense: Tense.Pa
}
```

#### Present continuous:

```javascript
{ //is going
  tense: Tense.Pr,
  aspect: Aspect.C
}
```

#### Past continuous:

```javascript
{//was going
  tense: Tense.Pa,
  aspect: Aspect.C
}
```

#### Provision:

```javascript
{//First type of condition
  mood: Mood.Cnd,
  cond: "ba"
}
```

#### Condition:

```javascript
{ //Second type of condition
  mood: Mood.Cnd,
  cond: "tara"
}
```

#### Imperative:

```javascript
{// go
  mood: Mood.Imp
}
```

#### Volitional:

```javascript
{//let's go //Optative mood
  mood: Mood.Opt
}
```

#### Causative:

```javascript
{// make go
  cause: 1
}
```

#### Potential:

```javascript
{// I can go
  mood: Mood.Pot
}
```

#### Passive:

```javascript
{// I can go
  voice: Voice.P,
  tense: Tense.Pr
}
```

#### Causative Passive:

```javascript
{// I can go
  voice: Voice.P,
  tense: Tense.Pr,
  cause: 1
}
```

### Pronouns

In Japanese, conjugation doesn't depend on pronouns.
But, you can get a pronoun name, if you want, by using the function **getPronounName**.

Example:

```javascript
var opts = {
  person: "first",
  number: "plural"
};
console.log(jpnMorpho.getPronounName(opts));
//will print: 私たち
```

### Formality

In Japanese, there exists some levels of formality which affects the conjugation.

#### Plain formality

```javascript
{
  formality: "plain"
}
```

#### Polite formality

```javascript
{
  formality: "polite"
}
```

### Negations

Japanese module affords negative conjugation. In case of affirmative, just ignore this property

```javascript
{
  negated:1
}
```

### Conjugation examples

Let's conjugate the verb "行く" in indicative mood (default), present tense, affirmative (default), polite formality.

Then, we conjugate it in the past tense, plain formality, negative.

After that, we conjugate it in the past continuous, plain formality, affirmative

Next, we conjugate it in "Causative Passive" form.

Finally, Potential form, polite formality.

```javascript
var verb = "行く";
var opts = {
  //Form properties
  tense: "present",
  formality: "polite"
};
console.log("=== indicative present, affirmative, polite ===");
console.log(jpnMorpho.conj(verb, opts));
//console.log(jpnMorpho.conjugate(verb, opts));

opts.tense = "past";
opts.negated = 1;
opts.formality = "plain";
console.log("=== indicative past, negative, plain ===");
console.log(jpnMorpho.conj(verb, opts));

opts.aspect = "continuous";
opts.negated = 0;
console.log("=== indicative past continuous, affirmative, plain ===");
console.log(jpnMorpho.conj(verb, opts));

opts.tense = "present";
opts.voice = "passive";
opts.cause = 1;
opts.aspect = "simple";
console.log("=== causative passive, affirmative, plain ===");
console.log(jpnMorpho.conj(verb, opts));

opts.mood = "potential";
opts.voice = "active";
opts.cause = 0; //otherwise, it takes cause in consideration
console.log("=== Potential, affirmative, plain ===");
console.log(jpnMorpho.conj(verb, opts));
```

The result:

```
=== indicative present, affirmative, polite ===
行きます
=== indicative past, negative, plain ===
行かなかった
=== indicative past continuous, affirmative, plain ===
行っていた
=== causative passive, affirmative, plain ===
行かせられる
=== Potential, affirmative, plain ===
行ける
```

You can check the code here: [https://runkit.com/kariminf/jslingua-japanese-conjugation-test-1](https://runkit.com/kariminf/jslingua-japanese-conjugation-test-1)

## Stemming

### Stemming algorithms

For now, Japanese Morpho affords one stemming algorithm

#### JsLingua Japanese stemmer

This is a descent algorithm to stem Japanese words.
We tried to chop the endings related to verbs and adjectives conjugation.

```javascript
//jslingua < 0.9.0 use "jslinguaJpnStemmer"
jpnMorpho.sstem("jslingua");
//jpnMorpho.setCurrentStemmer("jslingua");
```

### Stemming examples

```javascript
jpnMorpho.sstem("jslingua");
console.log(jpnMorpho.stem("読ませている"));
console.log(jpnMorpho.stem("強調したい"));
console.log(jpnMorpho.stem("伝わっていない"));
console.log(jpnMorpho.stem("表記されている"));
console.log(jpnMorpho.stem("行かなければならない"));
console.log(jpnMorpho.stem("いっていません"));
console.log(jpnMorpho.stem("高くなかった"));
```
The result will be:

```
読ませ
強調す
伝わ
表記され
行く
いく
高い
```

## Normalization

In Japanese Morpho normalization, there are no options.
Its function is to transform informal words to standard Japanese.

Here, is an example of normalization

```javascript
console.log("=== Chat ===");
console.log(jpnMorpho.norm("そうかなぁぁぁぁ"));
//console.log(jpnMorpho.normalize("そうかなぁぁぁぁ"));
console.log(jpnMorpho.norm("すげえええ"));

console.log("=== Hakata Ben ===");
console.log(jpnMorpho.norm("犬やない"));
console.log(jpnMorpho.norm("言ったばい"));

console.log("=== Osaka Ben ===");
console.log(jpnMorpho.norm("飲まへん"));
console.log(jpnMorpho.norm("帰るさかい"));

console.log("=== Hiroshima Ben ===");
console.log(jpnMorpho.norm("飲みんさんな"));

console.log("=== Kyoto Ben ===");
console.log(jpnMorpho.norm("行きますえ"));

console.log("=== Nagoya Ben ===");
console.log(jpnMorpho.norm("書いてちょう"));

console.log("=== Sendai Ben ===");
console.log(jpnMorpho.norm("寒いべ"));
console.log(jpnMorpho.norm("日本人だべ"));

console.log("=== Hokkaido Ben ===");
console.log(jpnMorpho.norm("寒いべ"));
console.log(jpnMorpho.norm("寒いっしょ"));
```

The result:

```
=== Chat ===
そうかな
すごい
=== Hakata Ben ===
犬じゃない
言ったよ
=== Osaka Ben ===
飲まない
帰るから
=== Hiroshima Ben ===
飲まないでください
=== Kyoto Ben ===
行きますよ
=== Nagoya Ben ===
書いてください
=== Sendai Ben ==="
寒いでしょう
日本人でしょう
=== Hokkaido Ben ===
寒いでしょう
寒いでしょう
```

You can check the code here: [https://runkit.com/kariminf/jslingua-japanese-normalization-test-1](https://runkit.com/kariminf/jslingua-japanese-normalization-test-1)


## Word conversion

No conversion for now. Japanese doesn't have singular to plural conversions.

[Return to index](./index.md)
