export class Institution {
  id: bigint;
  name: string;
  address: string;
  telephone: string;
  supervisorName: string;
  supervisorEmail: string;

  constructor(
    id: bigint,
    name: string,
    address: string,
    telephone: string,
    supervisorName: string,
    supervisorEmail: string
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.telephone = telephone;
    this.supervisorName = supervisorName;
    this.supervisorEmail = supervisorEmail;
  }
}
