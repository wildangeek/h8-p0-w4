/* Problem: Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka. Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false. */

function angkaPrima(angka){
  var jumlahBagi =0
  for(var i =0; i<=angka ; i++){
    if(angka %i===0){
      jumlahBagi++
    }
  }
  if(jumlahBagi==2){
    return true
  }else{
    return false
  }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(2)); // false
