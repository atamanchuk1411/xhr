const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
xhr.responseType = 'json';

xhr.onreadystatechange = function () {
    if(xhr.readyState !== 4) return;
    if(xhr.status !== 200) {
        console.log(xhr.status + " " + xhr.statusText);
    } else {
        const users = xhr.response;
        const container = document.querySelector('.users');
        users.forEach(user => {
            const ul = document.createElement('ul');
            ul.style.border = "2px solid #121212";
            ul.innerHTML = `
                <li>ID: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>Username: ${user.username}</li>
                <li>Email: ${user.email}</li>
                <li>Address
                    <ul>
                        <li>Street: ${user.address.street}</li>
                        <li>Suite: ${user.address.suite}</li>
                        <li>City: ${user.address.city}</li>
                        <li>Zipcode: ${user.address.zipcode}</li>
                        <li>Geo:
                            <ul>
                                <li>Lat: ${user.address.geo.lat}</li>
                                <li>Lng: ${user.address.geo.lng}</li>
                            </ul>
                        </li>
                    </ul>
                </li>`;
            container.appendChild(ul);
        });
    }
}

xhr.send()