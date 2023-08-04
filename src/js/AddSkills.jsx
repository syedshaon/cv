export default function Skills({ skills, handleSkillChange }) {
  return (
    <>
      <label htmlFor="skillList">
        Skill List <small> separate each with semicolon (;)</small>
      </label>
      <textarea value={skills} onChange={handleSkillChange} name="skillList" id="skillList" rows="3"></textarea>
    </>
  );
}
