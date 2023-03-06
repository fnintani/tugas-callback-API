const container = document.getElementById("table-user-row");
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
    preloader.classList.add("hide-preloader")
})

function getData(url, cb) {
	let xhr = new XMLHttpRequest();
	xhr.onload = function() {
		if(xhr.status == 200) {
			return cb(JSON.parse(xhr.responseText));
		}
	};
	xhr.open("GET", url);
	xhr.send();
}

const data = getData("https://jsonplaceholder.typicode.com/users", showData)

function showData(datauser) {
	// console.log(datauser)

	let displayUser = datauser.map(user => {
		const {street, suite, city} = user.address
		 return `
		   <tr>
		    <td>${user.id}</td>
		    <td>${user.name}</td>
		   	<td>${user.username}</td>
		    <td>${user.email}</td>
		    <td>${street},${suite},${city}</td>
		    <td>${user.company.name}</td>
		   </tr>
		  `
	})

	displayUser = displayUser.join(" ");
	// console.log(displayUser)
	container.innerHTML = displayUser
};


