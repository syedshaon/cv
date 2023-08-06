export function ShowEducation({ degree }) {
  return (
    <div className="eduEx-list">
      <div className="eduEx-list-top">
        <div className="title-sub">
          <h3 className="title">{degree.schoolName}</h3>
          <em>{degree.gpa}</em>
        </div>
        <div className="year-loc">
          <p className="year">
            {degree.startDate} - {degree.endDate}
          </p>
          <p className="location">{degree.location}</p>
        </div>
      </div>

      <em className="result">Result: {degree.schoolName}</em>
      <ul className="summary">
        {/* Summary separated with semicolor(;) are converted to a list(<li></li>) */}
        {degree.additionalInfo.split(";").map((element, i) => {
          return <li key={i}>{element}</li>;
        })}
      </ul>
    </div>
  );
}
