// api url
// const api_url = '/api/timeline_post'; 

const form = document.getElementById('timeline_form');
// Defining async function
// async function getapi(url) {

// 	// Storing response
// 	const response = await fetch(url, {
//         method: 'POST',
//         body: form
//     });

// 	// Storing data in form of JSON
// 	var data = await response.json();
// 	console.log(data);
// 	if (response) {
// 		hideloader();
// 	}
// 	show(data);
// }
// // Calling that async function
// getapi(api_url);

/* Sending the URL-encoded string as payload using Fetch */
form.addEventListener('submit', function(e) {
    // Prevent default behavior:
    e.preventDefault();

    // Convert formData object to URL-encoded string:
    const payload = new FormData(form);

    console.log([...payload])

    // Post the payload using Fetch:
    fetch('/api/timeline_post', {
        method: 'POST',
        body: payload
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(function () {
        setTimeout(function(){
            window.location.reload();}, 100);
        })
})

// Function to define innerHTML for HTML table
function show(payload) {
	let tab =
		`<tr>
		<th>Name</th>
		<th>Email</th>
		<th>Content</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of payload.list) {
		tab += `<tr>
        <td>${r.name} </td>
        <td>${r.email}</td>
        <td>${r.content}</td>
        </tr>`;
	}

	// Setting innerHTML as tab variable
	document.getElementById("timeline_table").innerHTML = tab;
}
