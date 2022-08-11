const props = {
  name: "Wesley",
  family: "Cactus",
  type: "unkillable",
};

function Plant(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      {props.family}
      {props.type}
    </div>
  );
}
