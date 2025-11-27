function Menu({ links = [] }) {
  const navStyle = {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    gap: '20px'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold'
  };

  // Handle click to prevent default behavior
  const handleClick = (e) => {
    e.preventDefault();
    // You can add navigation logic here later
    console.log('Link clicked');
  };

  return (
    <nav>
      <ul style={navStyle}>
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href={`/${link.toLowerCase()}`}  // Changed from "#" to valid URL
              style={linkStyle}
              onClick={handleClick}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;