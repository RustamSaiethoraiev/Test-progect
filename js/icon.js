const wraper = document.querySelector('.menu-icon-wraper');
const sidebar = document.querySelector('.sidebar');
wraper.onclick = function () {
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');
}
