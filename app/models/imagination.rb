# == Schema Information
#
# Table name: imaginations
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text             not null
#  artist_id   :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Imagination < ApplicationRecord
    validates :title, :description, :artist_id, presence: true
end
