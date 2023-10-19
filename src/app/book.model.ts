import { BookStructure } from './book.interface';

export class Book implements BookStructure {
  private name: string;
  private author: string;
  private desc: string;
  private image: string;
  private id: number;
  constructor(
    name: string,
    author: string,
    desc: string,
    image: string,
    id: number
  ) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.desc = desc;
    this.image = image;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }
}
