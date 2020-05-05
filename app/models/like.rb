# == Schema Information
#
# Table name: likes
#
#  id             :bigint           not null, primary key
#  user_id        :integer          not null
#  imagination_id :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Like < ApplicationRecord
    validates :user_id, uniqueness: { scope: :imagination_id }

    belongs_to :user, # I don't even need to put the keys and class names because of rails magic, but I like practicing it anyway.
        primary_key: :id, 
        foreign_key: :user_id, 
        class_name: :User 

    belongs_to :imagination, 
        primary_key: :id, 
        foreign_key: :imagination_id, 
        class_name: :Imagination 
end
