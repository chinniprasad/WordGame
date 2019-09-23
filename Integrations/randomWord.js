const axios = require("axios");

module.exports = async () => {
  try {
    let { data } = await axios(
      `https://fourtytwowords.herokuapp.com/words/randomWord?api_key=9e04a0d4357dd464d687f2015eb285bba06a7868248f78a2d2c4d56af66e221e9ba0ee8c31e7e702f4fd54653f979933febfc9a23266050a5df31f74863440cf49410e084da61b17ac97720ad9ba7179`
    );    
    return data;
  } catch (error) {
    console.log(error);
    
  }
};
