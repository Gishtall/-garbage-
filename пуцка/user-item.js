function getUserItemHtml(name, siteLink, siteName) {

    var newDiv = document.createElement("div");
    newDiv.classList.add('user-item');
    newDiv.setAttribute('data-role', 'user-item-component');
    newDiv.innerHTML = `
        <input value='${name}' class='hide' data-role='name-editor'/>
        <span data-role='name'>${name}</span> - <a href='${siteLink}'>${siteName}</a> 
        <span class='user-item__edit' data-role='edit-name'>edit</span>
    `

    let button = newDiv.querySelector('span.user-item__edit');
    button.addEventListener('click', func);

    return newDiv;
}