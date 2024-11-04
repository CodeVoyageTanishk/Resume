// src/components/Footer.js
import React from 'react';

function Footer() {
    return (
        <footer style={styles.footer}>
            <p>© 2024 Tanishk Kaushik</p>
        </footer>
    );
}

const styles = {
    footer: { textAlign: 'center', padding: '1rem', borderTop: '2px solid #eee' }
};

export default Footer;