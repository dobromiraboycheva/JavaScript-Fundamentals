/*Write a function for extracting all email addresses from given text.
 All sub-strings that match the format @… should be recognized as emails.
 Return the emails as array of strings.*/
function getEmails(text){
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}

var text = 'gashadg@fgh.com, "assdsdf" <fgfgfgf@gmail.com>, "fg ghh" <hhhghghg@gmal.com>, ' +
    '"hfdhdfh hdfhh" <hfdhfh@gmail.com>, "truform techno" <ddfd@gfgfgfgfgf.com>, "fdfrtty fhf" ' +
    '<fhfdhdh@dhhoo.in>, "akasdfsh kasdfstla" <fgfgfgf@gg.in>, "fgfg ggggfgd" <fhfhfhff@hfhf.com>,; ' +
    '"dhdfhdhhf hsghtht" <fsdgf.fgf@gmail.com>';
console.log('text='+text);
console.log('Result: ');
console.log(getEmails(text).join('\n\r'));