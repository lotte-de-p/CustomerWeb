import { Builder } from './builder.model';

export class IPerson {
  name?: string;
  firstName?: string;
}

describe('Builder', function () {
  it('should ', function () {
    const person: Partial<IPerson> = { name: 'name' };
    const personBuilder = Builder(IPerson, person).firstName('first').build();

    expect(personBuilder.firstName).toEqual('first');
    expect(personBuilder.name).toEqual('name');
  });
});
