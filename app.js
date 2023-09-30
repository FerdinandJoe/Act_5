var form = document.getElementById('form');
var results = document.getElementById('results');

form.addEventListener('submit', function (e) {
    e.preventDefault();
});

document.getElementById('postButton').addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var fav_color = document.getElementById('fav_color').value;

    var url = 'https://jsonplaceholder.typicode.com/posts';

    // Perform a POST request without specifying 'id' in the payload
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            title: name,
            color: fav_color,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        results.innerHTML = `
            <center>
            <p>The name of the client is ${data.title}</p>
            <p>The favorite color is ${data.color}</p>
            </center>
        `;
        // Clear input fields
        document.getElementById('name').value = '';
        document.getElementById('fav_color').value = '';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});

document.getElementById('getButton').addEventListener('click', function () {
    var id = document.getElementById('id').value;

    if (!isNaN(id)) {
        var url = 'https://jsonplaceholder.typicode.com/posts/' + parseInt(id);

        // Perform a GET request
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            results.innerHTML = `
                <center>
                <p>The title of the todo is ${data.title}</p>
                <p>The body of the todo is ${data.body}</p>
                </center>
            `;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
});

document.getElementById('putButton').addEventListener('click', function () {
    var name = document.getElementById('name').value;
    var fav_color = document.getElementById('fav_color').value;
    var id = document.getElementById('id').value;

    if (!isNaN(id)) {
        var url = 'https://jsonplaceholder.typicode.com/posts/' + parseInt(id);

        // Perform a PUT (update) request
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify({
                title: name,
                color: fav_color,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
    
            results.innerHTML = `<center> <p>Update successful</p> </center>`;
            // Clear input fields after edit
            document.getElementById('name').value = '';
            document.getElementById('fav_color').value = '';
            document.getElementById('id').value = '';
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
});

document.getElementById('deleteButton').addEventListener('click', function () {
    var id = document.getElementById('id').value;

    if (!isNaN(id)) {
        var url = 'https://jsonplaceholder.typicode.com/posts/' + parseInt(id);

        // Perform a DELETE request
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => {
            if (response.status === 200) {
                console.log('Delete successful');
                results.innerHTML = `<center> <p>Delete successful</p> </center>`
                // Clear input fields after delete
                document.getElementById('name').value = '';
                document.getElementById('fav_color').value = '';
                document.getElementById('id').value = '';
            } else {
                console.error('Delete failed');
                results.innerHTML = `<p>Delete failed</p>`;
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
});