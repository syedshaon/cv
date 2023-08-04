export function ShowExperience(params) {
  return (
    <div className="eduEx experience">
      <h2 className="title">Experience</h2>

      <div className="eduEx-list">
        <div className="eduEx-list-top">
          <div className="title-sub">
            <h3 className="title">Stark Corp</h3>
            <em>Software Engineer</em>
          </div>
          <div className="year-loc">
            <p className="year">June 2019 - Present</p>
            <p className="location">San Francisco, USA</p>
          </div>
        </div>

        <ul className="summary">
          <li>Lead a team of developers in designing and implementing new features for the company's flagship product.</li>
        </ul>
      </div>
      <div className="eduEx-list">
        <div className="eduEx-list-top">
          <div className="title-sub">
            <h3 className="title">Wayne Corp</h3>
            <em>Junior Developer</em>
          </div>
          <div className="year-loc">
            <p className="year">March 2018 - May 2019</p>
            <p className="location">New York, USA</p>
          </div>
        </div>

        <ul className="summary">
          <li>Collaborated with senior developers to build and maintain client websites using the latest web technologies.</li>
        </ul>
      </div>
    </div>
  );
}
