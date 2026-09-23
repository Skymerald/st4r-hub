const form = document.querySelector('form');

const API_URL = 'http://127.0.0.1:8000/backend';

form.addEventListener('submit', async function(e){
    e.preventDefault();

    const inputs = document.querySelectorAll('input');

    let blankInputs = false;

    inputs.forEach(input => {
        if(input.value == '' || input.value == null){
            blankInputs = true;
        }
    });

    if(blankInputs == true){
        push("Les entrées ne peuvent pas être vide.", "warning");
    }
    else{
        connect(encodeURIComponent(document.querySelector('#user').value), encodeURIComponent(document.querySelector('#password').value));
    }
});

async function getQCM(token){
    const qcmResponse = await fetch(API_URL + '/api/qcm?token=' + token);

    const qcm = await qcmResponse.json();

    if(qcm.code == 200){
        const qcmTemplate = `
            <div class="qcm">
                <p class="question">${b64DecodeUnicode(qcm.qcmData.question)}</p>
                <div class="answers"></div>
            </div>
        `;

        popupCustom(qcmTemplate);

        qcm.qcmData.answers.forEach(answer => {
            const answerTemplate = `
                <button class="answer" onclick="answerQCM('${answer}')">${b64DecodeUnicode(answer)}</button>
            `;

            document.querySelector(".qcm").querySelector(".answers").innerHTML += answerTemplate;
        });                    
    }
    else{
        console.log(qcm);

        push("Une erreur est survenue.", "error");
    }
}

async function answerQCM(answer){
    showLoading();

    const request = await fetch(API_URL + '/api/qcm?token=' + sessionStorage.getItem("token") + '&response=' + answer, { method : 'POST' });

    const response = await request.json();

    if(response.code == 200){
        try{
            localStorage.setItem("cn", response.cn);
            localStorage.setItem("cv", response.cv);
            localStorage.setItem("id", document.querySelector('#user').value);

            hideLoading();
            closePopup();

            connect(encodeURIComponent(document.querySelector('#user').value), encodeURIComponent(document.querySelector('#password').value), response.cn, response.cv);
        }
        catch(error){
            console.log(error);
            console.log(response);

            push("Une erreur est survenue.", "error");
        }
    }
    else if(response.code == 500){
        hideLoading();
        closePopup();

        console.log(response);

        push("Réponse au QCM incorrect", "error");
    }
    else{
        hideLoading();
        closePopup();

        console.log(response);

        push("Une erreur est survenue.", "error");
    }
}

async function connect(id, password, cn = null, cv = null){
    showLoading();

    try{
        let url = null;

        if(cn && cv){
            url = API_URL + '/api/connect?id=' + id + '&password=' + password + '&cn=' + cn + '&cv=' + cv;
        }
        else if (localStorage.getItem('cn') && localStorage.getItem('cv') && localStorage.getItem("id") == document.querySelector('#user').value){
            url = API_URL + '/api/connect?id=' + id + '&password=' + password + '&cn=' + localStorage.getItem('cn') + '&cv=' + localStorage.getItem('cv');
        }
        else{
            url = API_URL + '/api/connect?id=' + id + '&password=' + password;
        }

        const request = await fetch(url);

        const response = await request.json();

        if(response.code == 200){
            hideLoading();

            console.log(response);

            const template = `
                <h1>${response.data[0].email}</h1>
            `

            popupCustom(template);

            const token = response.token;

            sessionStorage.setItem("token", token)

            push("Connexion réussie.", "success");

            const timetableRequest = await fetch(API_URL + '/api/timetable?id=' + response.data[0].id + '&token=' + response.token);
            const timetableResponse = await timetableRequest.json();

            console.log(timetableResponse);
        }
        else if(response.code == 250){
            hideLoading();

            push("QCM nécessaire.", "warning");

            const token = response.token;

            sessionStorage.setItem("token", token)

            getQCM(token);
        }
        else if(response.code == 505) {
            push("Identifiant et/ou mot de passe incorrect.", "error")
        }
        else{
            hideLoading();

            console.log(response);

            push("Une erreur est survenue.", "error");
        }
    }
    catch(error){
        hideLoading();
        console.log(error);

        push("Une erreur est survenue.", "error");
    }
}