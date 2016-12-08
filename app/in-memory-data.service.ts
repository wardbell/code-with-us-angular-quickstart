import { InMemoryDbService } from 'angular-in-memory-web-api';

import { createTestCustomers } from './test-data';

function createHeroes() {
  return [
    {id: 11, name: 'Mr. Nice'},
    {id: 12, name: 'Narco'},
    {id: 13, name: 'Bombasto'},
    {id: 14, name: 'Celeritas'},
    {id: 15, name: 'Magneta'},
    {id: 16, name: 'RubberMan'},
    {id: 17, name: 'Dynama'},
    {id: 18, name: 'Dr IQ'},
    {id: 19, name: 'Magma'},
    {id: 20, name: 'Tornado'}
  ];
}

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const customers = createTestCustomers();
    const heroes  = createHeroes();
    return { customers, heroes };
  }
}
