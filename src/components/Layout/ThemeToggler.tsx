import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggler = () => {
  const elem = React.useRef<HTMLDivElement | null>(null);
  const themeData = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTheme(themeData);
  }, [themeData]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    if (elem.current) {
      if (theme === 'dark') {
        elem.current.style.transform = 'translate(210%)';
      } else if (theme === 'light') {
        elem.current.style.transform = 'translate(40%)';
      }
    }
  }, [theme]);

  const onClick = () => {
    if (theme === 'dark') {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  return (
    <div className="theme-toggler">
      <div className="picker" ref={elem}></div>
      <FaSun size={20} className="icon" onClick={onClick} />
      <FaMoon size={20} className="icon" onClick={onClick} />
    </div>
  );
};

export default ThemeToggler;
