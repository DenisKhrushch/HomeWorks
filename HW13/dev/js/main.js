'use strict';

function renderMain() {
    const main = document.createElement('main');
    const mainContainer = document.createElement('div');
    mainContainer.className = 'container';

    mainContainer.append(sectionMenu(), sectionPizzas());
    main.append(mainContainer);
    return main;
}

function renderWrapperWithFullStructure() {
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    document.body.append(wrapper);
    wrapper.append(renderHeader(), renderMain(), renderFooter());
}

renderWrapperWithFullStructure();