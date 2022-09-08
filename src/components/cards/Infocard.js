const Infocard = ({ imgSrc, text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

Infocard.defaultProps = {
  text: 'This is an image',
};

export default Infocard;
