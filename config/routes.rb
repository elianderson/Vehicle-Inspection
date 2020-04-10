Rails.application.routes.draw do
  root to: 'pages#index'
  scope :api do
    resources :inspections
    resources :users
    post '/login', to: 'auth#login'
    post '/auto_login', to: 'auth#auto_login'
    post '/secured', to: 'auth#secured'
  end

 get '*path', to: 'pages#index'
end
