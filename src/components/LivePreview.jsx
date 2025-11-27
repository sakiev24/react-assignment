import { useState } from 'react';

function LivePreview() {
  const [text, setText] = useState('');

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        style={{ padding: '8px', width: '200px' }}
      />
      <p>You typed: {text || "nothing yet..."}</p>
    </div>
  );
}

export default LivePreview;