let label;

function getData() {
    const request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/test', true);
    request.send();
    request.onload = () => {
        if(request.status >= 200 && request.status < 400){
            let data = JSON.parse(request.responseText);
            search(3, data);
            console.log(label);
        } else {
            console.log('We connected to the server, but it returned an error.');
        }
    };
    request.onerror = () => console.log('Connection error.');
}


function search(id, data) {
    if(id === data.id){
        label = data.label;
        return;
    }
    if(data.child){
        for(let i=0; i< data.child.length; i++){
            search(id, data.child[i]);
        }
    }   
}


function formValidation(){
    if(nameValidation() && addressValidation() && cityValidation() && zipValidation() && stateValidation()){
        return true;   
    } else {
        return false;
    }
}

function nameValidation(){
    let name = document.getElementById('name');
    let nameErr = document.getElementById('name_err');
    let alpha = /^[A-Za-z]+$/;
    if(name.value.length > 1 && name.value.length < 100 && name.value.match(alpha)){
        nameErr.textContent = "";
        name.style.border = "none";
        return true;
    } else {
        name.style.border = "1px solid red";
        nameErr.textContent = "name entered incorrectly";
        return false;
    }
    
}

function addressValidation(){
    let address = document.getElementById('address');
    let addressErr = document.getElementById('address_err');
    let alphanumeric = /^[0-9a-zA-Z]+$/;
    if(address.value.length > 1 && address.value.length < 100 && address.value.match(alphanumeric)){
        addressErr.textContent = "";
        address.style.border = "none";
        return true;
    } else {
        address.style.border = "1px solid red";
        addressErr.textContent = "address entered incorrectly";
        return false;
    }
}

function cityValidation(){
    let city = document.getElementById('city');
    let cityErr = document.getElementById('city_err');
    let alphanumeric = /^[0-9a-zA-Z]+$/;
    if(city.value.length > 1 && city.value.length < 100 && city.value.match(alphanumeric)){
        cityErr.textContent = "";
        city.style.border = "none";
        return true;
    } else {
        city.style.border = "1px solid red";
        cityErr.textContent = "city entered incorectly";
        return false;
    }
}

function stateValidation(){
    let state = document.getElementById('state');
    let stateErr = document.getElementById('state_err');
    if(state.value === 'Select state'){
        state.style.borderBottom = "1px solid red";
        stateErr.textContent = "Select state";
        return false;
    } else {
        state.style.border = "none";
        stateErr.textContent = "";
    }
}

function zipValidation(){
    let zip = document.getElementById('zip');
    let zipErr = document.getElementById('zip_err');
    let numeric = /^[0-9]+$/;
    if(zip.value.match(numeric) && zip.value.length == 5){
        zipErr.textContent = "";
        zip.style.border = "none";
        return true;
    } else {
        zip.style.border = "1px solid red";
        zipErr.textContent = "zip entered incorectly";
        return false;
    }
}

function resetForm(){
    document.getElementById("form").reset();
};






