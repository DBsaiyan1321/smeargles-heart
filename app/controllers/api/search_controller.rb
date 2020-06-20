class Api::SearchController < ApplicationController
    def show 
        debugger
        # @imaginations = Imagination.find_by_sql("SELECT * FROM imaginations WHERE title LIKE '%#{params[id]}%' OR description LIKE '%#{params[id]}%'")
        @imaginations = Imagination.where('title LIKE :input OR description LIKE :input', input: "%#{params[:id]}%")

        if @imaginations 
            render "/api/search/show" # file path from the views folder 
        else  
            render json: @imaginations.errors.full_messages, status: 422
        end 
    end 
end
