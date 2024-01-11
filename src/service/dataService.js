import { Client, Databases, ID,Query,Storage } from "appwrite";
import confi from "../confi/confi";
import { useState } from "react";

export class DataService {
client = new Client();
db;
bucket;


constructor() {

this.client.setEndpoint(confi.appwriteUrl).
            setProject(confi.appwriteProjectId);
this.db = new Databases(this.client);
this.bucket = new Storage(this.client);
}

async createPost({title,slug,content,status,featuredImage,userId}){
    try {
        // console.log("data in",userId)
        return await this.db.createDocument(
            confi.appwriteDatabaseId,
            confi.appwriteCollectionId,
            slug,
            {title,content,status,featuredImage,userId}
            )

        
    } catch (error) {
        console.log("Appwrite::service::createPost",error)
    }

}

async updatePost(slug,{title,content,featuredImage,status}){
    try {
        return await this.db.updateDocument(
            confi.appwriteDatabaseId,
            confi.appwriteCollectionId,
            slug,
            {title,content,featuredImage,status,})

        
    } catch (error) {
        console.log("Appwrite::service::updatePost",error)
    }
    
 }
 async deletePost(slug){
    try {
         await this.db.deleteDocument(
            confi.appwriteDatabaseId,
            confi.appwriteCollectionId,
            slug,
            )
return true
        
    } catch (error) {
        console.log("Appwrite::service::deletePost",error)
    }
    return false
}
async getPost(slug){
    try {
        return await this.db.getDocument(
            confi.appwriteDatabaseId,
            confi.appwriteCollectionId,
            slug,
            )
        
    } catch (error) {
        console.log("Appwrite::service::getPost",error)
    }
}
async getPosts(){
    try {
        

        

        return await this.db.listDocuments(
            confi.appwriteDatabaseId,
        confi.appwriteCollectionId,
            [Query.equal("status", "active")]
            )
        
    } catch (error) {
        console.log("Appwrite::service::getPosts",error)
    }
return false
}

//file upload delete

async uploadFile(file){
    try {
        return await this.bucket.createFile(
            confi.appwriteBucketId,
            ID.unique(),
            file
            )
        
    } catch (error) {
        console.log("Appwrite::service::uploadFile",error)
    }
return false
    
 }

async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            confi.appwriteBucketId,
            fileId
            )
            return true
        
    } catch (error) {
        console.log("Appwrite::service::deleteFile",error)
    return false
}
}

 getFileUrl(fileId){
    try {
        return  this.bucket.getFilePreview(
            confi.appwriteBucketId,
            fileId
            )
        
    } catch (error) {
        console.log("Appwrite::service::getFile",error)
    }
}

}

const dataService= new DataService()
export default  dataService