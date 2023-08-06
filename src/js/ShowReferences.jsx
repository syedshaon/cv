export function ShowReferences({ refs }) {
  return (
    <div className="eduEx-list-top">
      <div className="title-sub">
        <h3 className="title">{refs.referer}</h3>
        <em>{refs.title}</em>

        <p className="mob">{refs.phone}</p>
      </div>
    </div>
  );
}
