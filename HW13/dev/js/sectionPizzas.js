function sectionPizzas() {
    const sectionWithPizzas = document.createElement('section');
    sectionWithPizzas.className = 'rowsOfCards';

    const row = document.createElement('div');
    row.className = 'row';

    pizzaList.forEach(item => row.append(renderCard(item)));
    sectionWithPizzas.append(row);
    return sectionWithPizzas;
}