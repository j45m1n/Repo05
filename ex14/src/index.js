function main() {

    var myNoun = "dog";
    var myVerb = "ran";
    var myAdjective = "big";
    var myAdverb = "quickly";

    var wordBlanks = "My" + " " + myNoun + " " + "is" + " " +  myAdjective + " " + "and can" + " " + myVerb + " " + "very" + " "  + myAdverb + ".";
    return wordBlanks;
}

console.log(main());
module.exports = main;