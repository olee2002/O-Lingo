Rails.application.routes.draw do

  # namespace :api do
  #   get 'users/index'
  # end

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
