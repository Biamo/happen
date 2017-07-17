Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    jsonapi_resources :entries
  end
  post 'authenticate', to: 'authentication#authenticate'
end
