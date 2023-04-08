document.querySelector('.fpass-btn').addEventListener('click', function(){
    document.querySelector('.fpass-popup-box').style = 'transform: scale(1);';
})
document.querySelector('.close-btn').addEventListener('click', function(){
    document.querySelector('.fpass-popup-box').style = 'transform: scale(0);';
})


        const toggleBtn = document.querySelector('.toggle_btn')
        const toggleBtnIcon = document.querySelector('.toggle_btn i')
        const dropDownMenu = document.querySelector('.dropdown_menu')
  
        toggleBtn.onclick = function () {
          dropDownMenu.classList.toggle('open')
          const isOpen = dropDownMenu.classList.contains('open')
  
          toggleBtnIcon.classList = isOpen
          ? 'fa-solid fa-xmark'
          : 'fa-solid fa-bars-staggered'
        }
