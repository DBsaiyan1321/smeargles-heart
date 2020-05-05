class ChangeDescriptionInImaginations < ActiveRecord::Migration[5.2]
  def change
    change_column_null :imaginations, :description, true
  end
end
