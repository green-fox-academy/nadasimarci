'use strict';

//Create an application which solves the following problems.
//What is John K. Miller's phone number?
//Whose phone number is 307-687-2982?
//Do we know Chris E. Myers' phone number?

let teleBook: any = {}
teleBook['William A. Lathan'] = '405-709-1865'
teleBook['John K. Miller'] = '402-247-8568'
teleBook['Hortensia E. Foster'] = '606-481-6467'
teleBook['Amanda D. Newland'] = '319-243-5613'
teleBook['Brooke P. Askew'] = '307-687-2982'

function numberName(obj: any, name: string, number: string) {


  if (number === '' && name !== '') {
    if (obj.hasOwnProperty(name) === true) { console.log(`This is ${name}'s number: ${teleBook[name]}`) }
    else
      console.log('There is nobody under that name in the phonebook')
  }

  else if (name === '' && number !== ''){
    let finalOut: string =''
    for (let i: number = 0; i < Object.keys(obj).length; i++){
      if (obj [Object.keys(obj)[i]] === number){
      finalOut =  `This number belongs to ${Object.keys(obj)[i]}`}
      else {finalOut = 'Phone number not found'} 
    }
    console.log(finalOut)}
  }

  numberName(teleBook,"John K. Miller",'')
  numberName(teleBook,'' ,'307-687-2982')
  numberName(teleBook,'Chris E. Myers', '')