export interface IDocument {
  id: number,
  name: string,
  pages: {
    page: number,
    image: string
  }[]
}
