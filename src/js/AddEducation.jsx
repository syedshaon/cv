import { FaEye, FaRegEyeSlash, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Education({ degree, number, handleChange, serial }) {
  return (
    <div className={degree.expand ? `entry show ${serial}` : `entry hide ${serial}`}>
      <h3 className="title entry-title">
        {number} Degree
        <div className="tools">
          <span className="expand" onClick={(e) => handleChange.expand(e, serial)}>
            <a className="down">
              <FaChevronDown />
            </a>
            <a className="up">
              <FaChevronUp />
            </a>
          </span>
          <span onClick={(e) => handleChange.visible(e, serial)}>
            <a title="Add to CV" className="see" style={{ display: degree.visible ? "none" : "inline-block" }}>
              <FaEye />
            </a>
            <a title="Hide from CV" className="notSee" style={{ display: degree.visible ? "inline-block" : "none" }}>
              <FaRegEyeSlash />
            </a>
          </span>
        </div>
      </h3>
      <label htmlFor="sName">School Name</label>
      <input onChange={(e) => handleChange.schoolName(e, serial)} value={degree.schoolName} type="text" name="sName" />

      <label htmlFor="degree">Degree</label>
      <input onChange={(e) => handleChange.degree(e, serial)} value={degree.degree} type="text" name="degree" />

      <label htmlFor="result">Result</label>
      <input onChange={(e) => handleChange.gpa(e, serial)} value={degree.gpa} type="text" name="result" />

      <div className="date">
        <div className="date-start">
          <label htmlFor="sDate">Start Date</label>
          <input onChange={(e) => handleChange.startDate(e, serial)} value={degree.startDate} type="text" name="sDate" />
        </div>

        <div className="date-end">
          <label htmlFor="eDate">End Date</label>
          <input onChange={(e) => handleChange.endDate(e, serial)} value={degree.endDate} type="text" name="eDate" />
        </div>
      </div>

      <label htmlFor="location">Location</label>
      <input onChange={(e) => handleChange.location(e, serial)} value={degree.location} type="text" name="location" />

      <label htmlFor="summary">
        Summary / Achievements <small> separate each with semicolon (;)</small>
      </label>
      <textarea value={degree.additionalInfo} onChange={(e) => handleChange.additionalInfo(e, serial)} name="summary" id="summary" rows="3"></textarea>
    </div>
  );
}
