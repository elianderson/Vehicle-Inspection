class AddTireSizeToInspections < ActiveRecord::Migration[6.0]
  def change
    add_column :inspections, :tire_size, :string
    add_column :inspections, :notes, :text
  end
end
