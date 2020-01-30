function renderHeader() {
    const header = document.createElement('header');

    const headerContainer = document.createElement('div');
    headerContainer.className = 'container';

    const logoNavHolder = document.createElement('div');
    logoNavHolder.className = 'logo-nav-holder';

    const logo = document.createElement('div');
    logo.className = 'logo';

    const logoImage = document.createElement('img');
    logoImage.src = '../dev/images/logo.png';
    logoImage.alt = 'logo';
    logoImage.style.width = '5rem';
    logo.append(logoImage);

    const nav = document.createElement('nav');
    nav.className = 'nav';

    const siteName = document.createElement('h1');
    siteName.innerText = 'Ninja Pizza';

    nav.append(siteName);

    logoNavHolder.append(logo, nav);
    headerContainer.append(logoNavHolder);
    header.append(headerContainer);
    return header;
}