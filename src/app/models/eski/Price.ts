export class Price {
  id: bigint;
  category: bigint;
  kind: bigint;
  type: bigint;
  price: bigint;
  institutionId: bigint;

  constructor(
    id: bigint,
    category: bigint,
    kind: bigint,
    type: bigint,
    price: bigint,
    institutionId: bigint
  ) {
    this.id = id;
    this.category = category;
    this.kind = kind;
    this.type = type;
    this.price = price;
    this.institutionId = institutionId;
  }
}
