class Api::CommentsController < ApplicationController
    def index 
        imagination = Imagination.find(params[:imagination_id])
        @comments = imagination.comments 

        render "api/comments/index"
    end 

    def create 
        @comment = Comment.new(comment_params)

        if @comment.save!
            render "api/comments/show"
        else  
            render json: @comment.errors.full_messages, status: 422
        end 
    end 

    def update
        @comment = Comment.find(params[:id])

        if @comment and @comment.update(comment_params)
            render "api/comments/show"
        else  
            render json: @comment.errors.full_messages, status: 422
        end 
    end 

    def destroy
        @comment = Comment.find(params[:id])
        @comment.destroy 
        render json: {}
    end 

    private 

    def comment_params 
        params.require(:comment).permit(:imagination_id, :body, :user_id)
    end 
end
