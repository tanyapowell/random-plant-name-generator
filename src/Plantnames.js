function PlantNames(props) {
  return (
    <div>
      {props.title}
      {props.names.map((name) => (
        <p>{name}</p>
      ))}
    </div>
  );
}

export default PlantNames;
