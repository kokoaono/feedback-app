function Header({ text }) {
  const headerStyles = {
    backgroundColor: "blue",
    color: "red",
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}
Header.defaultProps = {
  text: "Feedback App",
  bgcolor: "rgba(0, 0, 0, 0.4)",
  textColor: "#ff6a95",
};

export default Header;
