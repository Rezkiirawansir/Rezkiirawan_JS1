// If
const NilaiUAS = 50 ;
if (NilaiUAS < 60)
    console.log("Remedial.");


//If else
const NilaiUTS = 80;
if (NilaiUTS > 82) {
    console.log("Lulus.");
} else {
    console.log("Remedial.");
}


//Program nested if
const Nilai = 95;
if (Nilai < 40) {
    console.log("Remedial.");
} else if (Nilai < 60) {
    console.log("cukup.");
} else if (Nilai < 80) {
    console.log("Baik.");
} else {
    console.log("Sangat Baik.");
}


//Swich Case
 const hp =  "Oppo"
 switch (hp){
    case "Oppo":
        console.log("Ini adalah Hp dari Dongguan,Tiongkok.");
        break;
    case "Samsung":
        console.log("Ini Adalah Hp dari suwon,Korea Selatan");
        break;
    case "iphone":
        console.log("Ini adalah Hp dari California, amerika Serikat.");
        break;
    default:
        console.log("Jenis hp tidak diketahui.");
}


//For statement
for (let i = 0; i <= 10; i++) {
    document.write(i)            
}


//While
let a = 10
        while (a>=1) {
            document.write(a)
            a--
        }


//Do While
let p = 1
        do{
            document.write(p)
            p++
        }while(p<=10);


//Fuction
/penjumlahan/
function Tambahkan(a, b) {
    return a + b;
}

// Memanggil fungsi 
const hasil = Tambahkan(45, 55);
console.log("Hasil penjumlahan:", hasil);