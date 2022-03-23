let url = window.location.href;
let db = "https://api.scratch.mit.edu";

(async function () {
	window.onLoad = function () {
		if (url.includes("/users/")) {
			if (url.includes("/followers") || url.includes("/following") || url.includes("/projects") || url.includes("/studios")) {
				fetch("${db}/users/${url.split('/')[1]")
			} else {
				fetch("${db}/users/${url.split('/')[0]")
			}
			.then(response => response.json())
			.then(data => {
				var idItem = document.createElement("li");
				idItem.innerHTML = "id: " + data.id;
				document.body.appenchild(idItem);
				var nameItem = document.createElement("li");
				nameItem.innerHTML = "username: " + data.username;
				document.appendChild(nameItem);
			});
		}
	}
})();
