
// ------colors table activition------

const colorSwitcher = document.querySelector('.toggler');
const colorsTable = document.querySelector('.color-switch')
colorSwitcher.addEventListener('click', () => {
  colorsTable.classList.toggle('active')
})
window.addEventListener('scroll', () => {
  if (colorsTable.classList.contains('active')) {
    colorsTable.classList.remove('active')
  }
});

// ------Color Setting------

const colors = document.querySelectorAll ('.alt');
const tableColors = document.querySelectorAll ('.colors');

function setActive(color) {
  localStorage.setItem('color', color);
  changeColor()
}
function changeColor() {
  colors.forEach((style) => {
    if (localStorage.getItem('color') === style.getAttribute('title')) {
      style.removeAttribute('disabled');
    } else {
      style.setAttribute('disabled','true');
    }
  });
}
window.addEventListener('load', () => {
  colors.forEach((i) => {
    if (i.getAttribute('title') === localStorage.getItem('color')) {
      i.removeAttribute('disabled')
    }
  })
})

// ------Theme Setting------

const dayNight = document.querySelector('.day-night');

dayNight.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    dayNight.querySelector('i').classList.add('fa-sun');
    dayNight.querySelector('i').classList.remove('fa-moon');
  } else if (!document.body.classList.contains('dark')) {
    dayNight.querySelector('i').classList.add('fa-moon');
    dayNight.querySelector('i').classList.remove('fa-sun');
  }
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark')
  }
  else {
    localStorage.setItem('theme', 'light')
  }
})

window.addEventListener('load', () => {
  if (localStorage.getItem('theme') === 'dark') {
    dayNight.querySelector('i').classList.add('fa-sun');
    dayNight.querySelector('i').classList.remove('fa-moon');
    document.body.classList.add('dark');
  } else {
    dayNight.querySelector('i').classList.add('fa-moon');
    dayNight.querySelector('i').classList.remove('fa-sun');
    document.body.classList.remove('dark');
  }
})

// ------ toggle sidebar ------

const toggleSidebar = document.querySelector('.bars');
const sidebar = document.querySelector('aside');
const main = document.querySelector('.main');

toggleSidebar.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  toggleSidebar.classList.toggle('active');
  main.classList.toggle('active');
})

// ------ change section active ------

const links = document.querySelectorAll('.nav li a');
const sections = document.querySelectorAll('section');

links.forEach((link,i) => {
	link.addEventListener('click', () => {
		sections.forEach(sec => {
			sec.classList.remove('active');
		});
		links.forEach(l => {
			l.classList.remove('active');
		});
		toggleSidebar.classList.toggle('active');
		sections[i].classList.add('active');
		links[i].classList.add('active');
		sidebar.classList.remove('active');
	});
});
const logo = document.querySelector('aside .logo a');
console.log(logo)
logo.addEventListener('click', () => {
	// if (!sections[0].classList.contains('active')) {
	sections.forEach(sec => {
		sec.classList.remove('active');
	});
	links.forEach(l => {
    l.classList.remove('active');
	});
	toggleSidebar.classList.remove('active');
	sections[0].classList.add('active');
	links[0].classList.add('active');
	sidebar.classList.remove('active');
	
})


const container = document.querySelector('.container')
container.addEventListener('click', () => {
  colorsTable.classList.remove('active')
  toggleSidebar.classList.remove('active');
  sidebar.classList.remove('active');
})