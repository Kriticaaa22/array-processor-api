const express= require('express');
const app=express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

app.post('/bfhl',(req,res) =>{
    const data=req.body.data;
    const even=[];
    const odd=[];
    const alphabets=[];
    const specialChars =[];
    let sum=0;
    let concat='';

    for(let item of data){
        const str=String(item);
        if(!isNaN(str)){
            const num=parseInt(str);
            sum+=num;
            (num%2 ==0? even :odd).push(str);

        }
        else if(/^[a-zA-Z]+$/.test(str)){
            alphabets.push(str.toUpperCase());
            concat += str;
        }
        else{
            specialChars.push(str);
        }
    }

    let result='';

    let reversed=concat.split('').reverse();
    for(let i=0;i<reversed.length;i++){
        result+=i%2==0 ? reversed[i].toUpperCase() :reversed[i].toLowerCase();
    }

    res.status(200).json({
        is_success:true,
        user_id: "kritica_jain_09102004",
        email: "kritica523.be22@chitkara.edu.in",
        roll_number: "2210990523",
        odd_numbers: odd,
        even_numbers: even,
        alphabets: alphabets,
        special_characters: specialChars,
        sum: String(sum),
        concat_string: result
    });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});