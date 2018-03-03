export enum Sex { M, F};

export class Spieler {

  constructor(public id: number,
              public spielerid: string,
              public name: string,
              public vorname: string,
              public gebdatum: Date,
              public sex: Sex,
              public nat: string,
              public clubid: string,
              public clubname: string) {
  }
}
