import React from 'react'
const ThemeSwitcher = ({ theme, action }) => {
  const toggleTheme = () => {
    switch (theme) {
      case 'light':
        action('relax');
        localStorage.setItem('theme', 'relax');
        break;
      case 'relax':
        action('dark');
        localStorage.setItem('theme', 'dark');
        break;
      case 'dark':
        action('light');
        localStorage.setItem('theme', 'light');
        break;
      default:
        action('relax');
        localStorage.setItem('theme', 'relax');
        break;
    }
  };
  return (
    <button className="text-copy-primary hover:text-gray-600 flex mr-8 mb-6 lg:mb-0 cursor-pointer theme" onClick={toggleTheme}>
      {theme === 'dark' && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>}
      {theme === 'relax' && <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-coffee"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>}
      {theme === 'light' && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>}
    </button>
  );
};

export default ThemeSwitcher;