//Importing JsLingua module
var JsLingua = require("jslingua");

//Priniting JsLingua's version
console.log(JsLingua.getVersion());

//Printing a language's writing direction: ltr or rtl
//ltr: left to right; rtl: right to left
//Arabic is rtl
console.log("Arabic writing direction: " + JsLingua.getDir("ara"));


//Get a list of ISO639-2 codes of supported languages for a given service
//Services are: Info, Lang, Trans, Morpho
//Lets try Info service
var infoLangs = JsLingua.serviceLanguages("Info");
console.log("Info langs: " + infoLangs);

//Get English Info class
var EngInfo = JsLingua.getService("Info", "eng");
//Instantiate the class
var enginfo = new EngInfo();
//Info has a function called getName() to get language's name
console.log(enginfo.getName());


//NOW, let's present Info class
//=============================

var Info, info;

for (var i=0; i< infoLangs.length; i++) {
  console.log("=====================");
  console.log("testing " + infoLangs[i]);
  console.log("=====================");

  //Get the info class for the current language
  Info = JsLingua.getService("Info", infoLangs[i]);
  info = new Info();
  //Language's name
  console.log("Language: " + info.getName());
  //Language's code
  console.log("ISO6039-2: " + info.getCode());
  //Language's family
  console.log("Family: " + info.getFamily());
  //Language's branch
  console.log("Branch: " + info.getBranch());
  //Language's writing direction
  console.log("Direction: " + info.getDir());
  //Language's words order:
  //English is svo: subject-verb-object
  console.log("Word Order: " + info.getWordOrder());


}
