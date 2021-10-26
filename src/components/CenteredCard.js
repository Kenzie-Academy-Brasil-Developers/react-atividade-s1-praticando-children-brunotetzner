import "./Card.css";
function ChildsOnReact({ children }) {
  return (
    <div className="CenteredCard">
      <span>{children}</span>
    </div>
  );
}
export default ChildsOnReact;
