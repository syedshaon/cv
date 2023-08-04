import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Personal({ loadFile, person, handleChange, handleNameChange }) {
  return (
    <div className={person.expand ? `personal list-item entry show ` : `personal list-item entry hide `}>
      <h3 className="title personalDetails">
        Personal Details{" "}
        <span className="expand" onClick={handleChange.expand}>
          <a className="down">
            <FaChevronDown />
          </a>
          <a className="up">
            <FaChevronUp />
          </a>
        </span>
      </h3>
      <label htmlFor="name">Full Name</label>
      <input onChange={handleChange.NameChange} type="text" name="name" value={person.name} />

      <label htmlFor="title">Title</label>
      <input onChange={handleChange.TitleChange} type="text" name="title" value={person.title} />

      <label htmlFor="summary">Summary</label>

      <textarea name="summary" rows="3" value={person.bio} onChange={handleChange.BioChange}></textarea>

      <label htmlFor="email">Email</label>
      <input onChange={handleChange.EmailChange} type="email" name="email" value={person.email} />

      <label htmlFor="phone">Phone</label>
      <input onChange={handleChange.PhoneChange} type="tel" name="phone" value={person.phone} />

      <label htmlFor="site">Web Site</label>
      <input onChange={handleChange.WebChange} type="text" name="site" value={person.website} />

      <label htmlFor="address">Address</label>
      <input onChange={handleChange.AddressChange} type="text" name="address" value={person.address} />

      <label htmlFor="avatar">
        Avatar <small> square shaped image preferred.</small>
      </label>
      <input onChange={handleChange.AvatarChange} type="file" accept="image/*" name="image" id="file" />
    </div>
  );
}
