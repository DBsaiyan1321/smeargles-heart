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
        @user = User.find_by(id: params[:id])

        if @user 
            render "/api/users/show" # file path from the views folder 
        else  
            render json: @user.errors.full_messages, status: 422
        end 
    end 

    private 

    def user_params 
        params.require(:user).permit(:username, :password, :email)
    end
end
