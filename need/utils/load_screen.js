const loadScreenTemplate = document.createElement('template');
loadScreenTemplate.innerHTML = `
    <div class='load-screen hide-load'>
        <i class="fa-solid fa-circle-notch fa-spin"></i>
    </div>
`;

document.body.appendChild(loadScreenTemplate.content.firstElementChild);

let loadScreen = document.querySelector('.load-screen');

const loadScreenStyle = document.createElement('link');
loadScreenStyle.rel = 'stylesheet';
loadScreenStyle.href = 'utils/style/load_screen.css';
document.head.appendChild(loadScreenStyle);

function showLoading(){
    loadScreen.classList.remove('hide-load');
    loadScreen.classList.add('show-load');
}
function hideLoading(){
    loadScreen.classList.remove('show-load');
    loadScreen.classList.add('hide-load');
}