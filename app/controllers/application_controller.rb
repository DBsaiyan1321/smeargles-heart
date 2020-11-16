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

# helper_method - makes the given method available to the view
# current_user - set the @current_user based off of the session token if the @current_user hasn't already been set
# require_login - redirect the user to the login page
# login! - log the user in by setting their session token
# logged_in? - check whether or not there is a current user
# logout! - reset the session token in the DB, set the user's session token to nil, and set the current user to nil
