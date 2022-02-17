// scroll to top
window.addEventListener('scroll', function () {
  let scroll = document.querySelector('.scrollTop')
  scroll.classList.toggle('active', window.scrollY > 300)
})

document.querySelector('.scrollTop').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
  })
})

window.onload = function () {
  window.scrollTo({
    top: 0,
  })
}

let data = [
  {
    project_image: 'images/projects/comments-section.png',
    project_name: 'FullStack CRUD Website',
    project_live: 'https://interactive-comments-sec-1f663.firebaseapp.com/',
    project_repo: 'https://github.com/soumya495/interactive-comments-section',
    react: true,
  },
  {
    project_image: 'images/projects/todo-app.png',
    project_name: 'Todo App',
    project_live: 'https://soumya495.github.io/todo-app/',
    project_repo: 'https://github.com/soumya495/todo-app',
    react: true,
  },
  {
    project_image: 'images/projects/jobs-listing.png',
    project_name: 'Jobs Listings',
    project_live: 'https://soumya495.github.io/Job-Listings/',
    project_repo: 'https://github.com/soumya495/Job-Listings',
    react: true,
  },
  {
    project_image: 'images/projects/calc.png',
    project_name: 'Calculator',
    project_live: 'https://soumya495.github.io/calculator-app/',
    project_repo: 'https://github.com/soumya495/calculator-app',
  },
  {
    project_image: 'images/projects/where-in-the-world.png',
    project_name: 'Rest Coutries API',
    project_live: 'https://soumya-rest-countries-api.netlify.app/',
    project_repo: 'https://github.com/soumya495/rest-countries-api',
    react: true,
  },
  {
    project_image: 'images/projects/ig-ui.png',
    project_name: 'Instagram UI',
    project_live: 'https://soumya495.github.io/instagram-clone/#',
    project_repo: 'https://github.com/soumya495/instagram-clone',
  },
  {
    project_image: 'images/projects/portfolio.png',
    project_name: 'Portfolio',
    project_live: 'https://soumya495.github.io/Soumya-Banerjee/',
    project_repo: 'https://github.com/soumya495/Soumya-Banerjee',
  },
  {
    project_image: 'images/projects/pick-game.png',
    project_name: 'Pick Game',
    project_live: 'https://soumya495.github.io/pick-game/',
    project_repo: 'https://github.com/soumya495/pick-game',
  },
  {
    project_image: 'images/projects/splitter.png',
    project_name: 'Splitter',
    project_live: 'https://soumya495.github.io/splitter/',
    project_repo: 'https://github.com/soumya495/splitter',
  },
]

// loading the projects
const projectsList = document.querySelector('.projects-list')

data.forEach((d) => {
  projectsList.innerHTML += `
  <div class="project-card">
  ${
    d.react
      ? `<div class="react-label"><img src="images/icons/react-js.svg" alt="react-icon"></img></div>`
      : ''
  }
  <div class="project-img">
      <img src=${d.project_image} alt="project-img">
  </div>
  <div class="project-info">
      <h3>${d.project_name}</h3>
      <div class="links">
          <a href=${d.project_live} target="_blank" class="url">
          <img src="images/icons/link.png" alt="link">
      </a>
      <a href=${d.project_repo} target="_blank" class="code">
          <img src="images/icons/coding.png" alt="code">
      </a>
      </div>
  </div>
</div>
  `
})
