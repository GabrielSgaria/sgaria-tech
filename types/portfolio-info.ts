export type ProjectDetails = {
    id: string,
    slug: string,
    title: string,
    description: string,
    imageCapa: {
      url: string
    },
    images: { url: string | undefined }[],
  }

export type Projects = {
  portfolios: ProjectDetails[]
}

export type PageProjectsData = {
  portfolio: ProjectDetails | null
}