import { Schema,model,models } from "mongoose";

const postSchema = new  Schema ({
    title:{type:String,require:true},
    description:{type:String,require:true},
    img:{type:String,require:true},
},
{toJSON :{virtuals:true} }
);


// postSchema.virtual

const PostModel = models.Post || model("Post",postSchema);

export default PostModel;