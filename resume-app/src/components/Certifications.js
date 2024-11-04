// src/components/Certifications.js
import React from 'react';

function Certifications() {
    return (
        <section style={styles.section}>
            <h2>Certifications</h2>
            <ul>
                <li>Ethical Hacking - Guvi Geek Networks IITM</li>
                <li>MERN Stack with Practical Project - Udemy</li>
                <li>Introduction to Cyber Security - Infosys & Cisco Networking Academy</li>
            </ul>
        </section>
    );
}

const styles = {
    section: { padding: '1rem', borderBottom: '1px solid #ddd' }
};

export default Certifications;