function Button({ children, clickHandle }) {
  return (
    <button className="button" onClick={clickHandle}>
      {children}
    </button>
  );
}

export default Button;
