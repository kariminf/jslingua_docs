//Importing JsLingua module
const JsLingua = require("jslingua");


//Get a list of ISO639-2 codes of supported languages for a given service
//Services are: Info, Lang, Trans, Morpho
//Lets try Info service
const infoLangs = JsLingua.llang("Info");
console.log("Info langs: ", infoLangs);


//NOW, let's present Info class
//=============================

for (var i=0; i< infoLangs.length; i++) {
  const langCode = infoLangs[i];
  console.log("=====================");
  console.log("testing ", langCode);
  console.log("=====================");

  //Get the info class for the current language
  let Info = JsLingua.gserv("Info", langCode);

  //Language's name
  console.log("Language: ", Info.gname());
  //Language's code
  console.log("ISO6039-2: ", Info.gcode());
  //Language's family
  console.log("Family: ", Info.gfamily());
  //Language's branch
  console.log("Branch: ", Info.gbranch());
  //Language's writing direction
  console.log("Direction: ", Info.gdir());
  //Language's words order:
  //English is svo: subject-verb-object
  console.log("Word Order: ", Info.gorder());


}
