export class Kind {
  id: bigint;
  category: bigint;
  name: string;
  image: string;
  active: number;

  constructor(
    id: bigint,
    category: bigint,
    name: string,
    image: string,
    active: number
  ) {
    this.id = id;
    this.category = category;
    this.name = name;
    this.image = image;
    this.active = active;
  }
}
