Rails.application.routes.draw do

  get '/*path', to: 'react#index'
  # namespace :api do
  #   get 'users/index'
  # end
  # root to: "callback#index"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html


  namespace :api do
    resources :users do
      resources :lessons
    end
  end
  namespace :api do
    resources :languages do
      resources :lessons
    end
  end
end
