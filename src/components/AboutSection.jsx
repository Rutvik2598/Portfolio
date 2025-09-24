import { Brain, Code, Network } from 'lucide-react'

export const AboutSection = () => {
  return (
    <section id='about' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          About <span className='text-primary'>Me</span>
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold'>
              Passionate Software Engineer and Tech Enthusiast
            </h3>

            <p className='text-muted-foreground'>
              I’m a Master’s student in Computer Science at NC State, with a
              Bachelor’s in Computer Science from the University of Pune. I have
              4 years of industry experience in mobile and web development
              across frontend and backend, and I recently completed a summer
              internship at Intuit, where I integrated AI-powered features into
              the QuickBooks Android app. My interests include software
              engineering, system design, machine learning, and exploring
              agentic AI solutions.
            </p>

            <p className='text-muted-foreground'>
              Beyond my coursework and professional roles, I am conducting
              research in networking for IoT devices using OpenThread, working
              on distributed communication protocols that enable efficient,
              secure device connectivity. Outside of technology, I am passionate
              about traveling and hiking, often exploring trails and immersing
              myself in nature. I also enjoy video games as a way to relax.
              Altogether, these experiences reflect my drive to learn, build,
              and explore—both in software and beyond.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href='#contact' className='cosmic-button'>
                Get in Touch
              </a>

              <a
                href=''
                className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'
              >
                Download Resume
              </a>
            </div>
          </div>

          <div>
            <div className='grid grid-cols-1 gap-6'>
              <div className='gradient-border p-6 card-hover'>
                <div className='flex items-start gap-4'>
                  <div className='p-3 rounded-full bg-primary/10'>
                    <Code className='h-6 w-6 text-primary' />
                  </div>
                  <div className='text-left'>
                    <h4 className='font-semibold text-lg'>
                      Mobile & Web Development
                    </h4>
                    <p className='text-muted-foreground'>
                      Building scalable Android apps and full-stack web
                      applications with modern frameworks.
                    </p>
                  </div>
                </div>
              </div>

              <div className='gradient-border p-6 card-hover'>
                <div className='flex items-start gap-4'>
                  <div className='p-3 rounded-full bg-primary/10'>
                    <Brain className='h-6 w-6 text-primary' />
                  </div>
                  <div className='text-left'>
                    <h4 className='font-semibold text-lg'>
                      AI & Machine Learning
                    </h4>
                    <p className='text-muted-foreground'>
                      Integrating intelligent models into real-world apps to
                      improve usability and performance.
                    </p>
                  </div>
                </div>
              </div>

              <div className='gradient-border p-6 card-hover'>
                <div className='flex items-start gap-4'>
                  <div className='p-3 rounded-full bg-primary/10'>
                    <Network className='h-6 w-6 text-primary' />
                  </div>
                  <div className='text-left'>
                    <h4 className='font-semibold text-lg'>
                      Systems & Networking
                    </h4>
                    <p className='text-muted-foreground'>
                      Researching IoT networking protocols and their
                      applications in smart home devices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
