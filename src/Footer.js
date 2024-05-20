import React from 'react';


const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Social Media Links */}
        <div style={styles.section}>
          <span style={styles.sectionTitle}>Follow Us:</span>
          <div style={styles.socialLinks}>
            <a href="#" style={styles.link}>Facebook</a>
            <a href="#" style={styles.link}>Twitter</a>
            <a href="#" style={styles.link}> Instagram</a>
          </div>
        </div>
        
        {/* Contact Us */}
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Contact Us</h4>
          <ul style={styles.list}>
            <li><a href="#" style={styles.link}>Email</a></li>
            <li><a href="#" style={styles.link}>Phone</a></li>
            <li><a href="#" style={styles.link}>Address</a></li>
          </ul>
        </div>

        {/* Feedback */}
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Feedback</h4>
          <ul style={styles.list}>
            <li><a href="#" style={styles.link}>Leave Feedback</a></li>
          </ul>
        </div>

        {/* Help */}
        <div style={styles.section}>
          <h4 style={styles.sectionTitle}>Help</h4>
          <ul style={styles.list}>
            <li><a href="#" style={styles.link}>FAQs</a></li>
            <li><a href="#" style={styles.link}>Support</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div style={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2d3748',
    color: '#ffffff',
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
  container: {
    maxWidth: '960px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  section: {
    marginBottom: '1.5rem',
  },
  sectionTitle: {
    fontSize: '1.125rem',
    marginBottom: '0.5rem',
  },
  socialLinks: {
    display: 'flex',
  },
  link: {
    marginRight: '1rem',
    color: '#ffffff',
    textDecoration: 'none',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0',
  },
  copyright: {
    borderTop: '1px solid #4a5568',
    marginTop: '2rem',
    paddingTop: '1rem',
    textAlign: 'center',
  },
};

export default Footer;