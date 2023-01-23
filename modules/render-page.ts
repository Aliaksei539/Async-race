import * as el from './createEl'

export async function renderPageGarage () {
    let response = await fetch('http://127.0.0.1:3000/garage?_page&_limit=7');
    let result: el.IarrValue[] = await response.json();   

    el.h1.innerText = 'Garage';
    el.h2.innerText = 'Page';
 
     document.body.append(el.divBtnContainer, el.createInputContainer('Create'), 
     el.h1, el.h2, el.createCar(result) )
}