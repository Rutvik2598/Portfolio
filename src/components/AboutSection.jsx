import { Brain, Code, Cpu, Network } from 'lucide-react'

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
              I&apos;m a Master&apos;s student in Computer Science at NC State, with a
              Bachelor&apos;s from the University of Pune and 4 years of industry
              experience. I&apos;ve worked across mobile, web, backend, AI
              integration, and high-performance computing, picking up
              whatever the problem demands. My interests span software
              engineering, system design, machine learning, and agentic AI.
            </p>

            <p className='text-muted-foreground'>
              Beyond coursework and industry work, I conduct research in IoT
              networking at NC State, exploring distributed protocols for
              secure and efficient device connectivity. I&apos;m drawn to problems
              that sit at the intersection of systems and intelligence, and I
              enjoy building things that work at every layer of the stack.
              Outside of tech, I unwind on hiking trails or deep in a video game.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
              <a href='#contact' className='cosmic-button'>
                Get in Touch
              </a>

              <a
                href='https://drive.google.com/file/d/1LG85BZ49bnMjPip1hvxCiIBGIUygOmrT/view?usp=sharing'
                target='_blank'
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
                      Mobile &amp; Web Development
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
                      AI &amp; Machine Learning
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
                      Systems &amp; Networking
                    </h4>
                    <p className='text-muted-foreground'>
                      Researching IoT networking protocols and their
                      applications in smart home devices.
                    </p>
                  </div>
                </div>
              </div>

              <div className='gradient-border p-6 card-hover'>
                <div className='flex items-start gap-4'>
                  <div className='p-3 rounded-full bg-primary/10'>
                    <Cpu className='h-6 w-6 text-primary' />
                  </div>
                  <div className='text-left'>
                    <h4 className='font-semibold text-lg'>
                      GPU &amp; High-Performance Computing
                    </h4>
                    <p className='text-muted-foreground'>
                      Writing CUDA kernels and optimizing parallel workloads
                      for maximum throughput on modern GPU architectures.
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
