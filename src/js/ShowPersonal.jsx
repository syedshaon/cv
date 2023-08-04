class PersonalInfo {
  constructor(name, title, bio, img, email, phone, website, address) {
    this.name = name;
    this.title = title;
    this.bio = bio;
    this.img = img;
    this.email = email;
    this.phone = phone;
    this.website = website;
    this.address = address;
  }
}

// Usage example:
const personInfo = new PersonalInfo("John Doe", "Web Developer", "Experienced web developer with a passion for creating user-friendly and responsive websites.", "https://example.com/john-doe-img.jpg", "john.doe@example.com", "+1 123-456-7890", "https://example.com", "123 Main Street, New York, USA");

import { FaEnvelope, FaPhoneSquare, FaGlobeAmericas, FaHome } from "react-icons/fa";

export function Info({ person }) {
  return (
    <div className="cv-child person">
      <div className="person-info">
        <h1 className="person-name">{person.name}</h1>
        <h2 className="person-title">{person.title}</h2>
        <p className="person-details">{person.bio}</p>
      </div>
      <div className="person-img" style={{ backgroundImage: `url(${person.img})` }} />

      <div className="person-contact">
        <p className="person-emails">
          <FaEnvelope /> <a href={`mailto:${person.email}`}>{person.email}</a>
        </p>
        <p className="person-tel">
          <FaPhoneSquare /> <a href={`tel:${person.phone}`}>{person.phone}</a>
        </p>
        <p className="person-web">
          <FaGlobeAmericas /> <a href={`${person.website}`}>{person.website}</a>
        </p>
        <p className="person-address">
          <FaHome />
          {person.address}
        </p>
      </div>
    </div>
  );
}
