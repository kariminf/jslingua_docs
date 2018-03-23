# JsLingua introduction

This project aims to afford some of the tasks related to languages, such as;: detecting language, some transformations (majuscule to minuscule), verb conjugation, etc.

A lot of tasks doesn't need many resources such as stemming, tokenization, transliteration, etc.
When we use these toolkits in a web application, the server will do all of these tasks.
Why not exploit the users machines to do such tasks, and gain some benefits.

## Benefits

- The server will be relieved to do some other serious tasks.
- The number of communications will drop, resulting in a faster respond time which leads to a better user experience.
- The amount of exchanged data may drop; this case is applicable when we want to send a big text, then we tokenize it, stem it and remove stop words. This will decrease the size of data to be sent.
- Easy to configure and to integrate into your web pages.

Also, it can be used in server side using [node.js](https://github.com/nodejs/node).

## Ambitions

- To deliver the maximum language-related tasks with a minimum of resources pushed down to the client.
- To benefit from oriented object programming (OOP) concepts so the code will be minimal and readable.
- To give the web-master the ability to choose witch tasks they want to use by using many modules instead of using one giant program.
- To afford good resources for those who want to learn javascript programming.
- **TO HAVE FUN**: programming is fun, spend time for useful things, happiness is when your work is helpful to others, more obstacles give more experience.

## Functionalities

Javascript library to process languages:

- Information about the language
- Basic language functions:
  - Detection of language's characters
  - Transforming numbers to strings (pronunciation)
- Transliteration: different transliteration methods including Morse code.
- Morphology: different morphological functions
  - Verb Conjugation
  - Stemming: deleting affixes (suffixes, prefixes and infixes)
  - Noun declension: from feminine to masculine and the inverse, from singular to plural, etc.

## Similar projects

- Javascript
  - [compromise](https://github.com/spencermountain/compromise)
  - [Natural](https://github.com/NaturalNode/natural)
- Java
  - [OpenNLP](https://github.com/apache/opennlp)
- Python
  - [NLTK](https://github.com/nltk/nltk)


  [Return to index](./index.md)
