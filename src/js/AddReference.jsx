import { FaEye, FaRegEyeSlash, FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Reference({ reff, number, handleChange, serial }) {
  return (
    <div className={reff.expand ? `entry show ${serial}` : `entry hide ${serial}`}>
      <h4 className="title entry-title">
        {number} Reference
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
            <a title="Add to CV" className="see" style={{ display: reff.visible ? "none" : "inline-block" }}>
              <FaEye />
            </a>
            <a title="Hide from CV" className="notSee" style={{ display: reff.visible ? "inline-block" : "none" }}>
              <FaRegEyeSlash />
            </a>
          </span>
        </div>
      </h4>
      <label htmlFor="referer">Referer Name</label>
      <input onChange={(e) => handleChange.referer(e, serial)} value={reff.referer} type="text" name="referer" />

      <label htmlFor="title">Referer Title</label>
      <input onChange={(e) => handleChange.title(e, serial)} value={reff.title} type="text" name="title" />

      <label htmlFor="phone">Phone No</label>
      <input onChange={(e) => handleChange.phone(e, serial)} value={reff.phone} type="text" name="phone" />
    </div>
  );
}
