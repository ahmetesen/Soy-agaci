function Arc(object){ 

	if(element.tagName != 'TR' ){
		throw ("Error: object is not valid!");
		return;
	}

	var tds = element.getElementsByTagName('td');


	this.derece = [];
	this.sira = tds[0].innerText;
	this.cinsiyet = tds[1].innerText;
	this.ad=tds[3].innerText;
	this.soyad=tds[4].innerText;

	this.dogumYeriTarihi=tds[7].innerText;
	this.il='';
	this.ilce='';
	this.koy='';
	this.olu=false;
	this.olutarih='';

	var soy = tds[2].innerText.split(" ");

	for(var i = 0; i<soy.length; i++)
	{
		if(soy[i].startsWith("Anne"))
			this.derece.push('a');
		else if(soy[i].startsWith("Baba"))
			this.derece.push('b');
		else if(soy[i].startsWith("Kendi"))
			this.derece.push('k');
	}




	var htmlBody = document.createElement('div');
	htmlBody.append(element);

	this.html = htmlBody;
	this.html.className = 'kart';

}

Arc.prototype.test = function()
{

}

document.body.appendChild(getCircularText("ROUNDED TEXT LOOKS BEST IN CAPS!", 250, 0, "center", false, true, "Arial", "18pt", 2));

function getCircularText(canvas, text, diameter, startAngle, align, textInside, inwardFacing, fName, fSize, kerning, x, y) {
    // canvas:  	 Main Canvas Element
    // text:         The text to be displayed in circular fashion
    // diameter:     The diameter of the circle around which the text will
    //               be displayed (inside or outside)
    // startAngle:   In degrees, Where the text will be shown. 0 degrees
    //               if the top of the circle
    // align:        Positions text to left right or center of startAngle
    // textInside:   true to show inside the diameter. False to show outside
    // inwardFacing: true for base of text facing inward. false for outward
    // fName:        name of font family. Make sure it is loaded
    // fSize:        size of font family. Don't forget to include units
    // kearning:     0 for normal gap between letters. positive or
    //               negative number to expand/compact gap in pixels
    // x: 			 x position
    // y: 			 y position
 //------------------------------------------------------------------------

    // declare and intialize canvas, reference, and useful variables
    align = align.toLowerCase();
    var mainCanvas = canvas;
    var ctxRef = mainCanvas.getContext('2d');
    var clockwise = align == "right" ? 1 : -1; // draw clockwise for aligned right. Else Anticlockwise
    startAngle = startAngle * (Math.PI / 180); // convert to radians

    // calculate height of the font. Many ways to do this
    // you can replace with your own!
    var div = document.createElement("div");
    div.innerHTML = text;
    div.style.position = 'absolute';
    div.style.top = '-10000px';
    div.style.left = '-10000px';
    div.style.fontFamily = fName;
    div.style.fontSize = fSize;
    document.body.appendChild(div);
    var textHeight = div.offsetHeight;
    document.body.removeChild(div);
    
    // in cases where we are drawing outside diameter,
    // expand diameter to handle it
    if (!textInside) diameter += textHeight * 2;

    // omit next line for transparent background
    ctxRef.fillStyle = 'black';
    ctxRef.font = fSize + ' ' + fName;
    
    // Reverse letters for align Left inward, align right outward 
    // and align center inward.
    if (((["left", "center"].indexOf(align) > -1) && inwardFacing) || (align == "right" && !inwardFacing)) text = text.split("").reverse().join(""); 
    
    // Setup letters and positioning
    ctxRef.translate(diameter / 2, diameter / 2); // Move to center
    startAngle += (Math.PI * !inwardFacing); // Rotate 180 if outward
    ctxRef.textBaseline = 'middle'; // Ensure we draw in exact center
    ctxRef.textAlign = 'center'; // Ensure we draw in exact center

    // rotate 50% of total angle for center alignment
    if (align == "center") {
        for (var j = 0; j < text.length; j++) {
            var charWid = ctxRef.measureText(text[j]).width;
            startAngle += ((charWid + (j == text.length-1 ? 0 : kerning)) / (diameter / 2 - textHeight)) / 2 * -clockwise;
        }
    }

    // Phew... now rotate into final start position
    ctxRef.rotate(startAngle);

    // Now for the fun bit: draw, rotate, and repeat
    for (var j = 0; j < text.length; j++) {
        var charWid = ctxRef.measureText(text[j]).width; // half letter
        // rotate half letter
        ctxRef.rotate((charWid/2) / (diameter / 2 - textHeight) * clockwise); 
        // draw the character at "top" or "bottom" 
        // depending on inward or outward facing
        ctxRef.fillText(text[j], 0, (inwardFacing ? 1 : -1) * (0 - diameter / 2 + textHeight / 2));

        ctxRef.rotate((charWid/2 + kerning) / (diameter / 2 - textHeight) * clockwise); // rotate half letter

    }

    ctx.translate(x, y);
    // Return it
    return (mainCanvas);
}

