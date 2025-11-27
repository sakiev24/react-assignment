function StudentCard({ name, group, track }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h3>{name}</h3>
      <p>Group: {group}</p>
      <p>Track: {track}</p>
    </div>
  );
}

export default StudentCard;