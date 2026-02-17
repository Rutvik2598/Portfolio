export const ExperienceSection = () => {
  const experiences = [
    {
      role: 'Research Assistant',
      company: 'North Carolina State University',
      location: 'Raleigh, NC',
      duration: 'Jan 2025 - Present',
      description:
        '• Architected a scalable Multi-PAN OpenThread network to support 64+ concurrent IoT devices, utilizing a custom hub-and-spoke IPv6 routing topology to overcome standard mesh limitations\n• Optimized low-level performance by engineering modifications to the OpenThread protocol stack and nRF52840 radio drivers, enabling concurrent Multi-PAN communication on a single radio instance\n• Validated system reliability by benchmarking against conventional Thread networks, confirming the architecture achieves equivalent throughput and latency performance to standard single-PAN implementations'
    },
    {
      role: 'Software Engineering Intern',
      company: 'Intuit',
      location: 'Mountain View, CA',
      duration: 'May 2025 - Aug 2025',
      description:
        '• Engineered AI-powered Smart Drafted Emails in QuickBooks Android app, boosting invoice sent-to-paid ratio and reducing payment delays\n• Designed customer-insight–driven logic to dynamically personalize invoice email tone and subject\n• Developed reusable software components for the internal shared UI library, standardizing UI elements that were subsequently adopted by multiple Intuit Android teams to improve development velocity\n• Established ownership of the full feature lifecycle (design, dev, testing), collaborating cross-functionally with backend, design, and product teams to ensure a defect-free production release'
    },
    {
      role: 'Software Engineer',
      company: 'Raja Software Labs Pvt Ltd',
      location: 'Pune, India',
      duration: 'Sep 2021 - June 2024',
      description:
        '• Shipped features for the Google Home Android application, a large-scale product connecting millions of users to smart home devices globally\n• Implemented robust state management logic using Kotlin Flows for device provisioning workflows, ensuring real-time UI synchronization with hardware states during complex setup processes\n• Engineered fully accessible UI components compliant with TalkBack standards, ensuring inclusive usability for visually impaired users and meeting strict product accessibility requirements\n• Resolved complex concurrency issues and memory bottlenecks by profiling application performance, directly reducing crash rates and improving scroll performance for data-heavy device lists\n• Developed comprehensive Unit and UI automation tests (Espresso, Mockito), reducing manual regression testing time by 40% and accelerating the CI/CD release pipeline'
    },
    {
      role: 'Software Engineer',
      company: 'Larsen and Toubro Infotech Ltd',
      location: 'Pune, India',
      duration: 'Oct 2020 - Sep 2021',
      description:
        '• Architected and deployed scalable backend microservices on AWS (EC2, Docker) for a high-traffic insurance platform, ensuring 99.9% availability\n• Built optimized RESTful APIs using Java and Spring Boot to handle complex search queries, utilizing database indexing to improve response times by 30%\n• Designed modular Angular frontend components for policy management, enhancing code reusability and standardizing the user experience across the platform'
    },
    {
      role: 'Student Developer Intern',
      company: 'Crio.do',
      location: 'Pune, India',
      duration: 'Jan 2020 - Mar 2020',
      description:
        '• Developed QMoney (stock portfolio analyzer) core logic and published it as a library using Java and REST APIs\n• Contributed to QBox (secure file-sharing service) while gaining skills in Linux, Networking, and Security\n• Practiced algorithmic problem-solving by writing pseudocode and implementing solutions through QPrep'
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
