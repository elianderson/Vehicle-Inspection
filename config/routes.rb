Rails.application.routes.draw do
  root to: 'inspections#index'
  resources :inspections
end
