module.exports = () => {
  const usageText = `
    dict helps you manage you dict tasks.
  
    usage:
      dict <command>
  
      commands can be:

      help: used to print the usage guide
      def:  used to get definations of a word
      ant:  used to get antonyms of a word
      syn:  used to get synonyms of a word
      ex:   used to get examples of a word
      dict: used to get all above details of the word
      play: used to play game on words
     
    `;

  console.log(usageText);
};