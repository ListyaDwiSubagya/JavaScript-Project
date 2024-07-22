function search_animal() {
    let search = document.getElementById('searchbar').value
    search = search.toLowerCase();
    let animals = document.getElementsByClassName('animals');

    for (i = 0; i < animals.length; i++) {
        if (!animals[i].innerHTML.toLowerCase().includes(search)) {
            animals[i].style.display = "none";
        }
        else {
            animals[i].style.display = "list-item";
        }
    }
}

  