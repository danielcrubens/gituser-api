
const darkMode = document.querySelector('#darkMode');

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