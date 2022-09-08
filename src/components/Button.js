const Button = () => {
  return (
    <button onClick={doSomething} className="btn">
      Contact Us
    </button>
  );
};

const doSomething = () => {
  console.log('Button is clicked');
};

export default Button;
