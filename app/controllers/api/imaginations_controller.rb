class Api::ImaginationsController < ApplicationController

    def index 
        @imaginations = Imagination.all 

        render "api/imaginations/index"
    end 

    def show
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
        @imagination = Imagination.find(params[:id])

        if @imagination && @imagination.update(imagination_params)
            render "api/imaginations/show"
        else  
            render json: @imagination.errors.full_messages, status: 422
        end 
    end 

    def delete
        @imagination = Imagination.find(params[:id])

        if @imagination && @imagination.delete
            render "api/imaginations/index"
        else  
            render json: ["Imagination not found"], status: 422
        end 
    end  

    private 

    def imagination_params 
        params.require(:imagination).permit(:title, :description, :artist_id)
    end 
end
