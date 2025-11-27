function PrimaryButton({ label, type = "primary", onClick }) {
  const buttonStyle = {
    primary: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      margin: '5px',
      cursor: 'pointer'
    },
    secondary: {
      backgroundColor: '#6c757d',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      margin: '5px',
      cursor: 'pointer'
    }
  };

  return (
    <button style={buttonStyle[type]} onClick={onClick}>
      {label}
    </button>
  );
}

export default PrimaryButton;