Rails.application.routes.draw do
  devise_for :users,
    path: '',
    path_names: {
      registration: 'sign_up'
    },
    controllers: {
      sessions: 'sessions',
      registrations: 'registrations'
    }

  root to: 'pages#index'
  scope :api do
    resources :inspections
  end

 get '*path', to: 'pages#index'
end
