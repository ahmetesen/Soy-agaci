function Parent(object){ 

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

	Parent.prototype.test = function()
	{

	}