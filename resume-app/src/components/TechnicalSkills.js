// src/components/TechnicalSkills.js
import React from 'react';

function TechnicalSkills() {
    return (
        <section style={styles.section}>
            <h2>Technical Skills</h2>
            <p>Python, Java (DSA), MERN Stack, SQL, Linux, Google Workspace, Microsoft Office Suite</p>
        </section>
    );
}

const styles = {
    section: { padding: '1rem', borderBottom: '1px solid #ddd' }
};

export default TechnicalSkills;