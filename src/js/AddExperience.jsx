import { FaEye, FaRegEyeSlash, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Experience({ experience, number, handleChange, serial }) {
  return (
    <div className={experience.expand ? `entry show ${serial}` : `entry hide ${serial}`}>
      <h4 className="title entry-title">
        {number} Experience
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
            <a title="Add to CV" className="see" style={{ display: experience.visible ? "none" : "inline-block" }}>
              <FaEye />
            </a>
            <a title="Hide from CV" className="notSee" style={{ display: experience.visible ? "inline-block" : "none" }}>
              <FaRegEyeSlash />
            </a>
          </span>
        </div>
      </h4>
      <label htmlFor="cName">Company Name</label>
      <input onChange={(e) => handleChange.companyName(e, serial)} value={experience.companyName} type="text" name="cName" />

      <label htmlFor="jTitle">Job Title</label>
      <input onChange={(e) => handleChange.jobTitle(e, serial)} value={experience.jobTitle} type="text" name="jTitle" />

      <div className="date">
        <div className="date-start">
          <label htmlFor="sDate">Start Date</label>
          <input onChange={(e) => handleChange.startDate(e, serial)} value={experience.startDate} type="text" name="sDate" />
        </div>

        <div className="date-end">
          <label htmlFor="eDate">End Date</label>
          <input onChange={(e) => handleChange.endDate(e, serial)} value={experience.endDate} type="text" name="eDate" />
        </div>
      </div>

      <label htmlFor="location">Location</label>
      <input onChange={(e) => handleChange.location(e, serial)} value={experience.location} type="text" name="location" />

      <label htmlFor="summary">
        Summary / Achievements <small> separate each with semicolon (;)</small>
      </label>
      <textarea value={experience.additionalInfo} onChange={(e) => handleChange.additionalInfo(e, serial)} name="summary" id="summary" rows="3"></textarea>
    </div>
  );
}

// {
//   return (
//     <>
//       <label htmlFor="cName">Company Name</label>
//       <input type="text" name="cName" id="cName" />

//       <label htmlFor="jTitle">Job Title</label>
//       <input type="text" name="jTitle" id="jTitle" />

//       <div className="date">
//         <div className="date-start">
//           <label htmlFor="sDate">Start Date</label>
//           <input type="text" name="sDate" id="sDate" />
//         </div>

//         <div className="date-end">
//           <label htmlFor="eDate">End Date</label>
//           <input type="text" name="eDate" id="eDate" />
//         </div>
//       </div>

//       <label htmlFor="location">Location</label>
//       <input type="text" name="location" id="location" />

//       <label htmlFor="summary">
//         Summary / Achievements <small> separate each with semicolon (;)</small>
//       </label>
//       <textarea name="summary" id="summary" rows="3"></textarea>
//     </>
//   );
// }
