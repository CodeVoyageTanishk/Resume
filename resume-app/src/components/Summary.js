// src/components/Summary.js
import React from 'react';

function Summary() {
    return (
        <section style={styles.section}>
            <h2>Summary</h2>
            <p>
                Aspiring cybersecurity and software developer with strong skills in Python, Java-based DSA, and Full-stack web development. Familiar with basic Linux operations and experienced in applying cybersecurity principles.
            </p>
        </section>
    );
}

const styles = {
    section: { padding: '1rem', borderBottom: '1px solid #ddd' }
};

export default Summary;