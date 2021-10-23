

module.exports = {
  up: async (queryInterface) => {
    return queryInterface.bulkInsert('Organizations', [{
      name: 'ONG1',
      image: 'https://www.autofacil.es/wp-content/uploads/2021/07/Novitec-Ferrari-SF90-Stradale-1.jpg',
      address: 'A del valle 4343',
      phone: '4545454',
      email: 'demo@demo.com',
      welcomeText: 'TEXTO BIENVENIDA DE LA ONG Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et commodo diam, ut vulputate leo. Proin ut nisl ac dui facilisis venenatis ac ac augue. Sed vel fermentum nisl. Sed sit amet turpis molestie, tincidunt magna eu, varius nisi. Vestibulum gravida, mauris vitae fermentum efficitur, nibh augue eleifend nisi, quis rhoncus eros orci ut arcu. Praesent aliquam nisi eu arcu mattis gravida. Donec velit mi, laoreet eu lorem non, placerat convallis nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque varius nulla id tellus ultrices tempus. Nulla pellentesque ac nisi ac pretium. Nulla quis fermentum massa, ac suscipit diam. Cras eget finibus justo, auctor faucibus dolor. Vestibulum purus turpis, consequat et diam sed, suscipit laoreet nisi.',
      aboutUsText: 'TEXTO INFORMATIVO DE ESTA ONG Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et commodo diam, ut vulputate leo. Proin ut nisl ac dui facilisis venenatis ac ac augue. Sed vel fermentum nisl. Sed sit amet turpis molestie, tincidunt magna eu, varius nisi. Vestibulum gravida, mauris vitae fermentum efficitur, nibh augue eleifend nisi, quis rhoncus eros orci ut arcu. Praesent aliquam nisi eu arcu mattis gravida. Donec velit mi, laoreet eu lorem non, placerat convallis nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque varius nulla id tellus ultrices tempus. Nulla pellentesque ac nisi ac pretium. Nulla quis fermentum massa, ac suscipit diam. Cras eget finibus justo, auctor faucibus dolor. Vestibulum purus turpis, consequat et diam sed, suscipit laoreet nisi.',
      urlFace: 'https://www.facebook.com/BRACWorld/',
      urlLinked: 'https://www.linkedin.com/company/brac/',
      urlInsta: 'https://www.instagram.com/bracworld/',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('Organizations', null, {});
  }
};
