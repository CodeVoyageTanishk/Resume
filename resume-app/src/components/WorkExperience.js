// src/components/WorkExperience.js
import React from 'react';

function WorkExperience() {
    const experiences = [
        { role: 'React Developer Intern', company: 'Slash Mark IT Startup', dates: 'Jun 2024 - Oct 2024' },
        { role: 'Web Developer Intern', company: 'OctaNet Services Pvt Ltd', dates: 'May 2024 - Aug 2024' },
        { role: 'Cyber Security Intern', company: 'Innovate Group', dates: 'Jan 2024 - Apr 2024' },
        { role: 'Software Development Intern', company: 'Cognifyz Technologies', dates: 'Mar 2024 - Apr 2024' }
    ];

    return (
        <section style={styles.section}>
            <h2>Work Experience</h2>
            {experiences.map((exp, index) => (
                <div key={index} style={styles.job}>
                    <h3>{exp.role}</h3>
                    <p>{exp.company} - {exp.dates}</p>
                </div>
            ))}
        </section>
    );
}

const styles = {
    section: { padding: '1rem', borderBottom: '1px solid #ddd' },
    job: { marginBottom: '1rem' }
};

export default WorkExperience;