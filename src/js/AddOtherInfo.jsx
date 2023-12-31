import { FaEye, FaRegEyeSlash, FaChevronDown, FaChevronUp } from "react-icons/fa";

export function AddOtherInfo({ infos, handleChange, number, serial }) {
  return (
    <div className={infos.expand ? `entry show ` : `entry hide `}>
      <h4 className="title">
        {infos.title}
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
            <a title="Add to CV" className="see" style={{ display: infos.visible ? "none" : "inline-block" }}>
              <FaEye />
            </a>
            <a title="Hide from CV" className="notSee" style={{ display: infos.visible ? "inline-block" : "none" }}>
              <FaRegEyeSlash />
            </a>
          </span>
        </div>
      </h4>

      <label htmlFor="iTitle">Info Title</label>
      <input value={infos.title} onChange={(e) => handleChange.title(e, serial)} type="text" name="iTitle" id="iTitle" />

      <label htmlFor="summary">
        Summary / Achievements <small> separate each with semicolon (;)</small>
      </label>
      <textarea value={infos.summary} onChange={(e) => handleChange.summary(e, serial)} name="summary" rows="3"></textarea>
    </div>
  );
}
