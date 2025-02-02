const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#f1f1f1' }}>
      <p>&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
      <p>
        <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;