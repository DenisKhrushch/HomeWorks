function renderCard(pizza) {
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

    buttonPriceHolder.append(buttonBuyPizza, price);
    cardBody.append(pizzaName, pizzaDescription, buttonPriceHolder);
    card.append(kcal, pizzaImage, cardBody);
    col.append(card);
    return col;
}