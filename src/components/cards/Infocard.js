const Infocard = ({ imgSrc, text }) => {
  return (
    <div>
      <p>{text}</p>
      <img src={imgSrc} alt="cat" />
    </div>
  );
};

Infocard.defaultProps = {
  imgSrc:
    'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  text: 'This is an image',
};

export default Infocard;
