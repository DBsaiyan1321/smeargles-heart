Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create] 
    
    resource :session, only: [:create, :destroy]

    resources :imaginations, only: [:index, :create, :update, :destroy, :show] # I have to figure out how to only get imaginations of a certain user. I forgot how
  end 
end
