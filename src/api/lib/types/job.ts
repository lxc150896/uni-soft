export interface IJob {
  company: string,
  location: string,
  salary: string,
  jobDescription: Array<string>,
  requirements: Array<string>,
  benefits: Array<string>,
  date?: string;
}
