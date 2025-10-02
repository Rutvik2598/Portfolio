export const ExperienceSection = () => {
  const experiences = [
    {
      role: 'Research Assistant',
      company: 'North Carolina State University',
      location: 'Raleigh, NC',
      duration: 'Jan 2025 - Present',
      description:
        'I am currently working on a CISCO-funded project aimed at flattening a thread network for smart home devices. In this role, I implement solutions that enhance the integration of smart devices within enterprise networks, engage in research and development to optimize network performance and reliability, and continue to build expertise in network architecture and smart home technology applications.'
    },
    {
      role: 'Software Engineering Intern',
      company: 'Intuit',
      location: 'Mountain View, CA',
      duration: 'May 2025 - Aug 2025',
      description:
        'Built AI-powered Smart Drafted Emails in QuickBooks Android app to boost invoice sent-to-paid ratio and reduce payment delays. Designed customer-insight–driven logic to personalize invoice emails, enhanced shared UI library with Jetpack Compose, and owned full feature lifecycle on Android (design, dev, testing, demo).'
    },
    {
      role: 'Software Engineer',
      company: 'Raja Software Labs Pvt Ltd',
      location: 'Pune, India',
      duration: 'Sep 2021 - June 2024',
      description:
        'Contributed to Google Home Android app development, impacting 100K+ users. Implemented features using Android SDK, Kotlin coroutines, Dagger Hilt, and MVVM. Built responsive UI components from Figma designs, fixed production issues, and developed automation tests for Android (Espresso, Mockito, UiAutomator) and iOS (XCUI, EarlGrey), improving reliability and reducing manual testing.'
    },
    {
      role: 'Software Engineer',
      company: 'Larsen and Toubro Infotech Ltd',
      location: 'Pune, India',
      duration: 'Oct 2020 - Sep 2021',
      description:
        'Developed an insurance web application as a Full Stack Engineer. Built RESTful APIs with Java Spring Boot and relational DB optimizations, improving query performance. Created modular Angular components for policies and claims, enhancing reusability by 30%. Deployed backend with Docker & AWS, ensuring 99.9% uptime and scalability.'
    },
    {
      role: 'Student Developer Intern',
      company: 'Crio.do',
      location: 'Pune, India',
      duration: 'Jan 2020 - Mar 2020',
      description:
        'Developed QMoney (stock portfolio analyzer) core logic and published it as a library using Java and REST APIs. Contributed to QBox (secure file-sharing service) while gaining skills in Linux, Networking, and Security. Practiced algorithmic problem-solving by writing pseudocode and implementing solutions through QPrep.'
    }
  ]

  return (
    <section id='experience' className='py-20'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          Professional <span className='text-primary'>Experience</span>
        </h2>

        <div className=''>
          <div className='space-y-8'>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className='gradient-border p-6 rounded-lg card-hover text-left'
              >
                <div className='flex items-center gap-4 justify-between'>
                  <h3 className='text-xl font-semibold mb-2'>{exp.company}</h3>
                  <p className='text-md italic'>{exp.location}</p>
                </div>

                <div className='flex items-center gap-1'>
                  <p className='text-sm text-gray-500'>{exp.role},</p>
                  <p className='text-sm text-gray-500'>{exp.duration}</p>
                </div>

                <p className='mt-3'>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
