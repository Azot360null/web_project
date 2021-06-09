const headerNav = 
  `<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Мастер по поиску руководителей ВКР</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- ToDo: Меню совсем сырое -->
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#" id="settings">Настройки</a>
            <a class="dropdown-item" href="#" id="exit">Выход</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>`;

const footer = 
 `<div class="container">
    <span class="text-muted">@ИРНИТУ2021</span>
  </div>`;

$(document).ready(() => {
  document.getElementById('header').innerHTML = headerNav;
  document.getElementById('footer').innerHTML = footer;
})

function checkCookies(){
  
}