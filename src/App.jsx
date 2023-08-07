import { useState } from "react";
import first from "./assets/first.jpg";
import second from "./assets/second.jpg";
import third from "./assets/third.jpg";
import fourth from "./assets/fourth.jpg";
import fifth from "./assets/fifth.jpg";
import sixth from "./assets/sixth.jpg";
import imgURL from "./assets/gravatar.jpg";

import { Info } from "./js/ShowPersonal";

import Personal from "./js/AddPersonal";
import Education from "./js/AddEducation";
import Experience from "./js/AddExperience";
import Reference from "./js/AddReference";
import Skills from "./js/AddSkills";

import { AddOtherInfo } from "./js/AddOtherInfo";

import { ShowExperience } from "./js/ShowExperience";
import { ShowEducation } from "./js/ShowEducation";
import { ShowReferences } from "./js/ShowReferences";
import { Others } from "./js/ShowOthers";
import { ShowSkills } from "./js/ShowSkills";

import { FaEdit, FaEraser, FaCloudDownloadAlt, FaMagic, FaSave, FaFilePdf } from "react-icons/fa";

function App() {
  function savePDF() {
    // let clientHeight = document.getElementById("printableArea").clientHeight;
    // console.log(clientHeight);

    window.print();

    // document.body.innerHTML = originalContents;
  }
  // On first load it will show first 2 entry of Education and Experience field
  // On clicking "Add another Entry" another entry will show
  const [eduNOfEntry, setEduNOfEntry] = useState(3);

  function addEduField(e) {
    setEduNOfEntry((prev) => prev + 1);
    if (eduNOfEntry <= 5) {
      e.target.parentNode.children[eduNOfEntry].style.display = "block";
    } else {
      console.log("Only 5 entry can be added :( ");
    }
  }

  const [exNOfEntry, setExNOfEntry] = useState(3);

  function addExField(e) {
    setExNOfEntry((prev) => prev + 1);
    if (exNOfEntry <= 5) {
      e.target.parentNode.children[exNOfEntry].style.display = "block";
    } else {
      console.log("Only 5 entry can be added :( ");
    }
  }

  //  ##################################################################
  // #####################################################################
  const [person, setPerson] = useState({
    name: "Mashiur Rahman",
    title: "Front-End Developer",
    bio: "I'm a passionate developer with a love for coding.",
    img: imgURL,
    showImg: true,
    email: "john.doe@example.com",
    phone: "+88 01715-555555",
    website: "https://johndoe.com",
    address: "Faridpur, BD",
    expand: false,
  });

  const handlePersonalChange = {
    NameChange: (e) => {
      setPerson({ ...person, name: e.target.value });
    },
    TitleChange: (e) => {
      setPerson({ ...person, title: e.target.value });
    },
    BioChange: (e) => {
      setPerson({ ...person, bio: e.target.value });
    },
    EmailChange: (e) => {
      setPerson({ ...person, email: e.target.value });
    },
    PhoneChange: (e) => {
      setPerson({ ...person, phone: e.target.value });
    },
    WebChange: (e) => {
      setPerson({ ...person, website: e.target.value });
    },
    AddressChange: (e) => {
      setPerson({ ...person, address: e.target.value });
    },
    AvatarChange: (e) => {
      setPerson({ ...person, img: URL.createObjectURL(e.target.files[0]) });
    },
    showImgChange: (e) => {
      setPerson({ ...person, showImg: !person.showImg });
    },
    expand: (e) => {
      setPerson({ ...person, expand: !person.expand });
    },
  };

  const [education, setEducation] = useState([
    {
      schoolName: "University of Georgia 1",
      degree: "Bachelor of Science in Computer Science",
      gpa: "3.8 out of 4",
      startDate: "August 2019",
      endDate: "May 2023",
      location: "Cityville, State",
      additionalInfo: "Honors: Dean's List for four consecutive semesters. ; Ldipisicing elit. Id iure animi optio praesentium, voluptatem nisi",
      visible: true,
      expand: false,
    },
    {
      schoolName: "Udemy University 2",
      degree: "Full-Stack Web Development",
      gpa: "3.8 out of 4",
      startDate: "January 2022",
      endDate: "June 2022",
      location: "San Francisco, USA",
      additionalInfo: "Completed an intensive bootcamp focused on modern web development technologies. ; Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo, quam in quidem amet eligendi!",
      visible: true,
      expand: false,
    },
    {
      schoolName: "Example University 3",
      degree: "Full-Stack Web Development",
      gpa: "3.8 out of 4",
      startDate: "January 2022",
      endDate: "June 2022",
      location: "San Francisco, USA",
      additionalInfo: "Completed an intensive bootcamp focused on modern web development technologies.",
      visible: false,
      expand: false,
    },
    {
      schoolName: "Example University 4",
      degree: "Full-Stack Web Development",
      gpa: "3.8 out of 4",
      startDate: "January 2022",
      endDate: "June 2022",
      location: "San Francisco, USA",
      additionalInfo: "Completed an intensive bootcamp focused on modern web development technologies.",
      visible: false,
      expand: false,
    },
    {
      schoolName: "Example University 5",
      degree: "Full-Stack Web Development",
      gpa: "3.8 out of 4",
      startDate: "January 2022",
      endDate: "June 2022",
      location: "San Francisco, USA",
      additionalInfo: "Completed an intensive bootcamp focused on modern web development technologies.",
      visible: false,
      expand: false,
    },
  ]);

  const handleEduChange = {
    schoolName: (e, serial) => {
      education[serial].schoolName = e.target.value;
      setEducation([...education]);
    },
    degree: (e, serial) => {
      education[serial].degree = e.target.value;
      setEducation([...education]);
    },
    gpa: (e, serial) => {
      education[serial].gpa = e.target.value;
      setEducation([...education]);
    },
    startDate: (e, serial) => {
      education[serial].startDate = e.target.value;
      setEducation([...education]);
    },
    endDate: (e, serial) => {
      education[serial].endDate = e.target.value;
      setEducation([...education]);
    },
    location: (e, serial) => {
      education[serial].location = e.target.value;
      setEducation([...education]);
    },
    additionalInfo: (e, serial) => {
      education[serial].additionalInfo = e.target.value;
      setEducation([...education]);
    },
    visible: (e, serial) => {
      education[serial].visible = !education[serial].visible;
      setEducation([...education]);
      // console.log(education[serial].visible);
    },
    expand: (e, serial) => {
      education[serial].expand = !education[serial].expand;
      setEducation([...education]);
      // console.log(education[serial].visible);
    },
  };

  const [experience, setExperience] = useState([
    {
      companyName: "Stark Corp",
      jobTitle: "Software Engineer",
      startDate: "June 2019",
      endDate: "Present",
      location: "San Francisco, USA",
      additionalInfo: "Lead a team of developers in designing and implementing new features for the company's flagship product.",
      visible: true,
      expand: false,
    },
    {
      companyName: "Wayne Corp",
      jobTitle: "Junior Developer",
      startDate: "March 2018",
      endDate: "May 2019",
      location: "San Francisco, USA",
      additionalInfo: "Collaborated with senior developers to build and maintain client websites using the latest web technologies.",
      visible: true,
      expand: false,
    },

    {
      companyName: "Stark Corp",
      jobTitle: "Software Engineer",
      startDate: "June 2019",
      endDate: "Present",
      location: "San Francisco, USA",
      additionalInfo: "Lead a team of developers in designing and implementing new features for the company's flagship product.",
      visible: false,
      expand: false,
    },
    {
      companyName: "Stark Corp",
      jobTitle: "Software Engineer",
      startDate: "June 2019",
      endDate: "Present",
      location: "San Francisco, USA",
      additionalInfo: "Lead a team of developers in designing and implementing new features for the company's flagship product.",
      visible: false,
      expand: false,
    },
    {
      companyName: "Stark Corp",
      jobTitle: "Software Engineer",
      startDate: "June 2019",
      endDate: "Present",
      location: "San Francisco, USA",
      additionalInfo: "Lead a team of developers in designing and implementing new features for the company's flagship product.",
      visible: false,
      expand: false,
    },
  ]);

  const handleExperience = {
    companyName: (e, serial) => {
      experience[serial].companyName = e.target.value;
      setExperience([...experience]);
    },
    jobTitle: (e, serial) => {
      experience[serial].jobTitle = e.target.value;
      setExperience([...experience]);
    },

    startDate: (e, serial) => {
      experience[serial].startDate = e.target.value;
      setExperience([...experience]);
    },
    endDate: (e, serial) => {
      experience[serial].endDate = e.target.value;
      setExperience([...experience]);
    },
    location: (e, serial) => {
      experience[serial].location = e.target.value;
      setExperience([...experience]);
    },
    additionalInfo: (e, serial) => {
      experience[serial].additionalInfo = e.target.value;
      setExperience([...experience]);
    },
    visible: (e, serial) => {
      experience[serial].visible = !experience[serial].visible;
      setExperience([...experience]);
      // console.log(experience[serial].visible);
    },
    expand: (e, serial) => {
      experience[serial].expand = !experience[serial].expand;
      setExperience([...experience]);
      // console.log(experience[serial].visible);
    },
  };

  const [references, setReferences] = useState([
    {
      referer: "Tony Stark",
      title: "CEO Stark Corp.",
      phone: "+1 123-666-7777",
      visible: true,
      expand: false,
    },
    {
      referer: "Bruce Wayne",
      title: "CEO Wayne Corp.",
      phone: "+1 123-333-5555",
      visible: true,
      expand: false,
    },
  ]);

  const handleReferences = {
    referer: (e, serial) => {
      references[serial].referer = e.target.value;
      setReferences([...references]);
    },
    title: (e, serial) => {
      references[serial].title = e.target.value;
      setReferences([...references]);
    },

    phone: (e, serial) => {
      references[serial].phone = e.target.value;
      setReferences([...references]);
    },

    visible: (e, serial) => {
      references[serial].visible = !references[serial].visible;
      setReferences([...references]);
      // console.log(references[serial].visible);
    },
    expand: (e, serial) => {
      references[serial].expand = !references[serial].expand;
      setReferences([...references]);
      // console.log(references[serial].visible);
    },
  };

  const [skills, setskills] = useState({
    list: "ES6+ features; Async/Await; DOM manipulation; React",
    visible: true,
    expand: false,
  });

  const handleSkillChange = {
    list: (e) => {
      setskills({ ...skills, list: e.target.value });
    },

    visible: (e) => {
      setskills({ ...skills, visible: !skills.visible });
    },
    expand: (e) => {
      setskills({ ...skills, expand: !skills.expand });
    },
  };

  const [inf, setInf] = useState([
    {
      title: "Languages",
      summary: "English ; Spanish ; French",
      visible: true,
      expand: false,
    },
    {
      title: "Hobbies",
      summary: "Playing guitar ; Reading ; Cooking",
      visible: true,
      expand: false,
    },
  ]);

  const handleInfoChange = {
    title: (e, serial) => {
      inf[serial].title = e.target.value;
      setInf([...inf]);
    },
    summary: (e, serial) => {
      inf[serial].summary = e.target.value;
      setInf([...inf]);
    },

    visible: (e, serial) => {
      inf[serial].visible = !inf[serial].visible;
      setInf([...inf]);
      // console.log(infs[serial].visible);
    },
    expand: (e, serial) => {
      inf[serial].expand = !inf[serial].expand;
      setInf([...inf]);
      // console.log(infos[serial].visible);
    },
  };

  // Layout Related Code. Output goes to .cv-show

  const [leftSkillVal, setLeftSkillVal] = useState(false);
  const [allLeftVal, setLeftVal] = useState(false);
  const imgShow = person.showImg ? "showImg" : "noShowImg";

  const noSkill = skills.visible || inf[0].visible || inf[1].visible ? `` : ` noSkill `;
  const leftSkill = (skills.visible || inf[0].visible || inf[1].visible) && leftSkillVal ? `leftSkill` : ` `;

  const [showEdit, setShowEdit] = useState(true);
  const [showPersonalize, setPersonalize] = useState(false);
  function Edit(params) {
    setShowEdit(true);
    setPersonalize(false);
  }
  function Personalize(params) {
    setShowEdit(false);
    setPersonalize(true);
  }
  const [hColor, setHColor] = useState("#ffffff");
  const [cColor, setCColor] = useState("#ffffff");
  const [sColor, setSColor] = useState("#ffffff");
  const [fColor, setFColor] = useState("#000000");

  function setContentColor(e) {
    setCColor(e.target.value);
    document.documentElement.style.setProperty("--bodyC", e.target.value);
  }

  // document.documentElement.style.setProperty("--icon", "red");

  const [iColor, setIColor] = useState("#640707");
  function handleIColor(e) {
    setIColor(e.target.value);
    document.documentElement.style.setProperty("--icon", e.target.value);
  }

  function handleLayoutOne() {
    // enable image

    setPerson({ ...person, showImg: true });

    // enable sidepanel
    setskills({ ...skills, visible: true });

    inf[0].visible = true;
    inf[1].visible = true;
    setInf([...inf]);

    // disable LEFT sidepanel
    setLeftSkillVal(false);
    // Remove AllLeft Class
    setLeftVal(false);
  }
  function handleLayoutTwo() {
    // disable image
    setPerson({ ...person, showImg: false });
    // enable sidepanel
    setskills({ ...skills, visible: true });

    inf[0].visible = true;
    inf[1].visible = true;
    setInf([...inf]);
    // disable LEFT sidepanel
    setLeftSkillVal(false);
    // Remove AllLeft Class
    setLeftVal(false);
  }
  function handleLayoutThree() {
    // disable side panel
    setskills({ ...skills, visible: false });

    inf[0].visible = false;
    inf[1].visible = false;
    setInf([...inf]);
    // disable LEFT sidepanel
    setLeftSkillVal(false);
    // enable image
    setPerson({ ...person, showImg: true });
    // Remove AllLeft Class
    setLeftVal(false);
  }
  function handleLayoutFour() {
    // enable image
    setPerson({ ...person, showImg: true });
    // enable sidepanel
    setskills({ ...skills, visible: true });

    inf[0].visible = true;
    inf[1].visible = true;
    setInf([...inf]);
    // Add AllLeft Class
    setLeftVal(true);
  }
  function handleLayoutFive() {
    // disable side panel
    setskills({ ...skills, visible: false });

    inf[0].visible = false;
    inf[1].visible = false;
    setInf([...inf]);
    // disable LEFT sidepanel
    setLeftSkillVal(false);
    // disable image
    setPerson({ ...person, showImg: false });
    // Remove AllLeft Class
    setLeftVal(false);
  }
  function handleLayoutSix() {
    // enable image
    setPerson({ ...person, showImg: true });
    // enable sidepanel
    setskills({ ...skills, visible: true });

    inf[0].visible = true;
    inf[1].visible = true;
    // enable LEFT sidepanel
    setLeftSkillVal(true);
    // Remove AllLeft Class
    setLeftVal(false);
  }

  return (
    <div className="cv-parent">
      <div className="cv-create">
        <h1 className="builder">CV Builder</h1>
        <nav className="control">
          <button onClick={Edit} className="btn">
            <FaEdit /> Edit
          </button>
          <button onClick={Personalize} className="btn">
            <FaMagic /> Customize
          </button>
          <button className="btn" id="savePDF" onClick={savePDF}>
            <FaFilePdf /> Print
          </button>
          {/* <button className="btn">
            <FaEraser /> Erase
          </button>
          <button className="btn">
            <FaCloudDownloadAlt /> Load Sample
          </button> */}
        </nav>
        <div className="edit">
          <div className="personalize-area" style={{ display: showPersonalize ? "block" : "none" }}>
            <div className="color-area">
              <h3 className="design-title">Select a Layout</h3>
              <div className="color">
                <div className="color-picker font">
                  <input type="color" value={fColor} onChange={(e) => setFColor(e.target.value)} name="fColor" />
                  <label htmlFor="fColor">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Text Color &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                </div>
                <div className="color-picker icon">
                  <input type="color" value={iColor} onChange={handleIColor} name="iColor" />
                  <label htmlFor="iColor">Icon Color</label>
                </div>
              </div>
              <div className="color">
                <div className="color-picker header">
                  <input type="color" value={hColor} onChange={(e) => setHColor(e.target.value)} name="hColor" />
                  <label htmlFor="hColor">Header Background</label>
                </div>
                <div className="color-picker content">
                  <input type="color" value={cColor} onChange={setContentColor} name="cColor" />
                  <label htmlFor="cColor">Content Background</label>
                </div>
                <div className="color-picker sidebar">
                  <input type="color" value={sColor} onChange={(e) => setSColor(e.target.value)} name="sColor" />
                  <label htmlFor="sColor">Sidebar Background</label>
                </div>
              </div>
            </div>
            <div className="design-wrapper">
              <h3 className="design-title">Select a Layout</h3>
              <div className="design">
                <div className="layout layout-1" onClick={handleLayoutOne}>
                  <img src={first} className="layout-img" alt="layout-img" />
                </div>
                <div className="layout layout-2" onClick={handleLayoutTwo}>
                  <img src={second} className="layout-img" alt="layout-img" />
                </div>
                <div className="layout layout-3" onClick={handleLayoutThree}>
                  <img src={third} className="layout-img" alt="layout-img" />
                </div>
                <div className="layout layout-4" onClick={handleLayoutFour}>
                  <img src={fourth} className="layout-img" alt="layout-img" />
                </div>
                <div className="layout layout-5" onClick={handleLayoutFive}>
                  <img src={fifth} className="layout-img" alt="layout-img" />
                </div>
                <div className="layout layout-6" onClick={handleLayoutSix}>
                  <img src={sixth} className="layout-img" alt="layout-img" />
                </div>
              </div>
            </div>
          </div>
          <div className="edit-area" style={{ display: showEdit ? "block" : "none" }}>
            <Personal person={person} handleChange={handlePersonalChange} />
            <div className=" education list-item">
              <h3 className="title">Education</h3>
              <Education degree={education[0]} number={"#01:"} serial={0} handleChange={handleEduChange} />
              <Education degree={education[1]} number={"#02:"} serial={1} handleChange={handleEduChange} />
              <Education degree={education[2]} number={"#03:"} serial={2} handleChange={handleEduChange} />
              <Education degree={education[3]} number={"#04:"} serial={3} handleChange={handleEduChange} />
              <Education degree={education[4]} number={"#05:"} serial={4} handleChange={handleEduChange} />
              <button className="btn addField" onClick={addEduField}>
                Add Another Degree
              </button>
            </div>

            <div className="experience list-item">
              <h3 className="title">Experiences</h3>

              <Experience experience={experience[0]} number={"#01:"} serial={0} handleChange={handleExperience} />
              <Experience experience={experience[1]} number={"#02:"} serial={1} handleChange={handleExperience} />
              <Experience experience={experience[2]} number={"#03:"} serial={2} handleChange={handleExperience} />
              <Experience experience={experience[3]} number={"#04:"} serial={3} handleChange={handleExperience} />
              <Experience experience={experience[4]} number={"#05:"} serial={4} handleChange={handleExperience} />
              <button className="btn addField" onClick={addExField}>
                Add Another Experience
              </button>
            </div>
            <div className="reference list-item">
              <h3 className="title">References</h3>
              <Reference reff={references[0]} number={"#01:"} serial={0} handleChange={handleReferences} />
              <Reference reff={references[1]} number={"#02:"} serial={1} handleChange={handleReferences} />
            </div>

            <Skills handleSkillChange={handleSkillChange} skills={skills} />

            <div className="editOthers list-item">
              <h3 className="title">Other Info</h3>

              <AddOtherInfo infos={inf[0]} number={"#01:"} serial={0} handleChange={handleInfoChange} />
              <AddOtherInfo infos={inf[1]} number={"#02:"} serial={1} handleChange={handleInfoChange} />
            </div>
          </div>
        </div>
        <div className="personalize"></div>
      </div>
      <div className="cv-show-wrapper" id="print" style={{ color: fColor }}>
        {/* className={experience.expand ? `entry show ` : `entry hide `}> */}

        <div className={`cv-show ${noSkill} ${imgShow} ${leftSkill} ${allLeftVal && "allLeft"}`} id="printableArea">
          <Info person={person} hColor={hColor} />
          <div className="cv-child eduEx-wrapper" style={{ backgroundColor: `${cColor}` }}>
            <div className="eduEx education" style={{ display: education[0].visible || education[1].visible || education[2].visible || education[3].visible || education[4].visible ? "block" : "none" }}>
              <h2 className="title">Education</h2>
              {education[0].visible && <ShowEducation degree={education[0]} />}
              {education[1].visible && <ShowEducation degree={education[1]} />}
              {education[2].visible && <ShowEducation degree={education[2]} />}
              {education[3].visible && <ShowEducation degree={education[3]} />}
              {education[4].visible && <ShowEducation degree={education[4]} />}
            </div>

            <div className="eduEx experience" style={{ display: experience[0].visible || experience[1].visible || experience[2].visible || experience[3].visible || experience[4].visible ? "block" : "none" }}>
              <h2 className="title">Experience</h2>
              {experience[0].visible && <ShowExperience exp={experience[0]} />}
              {experience[1].visible && <ShowExperience exp={experience[1]} />}
              {experience[2].visible && <ShowExperience exp={experience[2]} />}
              {experience[3].visible && <ShowExperience exp={experience[3]} />}
              {experience[4].visible && <ShowExperience exp={experience[4]} />}
            </div>
            <div className="eduEx references" style={{ display: references[0].visible || references[1].visible ? "block" : "none" }}>
              <h2 className="title">References</h2>
              <div className="eduEx-list eduEx-list-top">
                {references[0].visible && <ShowReferences refs={references[0]} />}
                {references[1].visible && <ShowReferences refs={references[1]} />}
              </div>
            </div>
          </div>
          <div className="cv-child others" style={{ display: inf[0].visible || inf[1].visible || skills.visible ? "block" : "none", backgroundColor: `${sColor}` }}>
            <ShowSkills skl={skills} />
            {inf[0].visible && <Others oth={inf[0]} />}
            {inf[1].visible && <Others oth={inf[1]} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
