function sectionMenu() {
    const sectionMenu = document.createElement('section');
    sectionMenu.className = 'menu';

    const col = document.createElement('div');
    col.className = 'col-12 col-sm-12 col-md-6 col-lg-4 mb-2';

    const searchFilterHolder = document.createElement('div');
    searchFilterHolder.className = 'search-filter-holder';

    const search = document.createElement('input');
    search.type = 'text';
    search.className = 'pizza-filter';
    search.placeholder = 'Find pizza';
    const startSearchButton = document.createElement('button');
    startSearchButton.className = 'btn btn-danger ml-2';
    startSearchButton.innerText = 'Search';
    startSearchButton.onclick = () => {
        document.querySelector('.row').innerHTML = '';
        pizzaList
            .filter(item => item.name.toLowerCase() === search.value.toLowerCase())
            .forEach(item => row.append(renderCard(item)));
    };

    const searchHolder = document.createElement('div');
    searchHolder.className = 'search-holder';

    const selectSort = document.createElement('select');
    selectSort.className = 'btn btn-secondary';
    const asc = document.createElement('option');
    asc.innerText = 'Price: From Low to High';
    const desc = document.createElement('option');
    desc.innerText = 'Price: From High to Low';
    const none = document.createElement('option');
    none.innerText = 'Sort by';
    selectSort.onchange = function () {
        const sortedArray = [...pizzaList];
        sortedArray.sort((a, b) => {
            if (this.value === 'Price: From Low to High') return a.price - b.price;
            if (this.value === 'Price: From High to Low') return b.price - a.price;
            return 0;
        });
        document.querySelector('.row').innerHTML = '';
        sortedArray.forEach(pizza => document.querySelector('.row').append(renderCard(pizza)));
    };

    const selectCol = document.createElement('div');
    selectCol.className = 'col-12 col-sm-12 col-md-6 col-lg-4';

    selectSort.append(none, asc, desc);
    selectCol.append(selectSort);
    searchHolder.append(search, startSearchButton);
    searchFilterHolder.append(searchHolder);
    col.append(searchFilterHolder);
    sectionMenu.append(col, selectCol);
    return sectionMenu;
}