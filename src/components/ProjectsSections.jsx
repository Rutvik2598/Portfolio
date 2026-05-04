import { ArrowRight, GithubIcon } from 'lucide-react'

const projects = [
  {
    id: 0,
    title: 'GitHub Logs Analyzer',
    description:
      'An AI-powered GitHub Actions failure analyzer. When your CI fails, it automatically reads the logs, identifies the root cause, and posts a detailed fix suggestion as a PR comment — supporting Anthropic, Gemini, OpenAI, and Groq.',
    image: '/projects/github_logs_analyzer.png',
    githubUrl: 'https://github.com/Rutvik2598/github-logs-analyzer',
    marketplaceUrl: 'https://github.com/marketplace/actions/github-logs-analyzer',
    tags: ['TypeScript', 'GitHub Actions', 'AI', 'Anthropic', 'Gemini', 'OpenAI', 'Groq', 'CI/CD']
  },
  {
    id: 1,
    title: 'AudioScribe',
    description:
      'An Android app that records audio, transcribes it in real time using Gemini 2.5 Flash, and auto-generates summaries. Features a foreground service pipeline, silence detection, phone call handling, and retry logic with exponential backoff.',
    image: '/projects/audioscribe.png',
    githubUrl: 'https://github.com/Rutvik2598/AudioScribe',
    tags: ['Android', 'Kotlin', 'Jetpack Compose', 'Gemini API', 'Hilt', 'Room', 'Coroutines', 'AI']
  },
  {
    id: 2,
    title: 'Recipe Recommender',
    description:
      'An AI-powered web application that generates personalized recipe suggestions tailored to user preferences and dietary restrictions. Built with React (frontend) and Node.js (backend), leveraging the Gemini API to enhance user experience.',
    image: '/projects/recipe_recommendor.png',
    githubUrl: 'https://github.com/SRN-SE-Fall24/CookSmart',
    tags: ['React', 'Node.js', 'TypeScript', 'Gemini API', 'AI']
  },
  {
    id: 3,
    title: 'PostPolice',
    description:
      `PostPolice delivers high-performance fact-checking at the edge. By leveraging Groq for rapid AI inference and local semantic matching via Hugging Face, it provides instant verification while minimizing latency and cost.`,
    image: '/projects/postpolice.png',
    githubUrl: 'https://github.com/Rutvik2598/PostPolice',
    tags: ['AI', 'Groq', 'Valkey', 'Hugging Face', 'Edge Computing', 'Fact-Checking']
  },
  {
    id: 4,
    title: 'Tunable CUDA SGEMM',
    description:
      'A CUDA SGEMM benchmark comparing four implementations — naive, shared-memory register-tiled (tunable), cuBLAS, and CUTLASS — on FP32 matrix multiplication. The tunable kernel is templated on tile parameters selected per matrix size via a 431-kernel sweep, reaching ~19.6 TFLOP/s (~53% of cuBLAS) on an RTX 5080.',
    image: '/projects/tunable_matmul.png',
    githubUrl: 'https://github.com/Rutvik2598/Tunable_MatMul_MatVec',
    tags: ['CUDA', 'C++', 'SGEMM', 'cuBLAS', 'CUTLASS', 'GPU', 'HPC', 'Parallel Programming']
  },
  {
    id: 5,
    title: 'BattleZone',
    description:
      `Built on a custom WebGL engine from scratch, this project features per-material Phong lighting, procedural terrain generation, and imported OBJ models. It combines acceleration-based physics with a responsive HUD and minimap for a complete arcade experience.`,
    image: '/projects/battlezone.png',
    githubUrl: 'https://github.com/Rutvik2598/BattleZone',
    tags: ['WebGL', 'Game Development', 'JavaScript', '3D Graphics', 'Remake', 'Creative Mode']
  },
  {
    id: 6,
    title: 'General Insurance Frontend',
    description:
      'A responsive web application for managing insurance policies, claims, and customer inquiries. Designed with Angular to deliver a seamless and interactive user experience.',
    image: '/projects/insurance.png',
    githubUrl:
      'https://github.com/VasaviPedhammagari/General-Insurance-Angular',
    tags: ['Angular', 'TypeScript', 'Insurance', 'Frontend']
  },
  {
    id: 7,
    title: 'General Insurance Backend',
    description:
      'A scalable backend service for an insurance management system, supporting policies, claims, and customer data. Implemented with Spring Boot in a microservices architecture and integrated with Oracle database for secure data handling.',
    image: '/projects/insurance.png',
    githubUrl: 'https://github.com/VasaviPedhammagari/General-Insurance-II',
    tags: ['Spring Boot', 'Java', 'Oracle DB', 'Backend']
  },
  {
    id: 8,
    title: 'Social Media Application',
    description:
      'A social networking Android application that connects users through shared interests and activities. Features real-time interactions, authentication, and cloud storage using Firebase.',
    image: '/projects/econatia.png',
    githubUrl: 'https://github.com/Rutvik2598/Econatia',
    tags: ['Android', 'Firebase', 'Java', 'Mobile App', 'Social Media']
  },
  {
    id: 9,
    title: 'Personal Portfolio Website',
    description:
      'A modern and responsive personal portfolio website showcasing projects, skills, and professional experience. Built using React and styled with Tailwind CSS for a clean, minimal design.',
    image: '/projects/portfolio.png',
    githubUrl: 'https://github.com/Rutvik2598/Portfolio',
    tags: ['React', 'Tailwind CSS', 'JavaScript', 'Frontend']
  },
  {
    id: 10,
    title: 'Handwritten Digit Recognition',
    description:
      'An optimized implementation of handwritten digit recognition (MNIST dataset) using parallel programming techniques. Built with C++ and CUDA to accelerate neural network training on GPUs compared to CPU execution.',
    image: '/projects/MNIST_parallel.png',
    githubUrl: 'https://github.com/Rutvik2598/MNIST-MLP-training-CPU-vs-GPU',
    tags: ['C++', 'CUDA Programming', 'Neural Networks']
  },
  {
    id: 11,
    title: 'Guns and Knives Detection',
    description:
      'A deep learning-based object detection system for identifying weapons (guns and knives) in images and video streams. Implemented with Python and YOLO for real-time detection capabilities.',
    image: '/projects/guns_knives.png',
    githubUrl: '#',
    tags: [
      'Python',
      'YOLO',
      'Deep Learning',
      'Object Detection',
      'Computer Vision'
    ]
  },
  {
    id: 12,
    title: 'Music Genre Classification',
    description:
      'A machine learning project to classify music tracks into genres. Implemented and compared multiple models including SVM, Random Forest, and Neural Networks to evaluate accuracy and performance.',
    image: '/projects/Musical_genres.png',
    githubUrl: '#',
    tags: [
      'Python',
      'Machine Learning',
      'Deep Learning',
      'SVM',
      'Audio Processing',
      'Music'
    ]
  },
  {
    id: 13,
    title: 'Interplanetary Shock Predictor',
    description:
      'A predictive model that estimates interplanetary shocks based on solar coronal mass ejections (CME). Utilizes regression techniques to calculate the duration between CME events and shock arrivals, aiding in space weather forecasting.',
    image: '/projects/shock_pred.png',
    githubUrl: '#',
    tags: ['Python', 'Regression', 'Machine Learning', 'Space Weather', 'NASA']
  }
]

export const ProjectsSections = () => {
  return (
    <section id='projects' className='py-24 px-4 relative'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
          {' '}
          Featured <span className='text-primary'> Projects</span>
        </h2>

        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Things I’ve built and worked on along the way
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, key) => (
            <div
              key={key}
              className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'
            >
              <div className='h-48 overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                />
              </div>

              <div className='p-6'>
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.tags.map(tag => (
                    <span className='px-2 py-1 text-sm font-medium border rounded-full bg-secondary text-secondary-foreground'>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                <p className='text-muted-foreground text-sm mb-2'>
                  {project.description}
                </p>
                {project.marketplaceUrl && (
                  <a
                    href={project.marketplaceUrl}
                    target='_blank'
                    className='text-xs text-primary font-medium mb-4 inline-block hover:underline'
                  >
                    🟢 Live on GitHub Marketplace
                  </a>
                )}
                <div className='flex justify-between items-center'>
                  <div className='flex space-x-3 mx-auto'>
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      className='flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors duration-300'
                    >
                      <span> View on GitHub </span>
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <a
            href='https://github.com/Rutvik2598'
            target='_blank'
            className='cosmic-button w-fit flex items-center mx-auto gap-2'
          >
            {' '}
            Check my GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
