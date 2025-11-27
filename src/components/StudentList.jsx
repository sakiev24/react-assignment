import StudentCard from './StudentCard';

function StudentList({ students }) {
  return (
    <div>
      {students.map(student => (
        <StudentCard 
          key={student.id}
          name={student.name}
          group={student.group}
          track={student.track}
        />
      ))}
    </div>
  );
}

export default StudentList;