class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :imagination_id, null: false
      t.timestamps
    end

    add_index :likes, [:user_id, :imagination_id], unique: true
  end
end
