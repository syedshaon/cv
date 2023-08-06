export function ShowSkills({ skl }) {
  return (
    <div className="others-entry" style={{ display: skl.visible ? "block" : "none" }}>
      <h3 className="title">Skills</h3>
      <ul className="summary">
        {/* Summary separated with semicolor(;) are converted to a list(<li></li>) */}
        {skl.list.split(";").map((element, i) => {
          return <li key={i}>{element}</li>;
        })}
      </ul>
    </div>
  );
}
