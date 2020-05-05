class Api::LikesController < ApplicationController
    def index 
        imagination = Imagination.find_by(params[:imagination_id])
        @likes = imaginations.likes 

        render "api/likes/index"
    end 

    def create 
        @like = Like.new(params[:imagination_id], params[:user_id])

        @like.save!

        render "api/likes/show"
    end 

    def destroy 
        like = Like.find(id: params[id])
        like.destroy
        render json: {}
    end 
end
