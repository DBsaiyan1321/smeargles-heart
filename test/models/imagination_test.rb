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
require 'test_helper'

class ImaginationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
