export interface Experience {
  company: string
  role: string
  period: string
  description: string
  technologies: string[]
}

export interface Achievement {
  metric: string
  description: string
  icon: string
}

export interface Certification {
  name: string
}

export interface Education {
  degree: string
  institution: string
  period: string
  location: string
}

export interface ContactInfo {
  email: string
  phone: string
  linkedin: string
  github: string
  location: string
  availability: string
}

export type Locale = 'pt' | 'en'

// Estrutura completa dos arquivos de localização
export interface LocaleMessages {
  nav: {
    experience: string
    skills: string
    achievements: string
    education: string
    contact: string
  }
  hero: {
    role: string
    specialty: string
    summary: string
    cta: string
  }
  techStack: {
    title: string
  }
  experience: {
    title: string
    present: string
    items: Experience[]
  }
  achievements: {
    title: string
    items: Achievement[]
  }
  education: {
    title: string
    degree: string
    institution: string
    period: string
    location: string
    certifications: {
      title: string
      items: Certification[]
    }
  }
  contact: {
    title: string
    availability: string
    copyEmail: string
    copied: string
  }
  footer: {
    madeWith: string
  }
}
