class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :condition
      t.integer :area_id
      t.text :extended_attributes

      t.timestamps
    end
  end
end
