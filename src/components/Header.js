import Button from './Button';

const Header = ({ title }) => {
  return (
    <header className="header-container">
      <h1 className="header">{title}</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>
          <Button />
        </li>
      </ul>
    </header>
  );
};

Header.defaultProps = {
  title: 'Info-Verse',
};

export default Header;
