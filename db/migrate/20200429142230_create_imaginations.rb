class CreateImaginations < ActiveRecord::Migration[5.2]
  def change
    create_table :imaginations do |t|
      t.string :title, null: false 
      t.text :description, null: false
      t.integer :artist_id, null: false
      t.timestamps
    end

    add_index :imaginations, :artist_id
    add_index :imaginations, :title
  end
end
