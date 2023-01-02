//Importing JsLingua module
const JsLingua = require("jslingua");


//Get a list of ISO639-2 codes of supported languages for a given service
//Services are: Info, Lang, Trans, Morpho
//Lets try Info service
const langLangs = JsLingua.llang("Lang");
console.log("Lang langs: ", langLangs);

//some examples to test charsets in each language
//for each language, we define a list of words
const charsets_examples = {
  "ara": ["أهلا", "أهْلاً", "هـٰـذَا"],
  "fra": ["il", "ça", ""],
  "eng": ["they", "it's"],
  "jpn": ["皆さん", "こんにちは", "皆、コンニチハ"]
};

//For each language and each transformation,
// an example is afforded
const transform_examples = {
  "ara": "123 456",
  "fra": "NOUS sommes",
  "eng": "THEY are",
  "jpn": "皆さん、コンニチハ"
}


//NOW, let's present Lang class
//=============================

for (let i=0; i < langLangs.length; i++) {
  const langCode = langLangs[i];
  console.log("=====================");
  console.log("testing ", langCode);
  console.log("=====================");

  //Get the lang class for the current language
  let Lang = JsLingua.gserv("Lang", langCode);

  console.log("---------------------");
  console.log("Charsets");
  console.log("---------------------");

  const charsets = Lang.lchars();
  charsets.forEach(charset =>{
    Lang.schars(charset);
    console.log("Charset", charset);
    charsets_examples[langCode].forEach(exp =>{
      const some = Lang.some(exp);
      const every = Lang.every(exp);
      console.log(exp, "some=", some, "every=", every);
    });
  });

  console.log("---------------------");
  console.log("Transformations");
  console.log("---------------------");

  const transfList = Lang.ltrans();
  const exp = transform_examples[langCode];
  console.log(transfList);
  transfList.forEach(transf =>{
    //set the transform function
    Lang.strans(transf);
    console.log("Transform function:", transf);
    console.log("Transform description:", Lang.gtransdesc(transf));
    const exp_trans = Lang.trans(exp);
    console.log(transf, "(", exp, ")=", exp_trans);
  });

  console.log("---------------------");
  console.log("Read a number");
  console.log("---------------------");
  console.log("nbr2words(12589)=", Lang.nbr2words(12589));

}
