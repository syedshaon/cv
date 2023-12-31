export function Others({ oth }) {
  return (
    <div className="others-entry">
      <h3 className="title">{oth.title}</h3>
      <ul className="summary">
        {/* Summary separated with semicolor(;) are converted to a list(<li></li>) */}
        {oth.summary.split(";").map((element, i) => {
          return <li key={i}>{element}</li>;
        })}
      </ul>
    </div>
  );
}
