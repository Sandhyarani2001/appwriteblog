import conf from "../conf/Conf";
import {Client, ID, Storage, Query, Databases} from "appwrite"

export class DatabaseService{
    client = new Client();
    databases;
    bucket;
    // (bucket/storage)
    
    constructor(){
        this.client
        .setEndpoint(conf. appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client)
    }

// createPost
    async createPost({title, slug, content, featuredImage,
         status, userId}){
      try {
        return await this.databases.createDocument(
           conf.appwriteDatabaseId,
           conf.appwriteCollectionId,
           slug,
        //    (slug/ ID.unique())
           {
            title, content, featuredImage, status, userId
           }
        )
      } catch (error) {
        console.log("Appwrite service :: createPost :: error",error);

      }
    }

    // updateDatabse
    async UpdatePost(slug,{title, content,
         featuredImage,status}){
            try {
                return await this.databases.updateDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                   slug,
                   {title, content, featuredImage, status}

                )
            } catch (error) {
                console.log("Appwrite service :: UpdatePost :: error",error);
            }
         }

    //  deletedatabaseDoc
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
               slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error",error);
            return false
        }
    }

    // get single post
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {  
            console.log("Appwrite service :: deletePost :: error",error);
            return false;
        }
    }
    
    // get all post
    async listPost(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error",error);
            return false
        }
    }

    // file upload service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error",error);
            return false
        }
    }
    // deletefile
    async deleteFile(fileId){
        try {
         await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
        return true
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error",error);
            return false
        }
    }

    getFilePreview(filed){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            filed
        )
    }

}


const service = new DatabaseService()
export default service