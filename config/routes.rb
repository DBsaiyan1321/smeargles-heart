Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root" 

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :index, :show, :update] 
    
    resources :search, only: [:show]

    resource :session, only: [:create, :destroy] 

    resources :imaginations, only: [:index, :create, :update, :destroy, :show] do
      resources :likes, only: [:index, :create, :destroy] 
      resources :comments, only: [:index, :create, :update, :destroy]
    end 
  end 
end

# root to - tells Rails to route "/" to app/views/static_pages/root.html.erb
# namespace - is just used as a way for us to group related routes together
# defaults: {format: :json} - sets params[:format] to "json" when it routes to the controller
# resources - just makes routes for all 7 HTTP methods. I used "only" to specify the only routes that I want. I could've wrote it like :only => [:show] too. 
# resource - is used for session because we only ever have one session. We have multiple of whatever we use "resources" on.
# nested resources - creates routes for the children of a parent object. Example: we now have routes for the likes and comments of a specific imagination. Just look at the Rails Routes if you don't understand

# the Rails docs literally tell you everything. As a matter of fact, the docs for everything tells you exactly what you need to know