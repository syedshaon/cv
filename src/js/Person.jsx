class EducationInfo {
  constructor(schoolName, degree, gpa, startDate, endDate, location, additionalInfo) {
    this.schoolName = schoolName;
    this.degree = degree;
    this.gpa = gpa;
    this.startDate = startDate;
    this.endDate = endDate;
    this.location = location;
    this.additionalInfo = additionalInfo;
  }
}

// Usage example:
const educationInfo1 = new EducationInfo("University of Georgia", "Bachelor of Science in Computer Science", 3.8, "August 2017", "May 2021", "New York, USA", "Honors: Dean's List for four consecutive semesters.");

const educationInfo2 = new EducationInfo("Example Coding Bootcamp", "Full-Stack Web Development", 4.0, "January 2022", "June 2022", "San Francisco, USA", "Completed an intensive bootcamp focused on modern web development technologies.");

class ExperienceInfo {
  constructor(companyName, jobTitle, startDate, endDate, location, additionalInfo) {
    this.companyName = companyName;
    this.jobTitle = jobTitle;
    this.startDate = startDate;
    this.endDate = endDate;
    this.location = location;
    this.additionalInfo = additionalInfo;
  }
}

// Usage example:
const experienceInfo1 = new ExperienceInfo("Starc Corp", "Software Engineer", "June 2019", "Present", "San Francisco, USA", "Lead a team of developers in designing and implementing new features for the company's flagship product.");

const experienceInfo2 = new ExperienceInfo("Wayne Corp", "Junior Developer", "March 2018", "May 2019", "New York, USA", "Collaborated with senior developers to build and maintain client websites using the latest web technologies.");

class Skill {
  constructor(title, details) {
    this.title = title;
    this.details = details;
  }
}

// Usage example:
const skill1 = new Skill("JavaScript", ["ES6+ features", "Async/Await", "DOM manipulation", "React"]);

const skill2 = new Skill("Python", ["Python 3.x", "Data manipulation (NumPy, Pandas)", "Web frameworks (e.g., Django, Flask)", "Automation and scripting"]);

class OtherInfo {
  constructor(title, details) {
    this.title = title;
    this.details = details;
  }
}

// Usage example:
const otherInfo1 = new OtherInfo("Languages", ["English", "Spanish", "French"]);

const otherInfo2 = new OtherInfo("Hobbies", ["Playing guitar", "Reading", "Cooking"]);
