import { FaEye, FaRegEyeSlash, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Skills({ skills, handleSkillChange }) {
  return (
    <div className={skills.expand ? `entry skills list-item show ` : `entry skills list-item hide `}>
      <h3 className="title ">
        Skills
        <div className="tools">
          {/* <span className="expand" onClick={(e) => handleSkillChange.expand(e, serial)}> */}
          <span className="expand" onClick={handleSkillChange.expand}>
            <a className="down">
              <FaChevronDown />
            </a>
            <a className="up">
              <FaChevronUp />
            </a>
          </span>
          {/* <span onClick={(e) => handleSkillChange.visible(e, serial)}> */}
          <span onClick={handleSkillChange.visible}>
            <a title="Add to CV" className="see" style={{ display: skills.visible ? "none" : "inline-block" }}>
              <FaEye />
            </a>
            <a title="Hide from CV" className="notSee" style={{ display: skills.visible ? "inline-block" : "none" }}>
              <FaRegEyeSlash />
            </a>
          </span>
        </div>
      </h3>

      <label htmlFor="skillList">
        Skill List <small> separate each with semicolon (;)</small>
      </label>
      <textarea value={skills.list} onChange={handleSkillChange.list} name="skillList" id="skillList" rows="3"></textarea>
    </div>
  );
}
