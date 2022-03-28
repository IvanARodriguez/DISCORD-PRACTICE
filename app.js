
const addNewPassword = ()=> {
    let pwLength = 10000;

    const characters = ['a', 'b', 'c', 'd', 'e', 'A', 'B', 'C', 'D', '1', '2', '3', '4', '5', '6', '-', '*', '&', '$'];

    // // Challenge
    // do{
    //     if(pwLength < 5 || pwLength > 50){
    //         alert('input is in invalid');
    //         pwLength = prompt('Choose a length between 5 -50.')
    //     } else {
    //         pwLength = prompt('Choose a length between 5 -50.')
    //     }
    // } while(pwLength < 5 || pwLength > 50)
    // hold the password
   let passwordHolder = '';

    //randomize the password with random characters
   for(let i=0; i<pwLength; i++){
    passwordHolder += characters[Math.floor(Math.random()* characters.length)]
   }

   console.log(passwordHolder);
}