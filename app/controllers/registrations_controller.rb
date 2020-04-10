class RegistrationsController < Devise::RegistrationsController
  respond_to :json

  def create
    begin
      build_resource(sign_up_params)

      resource.save
      render_resource(resource)
    rescue ActiveRecord::RecordNotUnique
      error_output = "The email #{sign_up_params[:email]} has already been taken"
      render json: {errors: [error_output] } , status: :bad_request
    end
  end
end
