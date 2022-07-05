function Card({ children, reverse }) {
  //conditinal class
  //   return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
  return (
    //conditional style
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}
Card.defaultProps = {
  reverse: false,
};

export default Card;
