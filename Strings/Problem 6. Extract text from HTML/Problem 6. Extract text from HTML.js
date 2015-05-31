/*Write a function that extracts the content of a html page given as text.
 The function should return anything that is in a tag, without the tags.*/
function extractText(html){
    return html.replace(/<[^>]*>/g, '');
}

var html = '<html><head><title>Sample site </title></head><body><div>text<div> text</div> text </div>in body</body></html>';
var text = extractText(html);
console.log('html='+html);
console.log(text);