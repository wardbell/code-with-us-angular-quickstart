export function createTestCustomers() {
  return [
    {
      id:       1,
      name:    'Alex Smith',
      address: {
        street:  '123 Main Street',
        city:    'Anytown',
        state:   'California',
        region:  'West'
      }
    },
    {
      id:       2,
      name:    'Pierre Pasmal',
      address: {
        street:  '456 Rue de Main',
        city:    'Quebec City',
        state:   'Quebec',
        region:  'East'
      }
    },
    {
      id:       3,
      name:    'Margarita Nadie',
      address: {
        street:  '789 Calle Principal',
        city:    'Guadalajara',
        state:   'Jalisco',
        region:  'South'
      }
    },
    {
      id:       4,
      name:    'Katie O\'Leary',
      address: {
        street:  '137 DeKoven Street',
        city:    'Chicago',
        state:   'Illinois',
        region:  'Midwest'
      }
    },
  ];
}
