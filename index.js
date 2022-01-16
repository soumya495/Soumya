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
    project_name: 'Where in the World',
    project_live: 'https://soumya495.github.io/Where-in-the-world/',
    project_repo: 'https://github.com/soumya495/Where-in-the-world',
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
  {
    project_image: 'images/projects/guess-my-number.png',
    project_name: 'Guess my Number',
    project_live: 'https://soumya495.github.io/guess-my-number/',
    project_repo: 'https://github.com/soumya495/guess-my-number',
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
