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

  return (
    <nav>
      <ul style={navStyle}>
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" style={linkStyle}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;