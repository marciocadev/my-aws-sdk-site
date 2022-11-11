import { BsSun, BsMoonStars } from 'react-icons/bs';
import { useDarkMode } from "../../hooks/useDarkmode";

export const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);

  return (
    <span onClick={handleMode}>
      {darkTheme ? (
        <BsSun size='20' className='top-navigation-icon' />
      ) : (
        <BsMoonStars size='20' className='top-navigation-icon' />
      )}
    </span>
  );
}