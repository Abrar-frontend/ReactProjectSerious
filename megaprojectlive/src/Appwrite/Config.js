import { Client, Databases,Storage, ID, Query } from "appwrite";
import conf from '../conf/conf'

export class Service{
    client = new Client();
     databases;
     bucket;
     
    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
        return await this.databases.createDocument(conf.appWriteDatabaseId,
            conf.appWriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId,
            }
        )}catch(error){
            console.log("Appwrite serive :: createPost :: error", error);
        }

    }
    //createpost finish here
    async updatePost(slug,{title, content, featuredImage, status}){
        try{
            return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
                )
        }catch(error){
            console.log("Appwrite serive :: updatePost :: error", error)
        }

    }
    //updatePost finish here
    async deletePost(slug){
        try{
             await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
             )
             return true
        }catch(error){
            console.log("Appwrite serive :: deletPost :: error", error)
            return false
        }
    }
    //deletePost finish here
    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug)
        }catch(error){
            console.log("Appwrite serive :: getPost :: error", error);
            return false
        }
    }
    //get one post finish here
    async getPosts( queris = [Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                queris,
            )
        }catch(error){
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    // File uploaded start from here

    async uploadfile(file){
        try{
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )
        }catch(error){
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    // Upload file finished here

    async deleteFile(fileId){
     try{
        await this.bucket.deleteFile(
            conf.appWriteBucketId,
            fileId,
        )
        return true
     }catch(error){
        console.log("Appwrite serive :: deleteFile :: error", error);
        return false
     }
    }

    // delelt file finished here

    getFilePreview(fileId){
      
            return this.bucket.getFilePreview(
                conf.appWriteBucketId,
                fileId,
            )

    }



}

const service = new Service()

export default service