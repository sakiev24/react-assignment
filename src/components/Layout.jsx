function Header() {
  return (
    <header style={{ backgroundColor: '#f8f9fa', padding: '1rem', textAlign: 'center' }}>
      <h1>Engineering College Portal</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: '#343a40', color: 'white', padding: '1rem', textAlign: 'center' }}>
      <p>&copy; 2024 Engineering College. All rights reserved.</p>
    </footer>
  );
}

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main style={{ minHeight: '400px', padding: '2rem' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;