//Importing JsLingua module
const JsLingua = require("jslingua");


//Get a list of ISO639-2 codes of supported languages for a given service
//Services are: Info, Lang, Trans, Morpho
//Lets try Info service
const transLangs = JsLingua.llang("Trans");
console.log("Trans langs: ", transLangs);

//some examples to test Transliterations in each language
const trans_examples = {
  "ara": {
    "text": "ذلك البرنامج مسلّ",
    "buckwalter": "*lk AlbrnAmj msl~",
    "arabtex": "_dlk AlbrnAmj mslxx",
    "morse": "--.. .-.. -.-     .- .-.. -... .-. -. .- -- .---     -- ... .-.."
  },
  "fra": {
    "text": "ça, est un exemple.",
    "morse": "-.-. .- --..--     . ... -     ..- -.     . -..- . -- .--. .-.. . .-.-.-"
  },
  "eng": {
    "text": "This is an example.",
    "morse": "- .... .. ...     .. ...     .- -.     . -..- .- -- .--. .-.. . .-.-.-"
  },
  "jpn": {
    "text": "じゃ,しゃしん,いっぱい",
    "hepburn": "ja,shashin,ippai",
    "nihonshiki": "zya,syasin,ippai",
    "kunreishiki": "zya,syasin,ippai",
    "morse": "-..--- --.-. .. .-- --..-- --.-. .-- --.-. .-.-. --..-- .- .--. -... .. .- ...-."
    }
};

//For each language and each transformation,
// an example is afforded
const transform_examples = {
  "ara": "123 456",
  "fra": "NOUS sommes",
  "eng": "THEY are",
  "jpn": "皆さん、コンニチハ"
}


//NOW, let's present Trans class
//=============================

for (let i=0; i < transLangs.length; i++) {//loop over availabe languages

  const langCode = transLangs[i];
  console.log("=====================");
  console.log("testing ", langCode);
  console.log("=====================");

  //Get the info class for the current language
  let Trans = JsLingua.gserv("Trans", langCode);

  const methodList = Trans.l();
  console.log("Transliteration methods:", methodList);

  const origtext = trans_examples[langCode]["text"];

  methodList.forEach(method =>{
    Trans.s(method);
    console.log(method, "trans(", origtext, ")=", Trans.t(origtext));
    const transtext = trans_examples[langCode][method];
    console.log(method, "untrans(", transtext, ")=", Trans.u(transtext));
  });

}
