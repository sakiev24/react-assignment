import { useState } from 'react';

function CourseDetails() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <h3>React Programming Course</h3>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide details' : 'Show details'}
      </button>
      {showDetails && (
        <p>
          This course covers modern React development including hooks, 
          context API, and best practices for building scalable applications.
        </p>
      )}
    </div>
  );
}

export default CourseDetails;