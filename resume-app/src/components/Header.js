// src/components/Header.js
import React from 'react';

function Header() {
    return (
        <header style={styles.header}>
            <h1>Tanishk Kaushik</h1>
            <p>Location: Chennai, TN | Phone: +91 893-589-5600 | Email: tanishkkaushik02@gmail.com</p>
            <p><a href="https://www.linkedin.com/in/tanishk-kaushik-631156268/">LinkedIn</a> | <a href="https://github.com/CodeVoyageTanishk">GitHub</a></p>
        </header>
    );
}

const styles = {
    header: { textAlign: 'center', padding: '1rem', borderBottom: '2px solid #eee' }
};

export default Header;