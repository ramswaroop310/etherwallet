var PDFDocument = require('pdfkit');

module.exports = function(req, res){
  console.log(req.body)

  //reqs: combine protocol and coin (symbol?), 
  // optional: name, email
  /*
  var title = req.body.protocol;  
  var email = req.body.email;
  var protocols = req.body.protocols
    */

  var token = "ScamMonster";
  var symbol = "SCAM";
  var author = "Satoshi";
  var protocols = ["ethereum"];
  var title = "A blah blah blah"
  var email = "elaine@gmail.com"

  var whitepaper = getWhitepaper(protocols);
  

  var doc = new PDFDocument({ title: token, author: author });
  

  // Title page
  doc.font('Times-Bold', 24).text(token + ": ", {align:"center"});
  doc.font('Times-Bold', 18).text(title, {align:"center"});
  doc.moveDown();

  doc.font('Times-Roman', 15).text(author + "\n" + email, {align:"center"});
  doc.moveDown();

  doc.fillColor(243).font('Times-Roman', 12);

  var sections = Object.keys(whitepaper);

  for (s in sections) {
    var k = sections[s];
    var content = whitepaper[k];

    if(content) {
        doc.moveDown();
        var header = keywordReplace(k, token, symbol);

        doc.font('Times-Bold', 14).text(header);
        doc.font('Times-Roman', 12)


        for(c in content) {
            var para = content[c];
            if (para.img) {
                doc.moveDown();
                doc.image(__dirname + para.img, {width: 450}).moveDown();
            } else if (para.code) {
                doc.moveDown();
                doc.font('Courier', 12).text(keywordReplace(para.code, token, symbol));
                doc.moveDown();
            } else if (k == "References") {
                var num = parseInt(c) + 1;
                doc.font('Times-Roman', 12).text("[" + num + "] " + keywordReplace(para, token, symbol));
            } else {
                doc.font('Times-Roman', 12).text(keywordReplace(para, token, symbol), {indent: 32});
            }
        }
    }
  }

  doc.end();
  res.contentType("application/pdf");
  doc.pipe(res); 

};

function keywordReplace(str, token, symbol) {
    return str.replace(/_PROTOCOL_/g, token).replace(/_COIN_/g, symbol);
}

function getWhitepaper(protocols) {
    var whitepaper = require('./papers/template.js');
    var ethereum = require('./papers/ethereum.js');

    if (protocols.includes("ethereum")) 
        Object.assign(whitepaper, ethereum);

    return whitepaper;

}
