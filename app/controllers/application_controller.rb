class ApplicationController < ActionController::Base #CRLLL
    helper_method :current_user, :logged_in? # Don't put helper_methods. You get undescriptive error message

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end 

    def require_login 
        redirect_to "/api/session" unless logged_in?
    end 

    def login!(user)
        @current_user = user 
        session[:session_token] = @current_user.reset_session_token!
    end 

    def logged_in?
        !!current_user
    end 

    def logout!
        @current_user.reset_session_token! 
        session[:session_token] = nil 
        @current_user = nil
    end 
end
