// Add Input Object which needs to be converted to XML
let inputData={
    "aaa":"wdad",
    "bbb":"sadasd",
    "bbb":"sadasd",
    "bbb":"sadasd"
}

// getting keys from oinput data
let ObjectKeys=Object.keys(inputData)

// Below code to dowonload output file
var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    // returns a URL you can use as a href
    return textFile;
  };

function getAssets() {
    var link = document.createElement('a');
    link.setAttribute('download', 'info.info');
    link.href = makeTextFile(output);
    document.body.appendChild(link);

    // wait for the link to be added to the document
    window.requestAnimationFrame(function () {
    var event = new MouseEvent('click');
    link.dispatchEvent(event);
    document.body.removeChild(link);
    });
}

let output='';
// function call
convert_object_xml(ObjectKeys);

// fuonction to convert object to xml
// change to required xml add ${key} at required place
function convert_object_xml(ObjectKeys){
    ObjectKeys.forEach(key =>{
        output+=`<Attribute>
        <Name></Name>
        <ValueExpression>${key}<ValueExpression>
        <Key>${key}</key>
        </Attribute>
        `
    })
}
// output in console
console.log(output)