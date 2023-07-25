
const darkMode = document.querySelector('#darkMode');
const searchUser = document.querySelector('#searchUser')
const searchInput = document.querySelector('#Search');
const apiGitHub = "https://api.github.com/users/"

function setDarkModeState(isDarkMode) {
  localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
}

function DarkModeToggle() {
  if (document.documentElement.classList.contains('dark')) {
    darkMode.innerHTML = `LIGHT <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white dark:text-textDark">
        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
      </svg>`;
  } else {
    darkMode.innerHTML = `DARK <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-white ">
        <path fill-rule="evenodd"
          d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
          clip-rule="evenodd" />
      </svg>`;
  }
}

if (localStorage.getItem('darkMode') === 'true') {
  document.documentElement.classList.add('dark');
}

DarkModeToggle();

darkMode.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  DarkModeToggle();
  setDarkModeState(document.documentElement.classList.contains('dark'));
});

document.addEventListener('DOMContentLoaded', () => {
  gitUser('octocat');
});

searchUser.addEventListener('click', () => {
  const userInput = searchInput.value.trim();
if (userInput !== '') {
  gitUser(userInput);
  document.querySelector(".notice").classList.add('hidden');


} else {
  document.querySelector(".notice").classList.remove('hidden');

}
})

const gitUser = async (username) => {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      cache: 'no-cache'
    });
    if (!res.ok) {
      throw new Error('User not found.');
    }
    const data = await res.json()
    console.log(data)
    document.querySelector('#nameUser').innerHTML = `${data.name}`
    document.querySelector('#nickName').innerHTML = `@${data.login}`
    document.querySelector('#createUser').innerHTML = `Joined ${new Date(data.created_at).toDateString()}`
    document.querySelector('#avatarUser').src = data.avatar_url

    const bio = data.bio;
    const bioUserElements = document.querySelectorAll('#bioUser');
    bioUserElements.forEach((element) => {
      element.innerHTML = bio !== null && bio !== '' ? bio : 'This profile has no bio';
    })

    const publicRepoElements = document.querySelectorAll('#publicRepo');
    publicRepoElements.forEach((element) => {
      element.innerHTML = `${data.public_repos}`
    })
    const followersElements = document.querySelectorAll('#followers');
    followersElements.forEach((element) => {
      element.innerHTML = `${data.followers}`
    })
    const followingElements = document.querySelectorAll('#following');
    followingElements.forEach((element) => {
      element.innerHTML = `${data.following}`
    })
    const locationElements = document.querySelectorAll('#location');
    locationElements.forEach((element) => {
      element.innerHTML = `${data.location}`
    })
    const blogElements = document.querySelectorAll('#blog');
    blogElements.forEach((element) => {
      element.innerHTML = `${data.blog}`
    })
    const companyElements = document.querySelectorAll('#company');
    companyElements.forEach((element) => {
      element.innerHTML = `${data.company}`
    })
    const twitterIconElements = document.querySelectorAll('#twitterIcon');
    const twitterUsernameElements = document.querySelectorAll('#twitterUsername');
    const color = data.twitter_username === null || data.twitter_username.trim() === '' ? '#9ca3af' : 'currentColor';
    twitterIconElements.forEach((element) => {
      element.style.color = color;
    })
    twitterUsernameElements.forEach((element) => {
      element.innerHTML = `${data.twitter_username === null ? 'Not Avaliable' : data.twitter_username}`;
      element.style.color = color;
    })
  } catch (error) {
    const errorMessageElement = document.querySelector('#error-message');
    errorMessageElement.textContent = 'Error: User not found';
  
    if (errorMessageElement.classList.contains('hidden')) {
      errorMessageElement.classList.remove('hidden');
      
    } else {
      errorMessageElement.classList.add('hidden');
    }  
    errorMessage();
    
  }

  
};
const errorMessage = () => {
  const errorMessageElement = document.querySelector('#error-message');
  errorMessageElement.classList.remove('hidden');

  setTimeout(() => {
    errorMessageElement.classList.add('hidden');
  }, 5000);
};
