interface SeedData {
  entries: SeedEntry[]
}

interface SeedEntry {
  description: string
  status: string
  createdAt: number
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'Pendiente: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, vero impedit quae at in fugit.',
      status: 'pending',
      createdAt: Date.now()
    },
    {
      description: 'En progreso: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, accusantium eveniet dolorem dicta voluptatem impedit.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000
    },
    {
      description: 'Terminada: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis iusto accusantium porro consectetur voluptate possimus!',
      status: 'finished',
      createdAt: Date.now() - 100000
    }
  ]
}