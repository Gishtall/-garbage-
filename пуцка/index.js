render();

function render() {
    const app = document.getElementById('app');

    var user1 = getUserItemHtml('Dima', 'https://it-incubator.by', 'it-incubator.by');
    var user2 = getUserItemHtml('Marina', 'https://marina.com', 'marina.com');
    var user3 = getUserItemHtml('Nastya', 'https://yaustroyusskoro.com', 'yaustroyusskoro.com');
    var user4 = getUserItemHtml('Vasya', 'https://sdfsdfdfd.com', 'sdfsdfdfd.com');

    // app.innerHTML = `${user1} ${user2} ${user3} `;
    // app.innerHTML += `${user4}`;

    app.append(user1, user2, user3, user4);




}
var buttons = document.querySelectorAll('[data-role="edit-name"]');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', func);
}


function func(e) {
    let userItemEl = e.currentTarget.closest('[data-role="user-item-component"]');

    var input = userItemEl.querySelector('[data-role="name-editor"]');
    input.classList.toggle('hide');

    var spanName = userItemEl.querySelector('[data-role="name"]');
    spanName.classList.toggle('hide');

}
