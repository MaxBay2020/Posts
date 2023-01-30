import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";
import {sortPostsByCreatedTime} from "../../utils/utils";
import Error, {Message, StatusCode} from "../../utils/Error";
import Post from "../../types/Post";

const postHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { query: { page, limit }, method } = req

   try {
       if(!page || !limit){
           const error = new Error(null, StatusCode.E400, Message.ErrParams)
           return res.status(error.statusCode).send({
               info: '',
               message: error.message
           })
       }

       if(method === 'GET'){
           const { data } = await axios.get('https://6144e843411c860017d256f0.mockapi.io/api/v1/posts')
           const posts = data
           const sortedPosts :Post[] = sortPostsByCreatedTime(posts)
           const totalPages = Math.ceil(posts.length / +limit)
           const startIndex = (+page - 1) * (+limit)

           return res.status(200).send({
                totalPages,
                posts: sortedPosts.slice(startIndex, startIndex + (+limit))
           })

       }
   }catch (e) {
       // console.log(e)
       const error = new Error(e, StatusCode.E500, Message.ServerError)
       return res.status(error.statusCode).send({
           info: error.info,
           message: error.message
       })
   }
}

export default postHandler
