class CreateAreas < ActiveRecord::Migration[6.0]
  def change
    create_table :areas do |t|
      t.string :name
      t.integer :inspection_id
      t.integer :sequence

      t.timestamps
    end
  end
end
