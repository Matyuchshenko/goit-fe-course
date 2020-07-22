const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

  user.mood = 'happy';
  console.log(user);

  user.hobby = 'skydiving';
  console.log(user);

  user.premium = false;
  console.log(user);

  const keys = Object.keys(user);
  console.log(keys);

  for (const key of keys) {
      console.log(key);
      console.log(user[key])
  }