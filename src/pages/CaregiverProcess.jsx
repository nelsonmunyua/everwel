import { Link } from 'react-router-dom';
import './CareTeam.css'; // Reuse existing styles

const CaregiverProcess = () => {
  const processSteps = [
    {
      number: '01',
      title: 'Application & Screening',
      description: 'Initial application review and preliminary screening'
    },
    {
      number: '02',
      title: 'Background Check',
      description: 'Comprehensive criminal background and reference verification'
    },
    {
      number: '03',
      title: 'Skills Assessment',
      description: 'Evaluation of caregiving skills and competencies'
    },
    {
      number: '04',
      title: 'Training',
      description: 'Comprehensive training on care procedures and protocols'
    },
    {
      number: '05',
      title: 'Client Matching',
      description: 'Careful matching based on needs, preferences, and personality'
    }
  ];

  return (
    <section className="caregiver-process">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Caregiver Selection Process</h2>
          <p className="section-subtitle">
            Every caregiver undergoes a thorough vetting process
          </p>
        </div>
        <div className="process-grid">
          {processSteps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaregiverProcess;

