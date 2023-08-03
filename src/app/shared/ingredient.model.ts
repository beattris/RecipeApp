// export class Ingredient{
//     public name: string;
//     public amount: number

//     constructor(name: string, amount: number) {
//         this.name = name;
//         this.amount = amount;
//     }
// }

 // THE CODE ABOVE CAN BE MINIFIED USING TS AS BELOW

export class Ingredient{
     constructor(public name: string, public amount: number){}
}
 
// THIS MINIFIED/SHORTCUT METHOD WILL DECLARE THE VALUES AND ALSO ASSIGN THEM AT ONCE.