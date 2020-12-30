class Api::UsersController < ApplicationController
    def create 
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render "/api/users/show" # file path from the views folder 
        else  
            render json: @user.errors.full_messages, status: 422
        end 
    end 

    def index
        @users = User.all 

        render "/api/users/index"
    end 

    def show
        @user = User.find_by(username: params[:id]) # The wildcard gets passed in under the id param even though I am sending up a username

        if @user 
            render "/api/users/show" # file path from the views folder 
        else  
            render json: @user.errors.full_messages, status: 422
        end 
    end 

    def update 
        @user = User.find(params[:user][:id])
        
        if (@user && @user.update(user_params)) 
            render "/api/users/show"
        else 
            render json: @user.errors.full_messages, status: 422
        end 
    end 

    private 

    def user_params 
        params.require(:user).permit(:username, :password, :email, :bio, :avatar)
    end
end

# the instance variables here can be used in the view that we send the data to
# json: @user.errors.full_messages - since we are treating this as an API, we send a json error response to our frontend with the error messages
# status: 422 - Unprocessable Entity, sending an error status code up lets the frontend know that there was an error. If I don't specify, I think it gives a 200 status code 
# user_params - gives us the params sent up by the user
# private - method defined under private can only be used by other methods from the same class, methods inherited from the parent class, methods included from a module

