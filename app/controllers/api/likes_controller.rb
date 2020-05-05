class Api::LikesController < ApplicationController
    def index 
        imagination = Imagination.find_by(id: params[:imagination_id])
        @likes = imagination.likes 

        render "api/likes/index"
    end 

    def create 
        @like = Like.new(like_params)

        if @like.save!
            render "api/likes/show"
        else  
            render json: ["Can't like the same post twice"], status: 422
        end 
    end 

    def destroy 
        like = Like.find(params[:id])
        like.destroy
        render json: {}
    end 

    private 

    def like_params 
        params.require(:like).permit(:user_id, :imagination_id)
    end 
end
