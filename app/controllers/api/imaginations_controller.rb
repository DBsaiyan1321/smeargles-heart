class Api::ImaginationsController < ApplicationController

    def index 
        @imaginations = Imagination.all 
        render "api/imaginations/index"
    end 

    def show 
        @imagination = Imagination.find(params[:id])
        
        if @imagination
            render "api/imaginations/show"
        else  
            render json: ["Imagination does not exist"], status: 422
        end 
    end

    def create 
        @imagination = Imagination.new(imagination_params)

        if @imagination.save
            render "api/imaginations/show"
        else  
            render json: @imagination.errors.full_messages, status: 422
        end 
    end 

    def update  
        @imagination = Imagination.find(params[:imagination][:id])
        
        if @imagination && @imagination.update(imagination_params)
            render "api/imaginations/show"
        else  
            render json: @imagination.errors.full_messages, status: 422
        end 
    end 

    def destroy 
        @imagination = Imagination.find(params[:id])
        
        if @imagination && @imagination.delete && (@imagination.artist_id === current_user().id)
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
