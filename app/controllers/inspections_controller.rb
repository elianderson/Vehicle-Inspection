class InspectionsController < ApplicationController
  def index
    @inspections = Inspection.all
    respond_to do |format|
      format.json
    end
  end

  def show
    @inspection = Inspection.find(params[:id])
    respond_to do |format|
      format.json
    end
  end

  private

  def inspection_params
    params.require(:inspection).permit(
      :vin,
      :date_performed,
      :technician_id
    )
  end

end
