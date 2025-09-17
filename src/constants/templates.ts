export const templates = [
  { id: 'blank', label: 'Blank Document', imageUrl: '/blank-document.svg', initialContent: "" },
  {
    id: 'software-proposal',
    label: 'Software development proposal',
    imageUrl: '/software-proposal.svg',
    initialContent: `<h1>Software Development Proposal</h1>
    <h2>Project Overview</h2>
    <p>Brief description of the proposed software development project.</p>

    <h2>Scope of Work</h2>
    <p>Detailed breakdown of project deliverables and requirements.</p>

    <h2>Timeline</h2>
    <p>Project milestones and delivery schedule.</p>

    <h2>Budget</h2>
    <p>Cost breakdown and payment terms.</p>`,
  },
  {
    id: 'project-proposal',
    label: 'Project proposal',
    imageUrl: '/project-proposal.svg',
    initialContent: `
      <h1>Project Proposal</h1> 
      <h2>Project Overview</h2> 
      <p>Brief description of the proposed project.</p> 

      <h2>Scope of Work</h2> 
      <p>Detailed breakdown of project deliverables and requirements.</p> 

      <h2>Timeline</h2> 
      <p>Project milestones and delivery schedule.</p> 

      <h2>Budget</h2> 
      <p>Cost breakdown and payment terms.</p> 
    `,
  },
  {
    id: 'business-letter',
    label: 'Business letter',
    imageUrl: '/business-letter.svg',
    initialContent: `<p>[Your Name]</p> 
      <p>[Your Company]</p> 
      <p>[Address]</p> 
      <p>[Date]</p> 

      <p>[Recipient's Name]</p> 
      <p>[Recipient's Company]</p> 
      <p>[Address]</p> 

      <p>Dear [Recipient's Name],</p> 
      <p>I am writing to [state purpose of the letter]. Please find attached the necessary details for your review.</p> 

      <p>Sincerely,</p> 
      <p>[Your Name]</p>`,
  },
  {
    id: 'resume',
    label: 'Resume',
    imageUrl: '/resume.svg',
    initialContent: `<h1>[Your Full Name]</h1> 
      <p>Email: [Your Email] | Phone: [Your Phone] | Location: [City, Country]</p> 

      <h2>Professional Summary</h2> 
      <p>Brief summary of your professional experience and skills.</p> 

      <h2>Experience</h2> 
      <h3>[Job Title] — [Company]</h3> 
      <p>[Start Date] - [End Date]</p> 
      <ul> 
        <li>Responsibility or achievement #1</li> 
        <li>Responsibility or achievement #2</li> 
      </ul> 

      <h2>Education</h2> 
      <p>[Degree], [University], [Year]</p> 

      <h2>Skills</h2> 
      <ul> 
        <li>Skill #1</li> 
        <li>Skill #2</li> 
      </ul>`,
  },
  {
    id: 'cover-letter',
    label: 'Cover letter',
    imageUrl: '/cover-letter.svg',
    initialContent: `<p>[Your Name]</p> 
      <p>[Your Address]</p> 
      <p>[Date]</p> 

      <p>[Hiring Manager's Name]</p> 
      <p>[Company Name]</p> 
      <p>[Company Address]</p> 

      <p>Dear [Hiring Manager's Name],</p> 
      <p>I am excited to apply for the [Job Title] position at [Company Name]. With my experience in [field/skills], I am confident I can contribute to your team’s success.</p> 

      <p>Thank you for considering my application. I look forward to the opportunity to discuss how I can add value to [Company Name].</p> 

      <p>Sincerely,</p> 
      <p>[Your Name]</p>`,
  },
  {
    id: 'letter',
    label: 'Letter',
    imageUrl: '/letter.svg',
    initialContent: `<p>[Your Name]</p> 
      <p>[Address]</p> 
      <p>[Date]</p> 

      <p>[Recipient’s Name]</p> 
      <p>[Recipient’s Address]</p> 

      <p>Dear [Recipient's Name],</p> 
      <p>I hope this letter finds you well. I am writing to [state purpose of the letter].</p> 

      <p>Best regards,</p> 
      <p>[Your Name]</p>`,
  },
]
