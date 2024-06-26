interface Experience {
  title: string
  team?: string | null
  company: string
  logo?: string | null
  start?: number | null
  end?: number | null
  type: 'Remote' | 'On-Site' | 'On-Site / Remote'
  location?: string | null
  description: string
}

export default Experience
