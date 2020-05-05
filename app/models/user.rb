# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord # SPIRE
    validates :username, :email, :session_token, presence: true, uniqueness: true 
    validates :password_digest, presence: true 
    validates :password, length: { minimum: 6, allow_nil: true } 
    before_validation :ensure_session_token 

    has_many :imaginations,
        primary_key: :id, 
        foreign_key: :artist_id, 
        class_name: :Imagination

    has_many :imaginations_liked,   
        primary_key: :id, 
        foreign_key: :user_id, 
        class_name: :Like

    has_many :comments, 
        primary_key: :id, 
        foreign_key: :user_id, 
        class_name: :Comment

    attr_reader :password

    def self.find_by_credentials(username, password) 
        user = User.find_by(username: username)
        return nil unless user
        if user.is_password?(password)
            user  
        else 
            nil 
        end 
    end 

    def password=(password) 
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end 

    def is_password?(password) 
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end 

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(64)
        self.save!
        self.session_token
    end 

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(64)
    end 
end
