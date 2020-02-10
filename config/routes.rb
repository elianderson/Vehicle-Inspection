Rails.application.routes.draw do
  root to: 'pages#index'
  scope :api do
    resources :inspections
  end

 get '*path', to: 'pages#index'
end
