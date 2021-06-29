const person ={
  name: ['Code',  'Mafia'],
  age: 32,
  gender: 'male',
  interests: {
      sports: 'soccer',
      music: 'piano',
      martial_arts: ['Taekwondo', 'Karate']
  },
  
};

console.log(person.gender);

console.log(`Japanese martial art: ${person.interests.martial_arts[1]}`)