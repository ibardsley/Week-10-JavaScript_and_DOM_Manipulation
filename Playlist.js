let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('playlist');
    let row = table.insertRow(-1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = id
    row.insertCell(1).innerHTML = document.getElementById('new-playlist-artist').value;
    row.insertCell(2).innerHTML = document.getElementById('new-playlist-album').value;
    row.insertCell(3).innerHTML = document.getElementById('new-playlist-song').value;
    let actions = row.insertCell(4);
    actions.appendChild(createDeleteButton(id++));
    document.getElementById('new-playlist-artist').value = '';
    document.getElementById('new-playlist-album').value = '';
    document.getElementById('new-playlist-song').value = '';
})

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-success';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id; item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}