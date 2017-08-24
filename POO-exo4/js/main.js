function clientManag() {
	this.affichage = function () {
		$("#tab").empty();
		for (i = 0; i < client.clientList.length; i++) {
			$("#tab").append("<tr><td>" + client.clientList[i].id + "</td><td>" + client.clientList[i].FirstName + "</td><td>" + client.clientList[i].LastName + "</td><td>" + client.clientList[i].city + "</td></tr>");
		}
	}

	this.trie = function (tab, key) {
		tab.sort(function (a, b) {
			var keyA = a[key];
			var keyB = b[key];
			if (keyA < keyB) return -1;
			if (keyA > keyB) return 1;
			return 0;
		});
		this.affichage();
	}
}

var objClient = new clientManag();
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		client = JSON.parse(this.responseText);
		objClient.affichage();
		$("#selector").change(function () {
			objClient.trie(client.clientList, $("#selector").val());
		})
	}
};

xhttp.open("GET", "client.json", true);
xhttp.send();
