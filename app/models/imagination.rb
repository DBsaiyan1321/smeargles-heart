# == Schema Information
#
# Table name: imaginations
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text
#  artist_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Imagination < ApplicationRecord
    validates :title, :artist_id, presence: true
    # validate :ensure_image # Comment this line out when you seed.

    belongs_to :user,
        primary_key: :id, 
        foreign_key: :artist_id, 
        class_name: :User 

    has_many :likes, 
        primary_key: :id, 
        foreign_key: :imagination_id, 
        class_name: :Like

    has_many :comments,
        primary_key: :id, 
        foreign_key: :imagination_id, 
        class_name: :Comment 

    has_one_attached :image

    def ensure_image 
        unless self.image.attached?
            errors[:image] << "Must be attached"
        end
    end
        
end
