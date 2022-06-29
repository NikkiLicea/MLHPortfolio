// api url
const api_url = '/api/timeline_post';

/* Selecting the HTML form and adding a 'submit' event listener */
const form = document.getElementById('timeline_form');
form.addEventListener('submit', function(e) {
    e.preventDefault()
})

// Defining async function
async function getapi(){
	// Storing response
	const response = await fetch('/api/timeline_post', {
        method: 'POST',
        body: form
    });
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>Name</th>
		<th>Email</th>
		<th>Content</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data.list) {
		tab += `<tr>
        <td>${r.name} </td>
        <td>${r.email}</td>
        <td>${r.content}</td>
        </tr>`;
	}

	// Setting innerHTML as tab variable
	document.getElementById("timeline_table").innerHTML = tab;
}
