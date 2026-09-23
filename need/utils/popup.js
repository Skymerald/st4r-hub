const popupWrapperTemplate = document.createElement('template');
popupWrapperTemplate.innerHTML = `
    <div class="popup-wrapper hide-popup"></div>
`;

document.body.appendChild(popupWrapperTemplate.content.firstElementChild);

let popupWrapper = document.querySelector('.popup-wrapper');

const popupStyle = document.createElement('link');
popupStyle.rel = 'stylesheet';
popupStyle.href = 'utils/style/popup.css';
document.head.appendChild(popupStyle);

function popupInfo(text){
    openPopup();

    const popupTemplate = `
        <div class="popup panel">
            <p class="popup-text">${text}</p>
            <button class="popup-button" click="closePopup()">OK</button>
        </div>
    `;

    popupWrapper.innerHTML += popupTemplate;
}

function popupCustom(HTML){
    openPopup();

    const template = `
        <div class="popup panel">${HTML}</div>
    `;

    popupWrapper.innerHTML += template;
}

function closePopup(){
    popupWrapper.querySelector('.popup').remove();

    popupWrapper.classList.remove('show-popup');
    popupWrapper.classList.add('hide-popup');
}

function openPopup(){
    popupWrapper.classList.remove('hide-popup');
    popupWrapper.classList.add('show-popup');
}