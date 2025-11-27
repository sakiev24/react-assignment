import { useState } from 'react';
import StudentCard from './StudentCard';

function StudentFilter({ students }) {
  const [showOnlyGroup, setShowOnlyGroup] = useState('all');

  const filteredStudents = showOnlyGroup === 'all' 
    ? students 
    : students.filter(student => student.group === showOnlyGroup);

  const groups = ['all', 'SE-101', 'SE-102', 'SE-103'];

  return (
    <div>
      <h3>Filter Students by Group</h3>
      <div>
        {groups.map(group => (
          <button 
            key={group}
            onClick={() => setShowOnlyGroup(group)}
            style={{ 
              margin: '5px',
              backgroundColor: showOnlyGroup === group ? '#007bff' : '#6c757d',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px'
            }}
          >
            {group === 'all' ? 'All' : group}
          </button>
        ))}
      </div>
      
      <div>
        {filteredStudents.map(student => (
          <StudentCard 
            key={student.id}
            name={student.name}
            group={student.group}
            track={student.track}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentFilter;