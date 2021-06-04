export interface IPerson {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  age?: number;
}

export class Person implements IPerson {
  constructor(public id?: number, public firstName?: string, public lastName?: string, public email?: string, public age?: number) {}
}

export function getPersonIdentifier(person: IPerson): number | undefined {
  return person.id;
}
