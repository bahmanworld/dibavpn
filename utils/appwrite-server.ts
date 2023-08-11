import {Client, Users } from 'node-appwrite'


const client = new Client().setProject('')
const users = new Users(client)

const login = async (username: string, password: string)=>{
    
}