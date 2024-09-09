export interface IJob {
  company: string,
  location: string,
  salary: string,
  expirationDate: string,
  jobDescription: Array<string>,
  requirements: {
    experience: Array<string>,
    skills: Array<string>
  },
  benefits: Array<string>,
  applyInstructions: {
    content: Array<string>,
    note: string
  }
}
