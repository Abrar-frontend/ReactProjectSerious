import { Client, Account, ID } from "appwrite";
import conf from '../conf/conf'

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
               .setEndpoint(conf.appWriteUrl)
               .setProject(conf.appWriteProjectId);
        
        this.account = new Account(this.client)
    }
//constructure function close in there
    async createAccount({email, password, name}){

        try{
          const userAccount = await this.account.create(ID.unique(), email, password, name)

          if(userAccount){
            //I am calling another function
            return this.login({email, password})
           
          } else {
            return userAccount
          }

        }catch(error){

          throw error;
        }

    }
//Function Which I create for authentication is close in there

    async login({email, password}){

        try{

            return await this.account.createEmailSession(email, password)
        }catch(error){
            throw error
        }

    }
    //Function Which I create for SignIn is close in there

    async getCurrentUser(){

        try{
            return await this.account.get();
        }catch(error){
            console.log("Appwrite service : getCurrentUser Error",error)
        }
        return null
    }
     //Function Which I create for getCurrentUser is close in there

     async logout(){
        try{
            await this.account.deleteSession()
        }catch(error){
            console.log("Appwrite Service logout error",error)
        }
     }
}

const authService = new AuthService();

export default authService