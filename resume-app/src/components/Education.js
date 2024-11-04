// src/components/Education.js
import React from 'react';

function Education() {
    return (
        <section style={styles.section}>
            <h2>Education</h2>
            <p>Bachelor of Science, Computer Science with Cyber Security</p>
            <p>Bharath Institute of Higher Education and Research - Chennai</p>
            <p>CGPA: 8.0 (2022 - 2025)</p>
        </section>
    );
}

const styles = {
    section: { padding: '1rem', borderBottom: '1px solid #ddd' }
};

export default Education;