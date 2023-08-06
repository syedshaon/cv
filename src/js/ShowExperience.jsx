export function ShowExperience({ exp }) {
  return (
    <div className="eduEx-list">
      <div className="eduEx-list-top">
        <div className="title-sub">
          <h3 className="title">{exp.companyName}</h3>
          <em>{exp.jobTitle}</em>
        </div>
        <div className="year-loc">
          <p className="year">
            {exp.startDate} - {exp.endDate}
          </p>
          <p className="location">{exp.location}</p>
        </div>
      </div>

      <ul className="summary">
        {/* Summary separated with semicolor(;) are converted to a list(<li></li>) */}
        {exp.additionalInfo.split(";").map((element, i) => {
          return <li key={i}>{element}</li>;
        })}
      </ul>
    </div>
  );
}
