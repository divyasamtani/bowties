Rails.application.routes.draw do
  namespace :api do
    resources :bowties, only: [:index, :show, :create, :update, :destroy], :defaults => {:format => 'json'}
  end
    resources :bowties, only: [:index]
end





