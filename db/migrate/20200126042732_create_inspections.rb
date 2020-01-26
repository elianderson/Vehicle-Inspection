class CreateInspections < ActiveRecord::Migration[6.0]
  def change
    create_table :inspections do |t|
      t.datetime :date_performed
      t.string :vin
      t.integer :technician_id

      t.timestamps
    end
  end
end
