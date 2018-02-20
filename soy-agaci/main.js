var show = function (elem) {
	elem.style.display = 'block';
};

var hide = function (elem) {
	elem.style.display = 'none';
};

var toggle = function (elem) {

	if (window.getComputedStyle(elem).display === 'block') {
		hide(elem);
		return;
	}

	show(elem);

};



/*TODO: Soy ağacı tablosunu check et, mevcut tabloyu sil, sonra devam et*/

//var init = function(){

	console.log("initiated");




	var table= document.getElementsByClassName('resultTable striped')[0];
	var tableBody = table.getElementsByTagName('tbody');
	var rows = tableBody[0].getElementsByTagName('tr');
	var cards = [];
	for (var i = 0; i < rows.length; i++)
	{
		cards.push(new Card(rows[i]));
	}

	//hide(table);
	var toAdd = document.getElementsByClassName('resultContainer')[0];
	toAdd.append(cards[0].html);


// };

// setTimeout(init,1000);