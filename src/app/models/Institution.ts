export class Institution {
  id: bigint;
  institutionName: string;
  adres: string;
  telefon: string;
  administratorName: string;
  administratorEmail: string;

  constructor(
    id: bigint,
    institutionName: string,
    adres: string,
    telefon: string,
    administratorName: string,
    administratorEmail: string
  ) {
    this.id = id;
    this.institutionName = institutionName;
    this.adres = adres;
    this.telefon = telefon;
    this.administratorName = administratorName;
    this.administratorEmail = administratorEmail;
  }
}
