import { Client, Databases,Storage, ID } from "appwrite";
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
    async getPost(){

    }

}

const service = new Service()

export default service