const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/albums', true);
xhr.responseType = 'json';

xhr.onreadystatechange = function () {
    if(xhr.readyState !== 4) return;
    if(xhr.status !== 200) {
        console.log(xhr.status + " " + xhr.statusText);
    } else {
        const albums = xhr.response;
        const container = document.querySelector('.album');
        albums.forEach(album => {
            const li = document.createElement('li');
            li.textContent = album.title;
            container.appendChild(li);
        });
    }
}

xhr.send()