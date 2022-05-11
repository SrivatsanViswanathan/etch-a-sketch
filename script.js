header();

function header() {
 const header = document.getElementById('header');

 const container = document.createElement('div');
 container.classList.add('header-container');
 container.setAttribute('id', 'header-container');
 header.append(container);

 const title = document.createElement('h1');
 title.textContent = ('Welcome to Etch a Sketch');
 container.append(title);
}