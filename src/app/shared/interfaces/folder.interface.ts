export interface FolderInterface {
  id: string;
  name: string;
  itemCount: number;
  children?: FolderInterface[];
}