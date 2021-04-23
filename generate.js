module.exports = function() {
  const faker = require('faker')
  const _ = require('lodash')
  return {
    users: _.times(3, (n) => {
      const firstName = faker.name.firstName()
      const lastName = faker.name.lastName()
      return {
        id: n + 1,
        firstName,
        lastName,
        email: `${firstName.toLowerCase()}.${lastName
          .slice(0, 1)
          .toLowerCase()}@thaimail.com`,
        password: faker.internet.password(),
        phoneNumber: faker.phone.phoneNumber('08#-###-####'),
        role: ''
      }
    }),
    restaurants: _.times(10, (n) => {
      const open = faker.random.number({ min: 6, max: 10 })
      const close = open + faker.random.number({ min: 8, max: 12 })
      return {
        id: n + 1,
        name: faker.company.companyName(),
        address: `${faker.address.streetAddress()}, ${faker.address.cityName()}`,
        slogan: faker.lorem.sentence(),
        phoneNumber: faker.phone.phoneNumber('08#-###-####'),
        opening: `${String(open).padStart(2, '0')}:00 - ${String(
          close
        ).padStart(2, '0')}:00`
      }
    }),
    reviews: _.times(20, (n) => {
      const id = n + 1
      return {
        id,
        rating: faker.random.number({ min: 1, max: 5 }),
        title: faker.lorem.words(faker.random.number({ min: 4, max: 6 })),
        description: faker.lorem.sentence(),
        datetime: faker.date.past(),
        userId: 1,
        restaurantId: 2
      }
    })
  }
}
