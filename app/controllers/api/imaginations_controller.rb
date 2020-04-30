class Api::ImaginationsController < ApplicationController

    def index # Good
        @imaginations = Imagination.all 

        render "api/imaginations/index"
    end 

    def show # I always get a 404 and my json doesn't render
        @imagination = Imagination.find(params[:id])
        # debugger
        if @imagination
            render "api/imaginations/show"
        else  
            render json: ["Imagination does not exist"], status: 422
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

    def update # # Same error as show when the post doesn't exist. 
        @imagination = Imagination.find(params[:id])

        if @imagination && @imagination.update(imagination_params)
            render "api/imaginations/show"
        else  
            render json: @imagination.errors.full_messages, status: 422
        end 
    end 

    def destroy # Same error as show when the post doesn't exist. Its because the url doesn't exist I guess.
        @imagination = Imagination.find(params[:id])

        if @imagination && @imagination.delete
            render json: {}
        else  
            render json: ["Imagination not found"], status: 404
        end 
    end  

    private 

    def imagination_params 
        params.require(:imagination).permit(:title, :description, :artist_id, :image)
    end 
end
