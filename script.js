function changeMode(){
    changeClasses()
    changeText()
}
function changeClasses(){
    button.classList.toggle(darkModeClass)
    h1.classList.toggle(darkModeClass)
    footer.classList.toggle(darkModeClass)
    body.classList.toggle(darkModeClass)
}
function changeText(){
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode'
    if (body.classList.contains(darkModeClass)){
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + ' ON'
    } else {
        button.innerHTML = darkMode;
        h1.innerHTML = lightMode + ' ON'
    }
}

const darkModeClass = 'dark-mode'
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const footer = document.getElementsByTagName('footer')[0];
const body = document.getElementsByTagName('body')[0];

button.addEventListener('click', changeMode);

console.log(footer); 
