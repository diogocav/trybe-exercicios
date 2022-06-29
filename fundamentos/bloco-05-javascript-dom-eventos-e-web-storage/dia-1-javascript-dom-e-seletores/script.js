const header = document.querySelector('#header-container')
header.style.backgroundColor = 'lightgreen'

const footer = document.querySelector('#footer-container')
footer.style.backgroundColor = 'darkgreen'

document.querySelector('.emergency-tasks').style.backgroundColor = 'pink'
document.querySelector('.no-emergency-tasks').style.backgroundColor = 'yellow'
document.querySelectorAll('.emergency-tasks div h3')[0].style.backgroundColor = 'purple'
document.querySelectorAll('.emergency-tasks div h3')[0].style.color = 'pink'
document.querySelectorAll('.emergency-tasks div h3')[1].style.color = 'pink'
document.querySelectorAll('.emergency-tasks div h3')[1].style.backgroundColor = 'purple'
document.querySelectorAll('.no-emergency-tasks div h3')[0].style.backgroundColor = 'black'
document.querySelectorAll('.no-emergency-tasks div h3')[0].style.color = 'yellow'
document.querySelectorAll('.no-emergency-tasks div h3')[1].style.color = 'yellow'
document.querySelectorAll('.no-emergency-tasks div h3')[1].style.backgroundColor = 'black'