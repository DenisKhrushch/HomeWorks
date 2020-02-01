const pizzaList = [
    {
        id : 1,
        img: "1",
        name: "Супер гриль",
        composition: ["Охотничьи колбаски", "сосиски", "моцарелла", "баклажан", "томаты", "лук", "перец", "соус томатный", "соус BBQ", "зеленый соус", "майонез"],
        caloricity: 1569,
        price: 249,
    },
    {
        id: 2,
        img: "2",
        name: "Маргарита",
        composition: ["Томаты", "моцарелла", "орегано", "базилик", "соус Pomodoro"],
        caloricity: 1042,
        price: 70,
    },
    {
        id: 3,
        img: "3",
        name: "Карбонара",
        composition: ["Ветчина", "шампиньоны", "пармезан", "моцарелла", "томаты", "яйцо перепелиное", "смесь перцев", "соус Carbonara"],
        caloricity: 1369,
        price: 119,
    },
    {
        id: 4,
        img: "4",
        name: "C сырным бортиком",
        composition: ["Хамон", "моцарелла", "сливочный сыр", "персик", "сливки", "руккола"],
        caloricity: 1140,
        price: 139,
    },
    {
        id: 5,
        img: "5",
        name: "Полло",
        composition: ["Куриное филе sous-vide", "ананас", "моцарелла", "орегано", "перец чили", "соус Pomodoro"],
        caloricity: 1232,
        price: 99,
    },
    {
        id: 6,
        img: "6",
        name: "Пепперони",
        composition: ["Салями Пепперони", "моцарелла", "орегано", "соус Pomodoro"],
        caloricity: 1280,
        price: 119,
    },
    {
        id: 7,
        img: "7",
        name: "Гурмео",
        composition: ["Охотничьи колбаски", "салями пепперони", "ветчина", "куриное филе sous-vide", "шампиньоны", "орегано", "соус BBQ"],
        caloricity: 1343,
        price: 149,
    },
    {
        id: 8,
        img: "8",
        name: "Четыре сыра",
        composition: ["Пармезан", "дор блю", "чеддер", "моцарелла", "груша", "грецкий орех", "соус сливочный"],
        caloricity: 1220,
        price: 109,
    },
    {
        id: 9,
        img: "9",
        name: "Американо",
        composition: ["Куриное филе sous-vide", "салями", "пепперони", "охотничьи колбаски", "кукуруза", "моцарелла", "лук", "орегано", "соус Pomodoro", "соус BBQ"],
        caloricity: 1422,
        price: 149,
    },
    {
        id: 10,
        img: "10",
        name: "Кальцоне",
        composition: ["Ветчина", "шампиньоны", "дор блю", "моцарелла", "томаты", "орегано"],
        caloricity: 1056,
        price: 99,
    },
    {
        id: 11,
        img: "11",
        name: "Берлускони",
        composition: ["Сливочный соус из белых грибов и шампиньонов с трюфельным маслом", "моцарелла", "дор блю", "орегано", "лук"],
        caloricity: 1293,
        price: 125,
    },
    {
        id: 12,
        img: "12",
        name: "Супер гриль",
        composition: ["Охотничьи колбаски", "сосиски", "сыр моцарелла", "баклажан", "томаты", "лук", "перец", "соус томатный"],
        caloricity: 1410,
        price: 132,
    },
    {
        id: 13,
        img: "13",
        name: "Кампанья",
        composition: ["Охотничьи колбаски", "ветчина", "салями пепперони", "куриное филе sous-vide", "шампиньоны", "моцарелла", "томаты"],
        caloricity: 1510,
        price: 144,
    },
    {
        id: 14,
        img: "14",
        name: "Дьявола",
        composition: ["Горчичный соус", "моцарелла", "молочные сосиски", "бекон", "помидор", "зелень"],
        caloricity: 1180,
        price: 107,
    },
    {
        id: 15,
        img: "15",
        name: "Бекон ранч",
        composition: ["Фирменный пицца-соус", "моцарелла", "бекон", "ветчина", "телятина", "помидор", "перец болгарский", "соус ранч"],
        caloricity: 1322,
        price: 113,
    },
    {
        id: 16,
        img: "16",
        name: "Гроссето",
        composition: ["Фирменный пицца-соус", "моцарелла", "лосось", "креветки", "сладкий перец", "маслины", "лимон", "базилик", "орегано"],
        caloricity: 980,
        price: 159,
    },
    {
        id: 17,
        img: "17",
        name: "Тоскана",
        composition: ["Фирменный пицца-соус", "моцарелла", "ветчина", "бекон", "салями-пеперони", "сладкий перец", "сыр «Пармезан»", "базилик", "орегано"],
        caloricity: 1310,
        price: 139,
    },
    {
        id: 18,
        img: "18",
        name: "Грибная",
        composition: ["Фирменный пицца-соус", "моцарелла", "шампиньоны", "опята", "маслины", "лук", "базилик", "орегано", "зелень"],
        caloricity: 1451,
        price: 132,
    },
    {
        id: 19,
        img: "19",
        name: "Туринская",
        composition: ["Горчичный соус", "моцарелла", "салями", "охотничьи колбаски", "огурцы маринованные", "зелень"],
        caloricity: 1140,
        price: 138,
    },
    {
        id: 20,
        img: "20",
        name: "Венецианская",
        composition: ["Фирменный пицца-соус", "моцарелла", "телятина", "куриная грудка", "бекон", "шампиньоны", "помидор", "перец", "пармезан", "зелень"],
        caloricity: 1341,
        price: 142,
    },
    {
        id: 21,
        img: "21",
        name: "Четыре сезона",
        composition: ["Фирменный пицца-соус", "моцарелла", "опята", "куриная грудка", "помидор", "перец", "лук", "шампиньоны", "пармезан", "зелень"],
        caloricity: 1479,
        price: 145,
    },
];
const compositionList = [
    {
        id: 1,
        name: "Моцарела",
        caloricity: 28,
        price: 15,
    },
    {
        id: 2,
        name: "Крветки",
        caloricity: 37,
        price: 35,
    },
    {
        id: 3,
        name: "Салями",
        caloricity: 42,
        price: 25,
    },
    {
        id: 4,
        name: "Лук",
        caloricity: 13,
        price: 7,
    },
    {
        id: 5,
        name: "Томаты",
        caloricity: 21,
        price: 17,
    },
    {
        id: 6,
        name: "Ветчина",
        caloricity: 37,
        price: 35,
    },
];

function CreatePizza({img, name, composition, caloricity, price}) {
    this.id = CreatePizza._id++;
    this.img = img;
    this.name = name;
    this.composition = composition;
    this.caloricity = caloricity;
    this.price = price;
    this.isFavourite = false;
}
CreatePizza._id = 1;

const createPiazzaArrayByClass = pizzaList => [...pizzaList].map(item => new CreatePizza(item));

const app = {
    renderCard: function(pizza) {
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-12 col-md-6 col-lg-4';

        const card = document.createElement('div');
        card.className = 'card';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const pizzaImage = document.createElement('img');
        pizzaImage.src = `../dev/images/${pizza.img}.jpg`;
        pizzaImage.className = 'card-img-top';

        const kcal = document.createElement('span');
        kcal.className  = 'badge badge-pill badge-success';
        kcal.innerText = `${pizza.caloricity} kcal`;

        const pizzaName = document.createElement('h3');
        pizzaName.className = 'card-title';
        pizzaName.innerHTML = `${pizza.name}`;

        const pizzaDescription = document.createElement('p');
        pizzaDescription.className = 'card-text';
        pizzaDescription.innerHTML = `${pizza.composition}`;

        const buttonPriceHolder = document.createElement('div');
        buttonPriceHolder.className = 'button-price-holder';

        const buttonBuyPizza = document.createElement('a');
        buttonBuyPizza.href = '#';
        buttonBuyPizza.className = 'btn btn-danger';
        buttonBuyPizza.innerText = 'Buy Pizza';

        const price = document.createElement('h3');
        price.innerText = `${pizza.price} \u20B4`;

        const like = document.createElement('input');
        like.type = 'checkbox';
        like.id = `#id${pizza.id}`;
        like.className ='like';

        const likeImage = document.createElement('label');
        likeImage.className = 'liked-image rounded';
        likeImage.htmlFor = like.id;
        likeImage.innerHTML = `<img src="../dev/images/dislike.png">`;

        function renderLike() {
            if (like.checked) {
                likeImage.innerHTML = `<img src="../dev/images/like.png" alt="liked">`;
                pizza.isFavourite = true;
            }
            else {
                likeImage.innerHTML = `<img src="../dev/images/dislike.png" alt="disliked">`;
                pizza.isFavourite = false;
            }
        }
        like.addEventListener('change', renderLike);

    buttonPriceHolder.append(buttonBuyPizza, price);
    cardBody.append(pizzaName, pizzaDescription, buttonPriceHolder);
    card.append(likeImage, like, kcal, pizzaImage, cardBody);
    col.append(card);
    return col;
},
    sectionPizzas: function() {
        const sectionWithPizzas = document.createElement('section');
        sectionWithPizzas.className = 'rowsOfCards';

        const row = document.createElement('div');
        row.className = 'row allPizza';

        createPiazzaArrayByClass(pizzaList).forEach(item => row.append(this.renderCard(item)));
        sectionWithPizzas.append(row);
        return sectionWithPizzas;
    },
    sectionMenu: function() {
    const sectionMenu = document.createElement('section');
    sectionMenu.className = 'menu';

    const row = document.createElement('div');
    row.className = 'row';

    const col = document.createElement('div');
    col.className = 'col-12 col-sm-12 col-md-4 col-lg-5 mb-2';

    const searchFilterHolder = document.createElement('div');
    searchFilterHolder.className = 'search-filter-holder';

    const search = document.createElement('input');
    search.type = 'text';
    search.className = 'pizza-filter form-control';
    search.placeholder = 'Название';

    const startSearchButton = document.createElement('button');
    startSearchButton.className = 'btn btn-danger ml-2';
    startSearchButton.innerText = 'Поиск';
    startSearchButton.onclick = () => {
        document.querySelector('.allPizza').innerHTML = '';
        createPiazzaArrayByClass(pizzaList)
            .filter(item => item.name.toLowerCase().includes(search.value.toLowerCase()))
            .forEach(item => document.querySelector('.allPizza').append(this.renderCard(item)));
    };

    const searchHolder = document.createElement('div');
    searchHolder.className = 'search-holder';

    const selectSort = document.createElement('select');
    selectSort.className = 'btn btn-secondary';

    const asc = document.createElement('option');
    asc.innerText = 'Цена: по возростанию';

    const desc = document.createElement('option');
    desc.innerText = 'Цена: по убывани';

    const sortByCaloriesAsc = document.createElement('option');
    sortByCaloriesAsc.innerText = 'Калории: по возростанию';

    const sortByCaloriesDesc = document.createElement('option');
    sortByCaloriesDesc.innerText = 'Калории: по убывани';

    const none = document.createElement('option');
    none.innerText = 'Фильтр';
    selectSort.onchange = function () {
        document.querySelector('.allPizza').innerHTML = '';
        [...createPiazzaArrayByClass(pizzaList)].sort((a, b) => {
            if (this.value === 'Цена: по возростанию') return a.price - b.price;
            if (this.value === 'Цена: по убывани') return b.price - a.price;
            if (this.value === 'Калории: по возростанию') return a.caloricity - b.caloricity;
            if (this.value === 'Калории: по убывани') return b.caloricity - a.caloricity;
            return 0;
        }).forEach(pizza => document.querySelector('.allPizza').append(app.renderCard(pizza)));
    };

    const selectCol = document.createElement('div');
    selectCol.className = 'col col-md-3 col-lg-3 mb-2 d-flex align-items-center justify-content-end';

    const minValue = document.createElement('input');
    minValue.className = 'min-value form-control';
    minValue.type = 'text';
    const maxValue = document.createElement('input');
    maxValue.className = 'max-value form-control';
    maxValue.type = 'text';

    const rangeFinderButton = document.createElement('button');
    rangeFinderButton.className = 'range-finder btn btn-danger ml-3';
    rangeFinderButton.innerText = 'Поиск';

    function findInRange() {
        document.querySelector('.allPizza').innerHTML = '';
        createPiazzaArrayByClass(pizzaList).filter(pizza => {
            if (pizza.price > minValue.value && pizza.price < maxValue.value) return pizza;
        }).forEach(pizza => document.querySelector('.allPizza').append(app.renderCard(pizza)));
    }

    rangeFinderButton.addEventListener('click',findInRange);


    const values = document.createElement('div');
    values.className = 'value-holder d-flex align-items-center';
    values.append(minValue, maxValue, rangeFinderButton);
    const valueHolder = document.createElement('div');
    valueHolder.className = 'col-12 col-md-5 col-lg-4 mb-2';
    valueHolder.append(values);

    const liveSearchCol = document.createElement('div');
    liveSearchCol.className = 'col-12 col-sm-12 col-md-4 col-lg-4 justify-content-between';

    const liveSearchHolder = document.createElement('div');
    liveSearchHolder.className = 'live-search';

    const liveInput = document.createElement('input');
    liveInput.className = 'live-input form-control';
    liveInput.placeholder = 'Live - поиск';

    liveInput.addEventListener('change', function (event) {
        document.querySelector('.allPizza').innerHTML = '';
        createPiazzaArrayByClass(pizzaList).filter(pizza => {
            if (pizza.name.toLowerCase().includes((event.target.value).toLowerCase())) return pizza;
        }).forEach(pizza => document.querySelector('.allPizza').append(app.renderCard(pizza)));
    });

        // liveInput.addEventListener('change', function (event) {
        //     document.querySelector('.allPizza').innerHTML = '';
        //     createPiazzaArrayByClass(pizzaList)
        //         .filter(pizza => {
        //             if (pizza.composition.includes((event.target.value).toLowerCase())) {
        //                 return pizza;
        //             }
        //     }).forEach(pizza => document.querySelector('.allPizza').append(app.renderCard(pizza)));
        // });

    liveSearchHolder.append(liveInput);
    liveSearchCol.append(liveSearchHolder);
    selectSort.append(none, asc, desc, sortByCaloriesAsc, sortByCaloriesDesc);
    selectCol.append(selectSort);
    searchFilterHolder.append(search, startSearchButton);
    col.append(searchFilterHolder);
    row.append(col, valueHolder, selectCol, liveSearchCol);
    sectionMenu.append(row);
    return sectionMenu;
},
    renderHeader: function() {
    const header = document.createElement('header');
          header.innerHTML = `
          <div class="container d-flex align-items-center justify-content-between py-3">
                <div class="logo-heading d-flex align-items-center">
                    <img src="../dev/images/logo.png" width="60px" alt="logo">
                    <h1>Ninja Pizza</h1>
                </div>
                <nav class="navbar navbar-expand-lg navbar-light bg-info rounded">
                    <ul class="navbar-nav">
                        <li class="nav-item active"><a href="#" class="nav-link">Пицца</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Напитки</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Контакты</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Корзина</a></li>
                    </ul>
                </nav>
          </div>`;
    return header;
},
    renderMain: function () {
        const main = document.createElement('main');
        const mainContainer = document.createElement('div');
              mainContainer.className = 'container';
        mainContainer.append(this.sectionMenu(), this.sectionPizzas());
        main.append(mainContainer);
        return main;
    },
    renderFooter: function() {
    const footer = document.createElement('footer');
    const footerContainer = document.createElement('div');
          footerContainer.className = 'container';
    return footer;
},
    renderWrapperWithFullStructure: function() {
    const wrapper = document.createElement('div');
          wrapper.className = 'wrapper';
    document.body.append(wrapper);
    wrapper.append(this.renderHeader(), this.renderMain(), this.renderFooter());
},
};
app.sectionPizzas();
app.sectionMenu();
app.renderHeader();
app.renderMain();
app.renderFooter();
app.renderWrapperWithFullStructure();