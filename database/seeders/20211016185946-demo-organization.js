

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('Organizations', [{
      name: 'ONG2',
      image: 'https://www.autofacil.es/wp-content/uploads/2021/07/Novitec-Ferrari-SF90-Stradale-1.jpg',
      address: 'A del valle 4343',
      phone: '4545454',
      email: 'demo@demo.com',
      welcomeText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et commodo diam, ut vulputate leo. Proin ut nisl ac dui facilisis venenatis ac ac augue. Sed vel fermentum nisl. Sed sit amet turpis molestie, tincidunt magna eu, varius nisi. Vestibulum gravida, mauris vitae fermentum efficitur, nibh augue eleifend nisi, quis rhoncus eros orci ut arcu. Praesent aliquam nisi eu arcu mattis gravida. Donec velit mi, laoreet eu lorem non, placerat convallis nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque varius nulla id tellus ultrices tempus. Nulla pellentesque ac nisi ac pretium. Nulla quis fermentum massa, ac suscipit diam. Cras eget finibus justo, auctor faucibus dolor. Vestibulum purus turpis, consequat et diam sed, suscipit laoreet nisi.',
      aboutUsText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et commodo diam, ut vulputate leo. Proin ut nisl ac dui facilisis venenatis ac ac augue. Sed vel fermentum nisl. Sed sit amet turpis molestie, tincidunt magna eu, varius nisi. Vestibulum gravida, mauris vitae fermentum efficitur, nibh augue eleifend nisi, quis rhoncus eros orci ut arcu. Praesent aliquam nisi eu arcu mattis gravida. Donec velit mi, laoreet eu lorem non, placerat convallis nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque varius nulla id tellus ultrices tempus. Nulla pellentesque ac nisi ac pretium. Nulla quis fermentum massa, ac suscipit diam. Cras eget finibus justo, auctor faucibus dolor. Vestibulum purus turpis, consequat et diam sed, suscipit laoreet nisi.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'ONG3',
      image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/877349-1627732659.jpg?resize=980:*',
      address: 'A del Cometa 4343',
      phone: '4545454',
      email: 'demo33@demo.com',
      welcomeText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et commodo diam, ut vulputate leo. Proin ut nisl ac dui facilisis venenatis ac ac augue. Sed vel fermentum nisl. Sed sit amet turpis molestie, tincidunt magna eu, varius nisi. Vestibulum gravida, mauris vitae fermentum efficitur, nibh augue eleifend nisi, quis rhoncus eros orci ut arcu. Praesent aliquam nisi eu arcu mattis gravida. Donec velit mi, laoreet eu lorem non, placerat convallis nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque varius nulla id tellus ultrices tempus. Nulla pellentesque ac nisi ac pretium. Nulla quis fermentum massa, ac suscipit diam. Cras eget finibus justo, auctor faucibus dolor. Vestibulum purus turpis, consequat et diam sed, suscipit laoreet nisi.',
      aboutUsText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et commodo diam, ut vulputate leo. Proin ut nisl ac dui facilisis venenatis ac ac augue. Sed vel fermentum nisl. Sed sit amet turpis molestie, tincidunt magna eu, varius nisi. Vestibulum gravida, mauris vitae fermentum efficitur, nibh augue eleifend nisi, quis rhoncus eros orci ut arcu. Praesent aliquam nisi eu arcu mattis gravida. Donec velit mi, laoreet eu lorem non, placerat convallis nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque varius nulla id tellus ultrices tempus. Nulla pellentesque ac nisi ac pretium. Nulla quis fermentum massa, ac suscipit diam. Cras eget finibus justo, auctor faucibus dolor. Vestibulum purus turpis, consequat et diam sed, suscipit laoreet nisi.',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('Organizations', null, {});
  }
};