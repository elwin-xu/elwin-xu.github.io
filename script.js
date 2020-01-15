var input = new Vue({
  el: '#input',
  data: {
    message: "",      // string input 
    numOfLines: 0,    // number of lines of message
    colourArray: [],  // random generated colour for each shape
    rawHtml:          // raw html to create a <svg> element
      "<svg id=\"plotter\" name=\"plotter\" viewBox=\"0 0 250 250\" width=\"250\" height=\"250\"></svg>", 
    errorMsg: ""      // error message displayed
  },
  watch:{
      message: function (val) {
      // update numOfLines and colourArray
      var num = val.split("\n").length;
      if(num > this.numOfLines){
        this.colourArray.push(randomColour());
        this.numOfLines = num;
      }
      else if(num < this.numOfLines){
        this.colourArray.pop();
        this.numOfLines = num;
      }

      // Opening tag and closing tag for SVG element
      var openingTag = "<svg id=\"plotter\" name=\"plotter\" viewBox=\"0 0 250 250\" width=\"250\" height=\"250\">"
      var closingTag = "</svg>"
      
      // initialisation
      var code = "";
      this.errorMsg = "";
      
      var text = val.split("\n");
      
      for (var i = 0; i < text.length; i++) {
        // Pre-process the text
        text[i] = text[i].trim();
        var line = text[i].split(/\s+/);
        
        if (text[i] == ""){
          continue;
        }
        
        // In the case of a Circle **********************
        if (line[0] == "c" || line[0] =="C") {
          if (line.length > 4){
            this.errorMsg += `Error: too many parameters, line ${i+1}.\n`
            continue;
          }
          
          if (!isAllInt(line)){
            this.errorMsg += `Error: not all parameters are integers, line ${i+1}.\n`;
            continue;
          }
          
          // create a SVG circle element
          var cx = line[1];
          var cy = line[2];
          var r = line[3];
          var command = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${this.colourArray[i]}" />`;
          code += command;
          continue;
        }
        
        // In the case of a Rect **********************
        else if (line[0] == "r" || line[0] =="R") {
          
          if (line.length > 5){
            this.errorMsg += `Error: too many parameters, line ${i+1}.\n`
            continue;
          }
          
          if (!isAllInt(line)){
            this.errorMsg += `Error: not all parameters are integers, line ${i+1}.\n`;
            continue;
          }
          
          // create a SVG rect element
          var x = line[1];
          var y = line[2];
          var width = line[3];
          var height = line[4];
          var command = `<rect x="${x}" y="${y}" width="${width}" height="${height}" fill="${this.colourArray[i]}"/>`;
          code += command;
          continue;
        }
        
        // In the case of a Polygon **********************
        else if (line[0] == "p" || line[0] =="P") {
          // pre-process the text for the special input syntax
          var re = /,/gi;
          var linePoly = text[i].replace(re, " ").trim().split(/\s+/);
          
          if (!isAllInt(linePoly)){
            this.errorMsg += `Error: not all parameters are integers, line ${i+1}.\n`;
            continue;
          }
          
          // create a SVG polygon element
          var cor="";

          for (var index = 1; index < linePoly.length; index++) {
            cor += linePoly[index];
            cor += " ";
          }
          
          var command = `<polygon points = "${cor}" fill="${this.colourArray[i]}"/>`;
          code += command;
          continue;
        }
        
        // In the case of a ellipse **********************
        else if (line[0] == "e" || line[0] =="E") {
          
          if (line.length > 5){
            this.errorMsg += `Error: too many parameters, line ${i+1}.\n`
            continue;
          }
          
          if (!isAllInt(line)){
            this.errorMsg += `Error: not all parameters are integers, line ${i+1}.\n`;
            continue;
          }
          
          // create a SVG ellipse element
          var cx = line[1];
          var cy = line[2];
          var rx = line[3];
          var ry = line[4]
          var command = `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${this.colourArray[i]}"/>`;
          
          code += command;
          continue;
        }
        
        else{
          // unrecognized shape type 
          this.errorMsg += `Error: invalid shape type, line ${i+1}.\n`
        }
        
      }
      // rawHtml will be passed back to html film as raw html, creating a SVG element
      this.rawHtml = openingTag + code + closingTag;
    },
  }
})

/**
* Returns a string representing a random colour
* @returns a string representing a random colour
*/
var randomColour = function(){
      var chars = '0123456789ABCDEF'.split('');
      var random_color = '#';
      for (var i = 0; i < 6; i++)
      {
        random_color += chars[Math.floor(Math.random() * 16)];
      }
  return random_color;
}

/**
* Check if the input string is an integer
* @returns returns true if it is an integer, otherwise false
*/
function isInt(value) {
    return /^-{0,1}\d+$/.test(value);
}

/**
* Check if all parameters are integers
* @param line parameter array, including the shape type character
*/
function isAllInt(line) {
  for (var index = 1; index < line.length; index++){
            if (!isInt(line[index])){
              return false;
            }
 }
  return true;
}