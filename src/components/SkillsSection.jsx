import { useState } from 'react'
import { cn } from '@/lib/utils'

const skills = [
  { name: 'Kotlin', level: 96, category: 'Mobile Development' },
  { name: 'Java', level: 95, category: 'Mobile Development' },
  { name: 'Android', level: 97, category: 'Mobile Development' },
  { name: 'Jetpack Compose', level: 95, category: 'Mobile Development' },
  { name: 'Espresso/UIAutomator', level: 95, category: 'Mobile Development' },

  { name: 'React', level: 91, category: 'Web Development' },
  { name: 'Angular', level: 90, category: 'Web Development' },
  { name: 'JavaScript', level: 90, category: 'Web Development' },
  { name: 'TypeScript', level: 80, category: 'Web Development' },
  { name: 'HTML/CSS', level: 90, category: 'Web Development' },
  { name: 'Spring Boot', level: 92, category: 'Backend Development' },
  { name: 'Node.js', level: 90, category: 'Backend Development' },
  { name: 'REST APIs', level: 93, category: 'Backend Development' },
  { name: 'GraphQL', level: 85, category: 'Backend Development' },
  { name: 'Docker', level: 92, category: 'Backend Development' },

  { name: 'Firebase', level: 90, category: 'Cloud & Databases' },
  { name: 'AWS/GCP', level: 70, category: 'Cloud & Databases' },
  { name: 'CI/CD', level: 70, category: 'Cloud & Databases' },
  { name: 'MySQL', level: 85, category: 'Cloud & Databases' },
  { name: 'PostgreSQL', level: 75, category: 'Cloud & Databases' },
  { name: 'MongoDB', level: 70, category: 'Cloud & Databases' },
  { name: 'Redis', level: 70, category: 'Cloud & Databases' },

  { name: 'Python', level: 85, category: 'AI & Data' },
  { name: 'Machine Learning', level: 78, category: 'AI & Data' },
  { name: 'Data Analytics', level: 80, category: 'AI & Data' },
  { name: 'TensorFlow/PyTorch', level: 75, category: 'AI & Data' },

  { name: 'C/C++', level: 80, category: 'Systems & Networking' },
  { name: 'IoT (OpenThread)', level: 78, category: 'Systems & Networking' },
  { name: 'Parallel Programming', level: 72, category: 'Systems & Networking' },
  { name: 'System Design', level: 74, category: 'Systems & Networking' },

  { name: 'Git/GitHub', level: 97, category: 'Tools & Practices' },
  { name: 'Agile/Scrum', level: 95, category: 'Tools & Practices' },
  { name: 'Figma', level: 95, category: 'Tools & Practices' },
  { name: 'Jira', level: 95, category: 'Tools & Practices' }
]

const categories = [
  'All',
  'Mobile Development',
  'Web Development',
  'Backend Development',
  'Cloud & Databases',
  'AI & Data',
  'Systems & Networking',
  'Tools & Practices'
]

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredSkills = skills.filter(
    skill => activeCategory === 'All' || skill.category === activeCategory
  )

  return (
    <section id='skills' className='py-24 px-4 relative bg-secondary/30'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
          My <span className='text-primary'> Skills</span>
        </h2>

        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/70 text-foreground hover:bg-secondary'
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className='bg-card p-6 rounded-lg shadow-xs card-hover'
            >
              <div className='text-left mb-4'>
                <h3 className='font-semibold text-lg'> {skill.name} </h3>
              </div>
              <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
                <div
                  className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]'
                  style={{ width: skill.level + '%' }}
                ></div>
              </div>
              <div className='text-right mt-1'>
                <span className='text-sm text-muted-foreground'>
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
