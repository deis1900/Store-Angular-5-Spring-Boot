import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from "./user";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class UsersService {


  constructor(private http: HttpClient) {
  }

  // private users: User[] = [
  //   {firstName: 'den',lastName:'Denisov', userName: 'DDen', email:'Den@den.com', sex:'Men', password:'888888888', access:true
  //   ,image:'https://image.flaticon.com/icons/svg/667/667189.svg', phone:888888888},
  //   {firstName: 'Lara',lastName:'Larisova', userName: 'Lar', email:'LarL@den.com', sex:'Women', password:'8888880009', access:true
  //     ,image:'https://image.flaticon.com/icons/svg/672/672642.svg', phone:888888809},
  //   {firstName: 'Rom',lastName:'Romanov', userName: 'Rom', email:'Rom@den.com', sex:'Men', password:'888888008', access:true
  //     ,image:'https://image.flaticon.com/icons/svg/672/672636.svg', phone:8888888800},
  // ];

  // addUser(user: User) {
  //   this.users.push(user);
  // }


  getUsers() : Observable<User[]> {
   return this.http.get('http://localhost:8080/customer/userList.json')
     .map(data=> {
       let usersList = data["usersList"];
       return usersList.map(function (user:any) {
         return {
           name: user.firstName,
           lastName: user.lastName,
           image: user.image,
           email: user.email,
           password: user.password,
           username: user.userName,
           sex: user.sex,
           phone: user.phone,
           access: user.access
         };
        });
      })
     .catch((error: any)=> {
       console.log(error);
       return Observable.throw(error);
     });
  }

  postUser(user: User){
    const body = {
      firstName: user.firstName,
      lastName: user.lastName,
      image: user.image,
      email: user.email,
      password: user.password,
      username: user.userName,
      sex: user.sex,
      phone: user.phone,
      access: user.access
    };
    const myHeaders = new HttpHeaders().set('guest', 'guest');
    return this.http.post('http://localhost:8080/customer/add?body=', body, {headers: myHeaders});
  }
}
