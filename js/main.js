// Show more cards
const btnShowMoreCards = document.querySelector('.btn-more');
const cards = document.querySelectorAll('.card__link__hidden');
// console.log(cards);
btnShowMoreCards.onclick = function () {
    cards.forEach(card => card.classList.remove('card__link__hidden'));
}
//Show or hide the widgts body content
const widgets = document.querySelectorAll('.widget');
console.log(widgets);
widgets.forEach(function (widget) {
    widget.addEventListener('click', function (e) {
        if (e.target.classList.contains('widget__title')) {
            console.log("click");
            e.target.classList.toggle('widget__title__active');
            e.target.nextElementSibling.classList.toggle('widget__body__hidden');
        }
    });
})

