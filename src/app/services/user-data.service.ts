import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  users(){
    return [
      { name: 'Anoj', email: 'anoj@gmail.com', age: 36 },
      { name: 'Bulu', email: 'Bulu@gmail.com', age: 32 },
      { name: 'Kalia', email: 'kalia@gmail.com', age: 31 },
      { name: 'silu', email: 'silu@gmail.com', age: 34 },
      { name: 'babi', email: 'babi@outlook.com', age: 28 },
      { name: 'ridhi',email:'ridhi@outlook.com',age:3}
    ]
  }
}
