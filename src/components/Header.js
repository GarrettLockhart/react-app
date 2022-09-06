const Header = ({ title }) => {
  return (
    <header>
      <h1 className="header">{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: 'This is a header',
};

export default Header;
