Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :index, :show, :update] 
    
    resource :session, only: [:create, :destroy] 

    resources :imaginations, only: [:index, :create, :update, :destroy, :show] do
      resources :likes, only: [:index, :create, :destroy] 
      resources :comments, only: [:index, :create, :update, :destroy]
    end 
  end 
end
