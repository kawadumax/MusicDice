var verse = 0;
function role(){
	verse++;
	var form = document.forms.mainForm;
	var instruments = {
		"Hihat":form.Hihat.checked,
		"Snare":form.Snare.checked,
		"Kick":form.Kick.checked,
		"Bass":form.Bass.checked,
		"Piano":form.Piano.checked,
		"Guitar":form.Guitar.checked
	}
	var num = form.diceNum.value;
	var max = form.diceMax.value;
	var results = new Array(num);
	var ele = document.getElementById('result');
	var outerDiv = document.createElement("div");
	var verseTag = document.createElement("h2");
	verseTag.setAttribute("class","role")
	outerDiv.appendChild(verseTag);
	verseTag.innerHTML = "Verse : " + verse;

	outerDiv.setAttribute("class","role");
	ele.appendChild(outerDiv);

	for(key in instruments){
		if (instruments[key] == false){
			continue;
		}else{
			// numの分だけ最大maxのダイスを投げる
			for (var j = 0; j < num; j++) {
				var v = Math.floor( 1 + Math.random() * max ); 
				results[j] = v;
			}

			// 結果を表示
			var innerDiv = document.createElement("div");
			innerDiv.setAttribute( "class","instrument");
			outerDiv.appendChild(innerDiv);
			var p = document.createElement("p");
			p.setAttribute("class","instrument");
			p.innerHTML = key;
			innerDiv.appendChild(p);
			var ul = document.createElement("ul");
			innerDiv.appendChild(ul);
			for (var j = 0; j < results.length; j++) {
				var li = document.createElement('li');
				li.innerHTML = 'Dice ' + (j+1).toString() + ": " + results[j].toString();
				ul.appendChild(li);
			}
		}
	}
}