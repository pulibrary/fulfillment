class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # go back to the url you were at after signing in
  def after_sign_in_path_for(_resource)
    request.env['omniauth.origin'] || root_path
  end
end
