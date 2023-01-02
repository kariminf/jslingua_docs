//Importing JsLingua module
const JsLingua = require("jslingua");


//Get a list of ISO639-2 codes of supported languages for a given service
//Services are: Info, Lang, Trans, Morpho
//Lets try Morpho service
const morphoLangs = JsLingua.llang("Morpho");
console.log("Morpho langs: ", morphoLangs);

const conjOpts = {
  mood: "indicative",
  person: "third",
  number: "singular",
  gender: "feminine",
  tense: "past",
  formality: "plain",
  aspect: "perfect",
  negated: 1
};

const verbs_exp = {
  ara: "أكل",
  fra: "manger",
  eng: "eat",
  jpn: "食べる"
};

const stem_exp = {
  ara: "أتكلمونني",
  fra: "majestueux",
  eng: "electricity",
  jpn: "用いられていませんでした"
};

const norm_exp = {
  ara: "ذَهــَبَ",
  fra: "",
  eng: "gonna",
  jpn: "犬やない"
};

const conv_exp = {
  ara: "معلم",
  fra: "cheval",
  eng: "ox",
  jpn: ""
};

const seg_exp = {
  ara: "ذهبت إلى السوق ومن ثم إلى المنزل. هل تحتاج شيء؟",
  fra: "J'ai vu M. Watson. Comment va-t-il?",
  eng: "I've seen Dr. Watson. Is he good?",
  jpn: "昨日の朝、僕は田中さんが会いました。かれは大丈夫ですか。"
};


//NOW, let's present Morpho class
//=============================

for (let i=0; i < morphoLangs.length; i++) {//loop over availabe languages

  const langCode = morphoLangs[i];
  console.log("=====================");
  console.log("testing ", langCode);
  console.log("=====================");

  //Get the morpho class for the current language
  const Morpho = JsLingua.gserv("Morpho", langCode);

  console.log("---------------------");
  console.log("Conjugation");
  console.log("---------------------");

  const verb = verbs_exp[langCode];

  console.log("conj(", verb, ")=", Morpho.conj(verb, conjOpts));
  console.log("type(", verb, ")=", Morpho.gvtype(verb));
  console.log("Pronoun=", Morpho.goptname("Pronoun", conjOpts));

  console.log("---------------------");
  console.log("Stemming");
  console.log("---------------------");

  const stemList = Morpho.lstem();
  const word = stem_exp[langCode];
  stemList.forEach(stemf =>{
    console.log(stemf, "=", Morpho.gstemdesc(stemf));
    Morpho.sstem(stemf);
    console.log("stem(", word, ")=", Morpho.stem(word));
  });

  console.log("---------------------");
  console.log("Normalization");
  console.log("---------------------");
  const unnorm = norm_exp[langCode];
  console.log("norm(", unnorm, ")=", Morpho.norm(unnorm));

  console.log("---------------------");
  console.log("Words conversion");
  console.log("---------------------");
  const unconv = conv_exp[langCode];
  const convList = Morpho.lconv();
  convList.forEach(convf =>{
    console.log(convf, "=", Morpho.gconvdesc(convf));
    Morpho.sconv(convf);
    console.log("conv(", unconv, ")=", Morpho.conv(unconv));
  });

  console.log("---------------------");
  console.log("Text segmentation");
  console.log("---------------------");

  const thetext = seg_exp[langCode];
  const sentences = Morpho.gsents(thetext);
  console.log("sents(", thetext, ")=", sentences);
  const words = Morpho.gwords(sentences[0]);
  console.log("words(", sentences[0], ")=", words);

  console.log("---------------------");
  console.log("Stop words filtering");
  console.log("---------------------");
  console.log("SWF(", words, ")=", Morpho.filter(words));

}

