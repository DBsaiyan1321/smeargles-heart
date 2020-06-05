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
        # @imaginations = Imagination.where("artist_id = '#{@user.id}'")

        if @user 
            render "/api/users/show" # file path from the views folder 
        else  
            render json: @user.errors.full_messages, status: 422
        end 
    end 

    def update 
        # debugger
        @user = User.find(params[:user][:id])

        if (@user && @user.update(user_params)) 
            render "/api/users/show"
        else 
            render json: @user.errors.full_messages, status: 422
        end 
    end 

    private 

    def user_params 
        params.require(:user).permit(:username, :password, :email, :bio)
    end
end
