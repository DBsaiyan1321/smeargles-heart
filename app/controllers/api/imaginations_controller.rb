class Api::ImaginationsController < ApplicationController

    def index # Good
        if (params[:user_id]) 
            @imaginations = User.find(params[:user_id]).imaginations 
        else  
            @imaginations = Imagination.all 
        end

        render "api/imaginations/index"
    end 

    def show # Good
        user = User.find_by(id: params[:user_id])
        @imagination = Imagination.find(params[:id])

        if (user.id == @imagination.artist_id) && @imagination
            render "api/imaginations/show"
        else  
            render json: ["User or imagination does not exist"], status: 404
        end 
    end

    def create # Good
        @imagination = Imagination.new(imagination_params)

        if @imagination.save
            render "api/imaginations/show"
        else  
            render json: @imagination.errors.full_messages, status: 422
        end 
    end 

    def update # Needs fixing
        @imagination = Imagination.find(params[:id])

        if @imagination && @imagination.update(imagination_params)
            render "api/imaginations/show"
        else  
            render json: @imagination.errors.full_messages, status: 422
        end 
    end 

    def delete # Didn't test yet
        @imagination = Imagination.find(params[:id])

        if @imagination && @imagination.delete
            render "api/imaginations/index"
        else  
            render json: ["Imagination not found"], status: 404
        end 
    end  

    private 

    def imagination_params 
        params.require(:imagination).permit(:title, :description, :artist_id)
    end 
end
