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
    before_validation :ensure_session_token #, :ensure_profile_picture!

    # Add the "has_many through" associations
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

    has_one_attached :avatar

    attr_reader :password

    # def ensure_profile_picture! # Gives them a default profile picture
    #     if !self.avatar.attached?
    #         file = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/default-profile-pic.png")
    #         self.avatar.attach(io: file, filename: 'default-profile-pic.png')
    #         self.save!
    #     end
    # end 

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
        self.password_digest = BCrypt::Password.create(password) # now we have an encrypted password that is used in the BCrypt db 
    end 

    def is_password?(password) 
        BCrypt::Password.new(self.password_digest).is_password?(password) # creates an object from the BCrypt::Password class and uses its is_password? function, not ours
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

# This is Active Record stuff unless otherwise specified.
# validations are only ran with create, create!, save, save!, update, and update! It makes sure only valid data gets saved to the DB. The ! version of these methods raise an exception
# The controller handles the case where there is an error on this page. The point of the model is to handle data then give it to the controller. 
# before_validation - runs the given methods before the data object is validated
# has_many - an association to other tables through primary keys and foreign keys; think of it like a joins table and the user is the parent with many children in the other tables
# has_one_attached - part of Active Storage; attaches a file (my pictures) to the record (the data object); I specify the services I want to use with it, like AWS S3
# attr_reader - makes the getter method for the given property; we only have to specify "password" because it's not a part of the DB, and I think Rails makes the getter and setter method for the stuff in the DB (I'm not 100% sure though)
# self.find_by_credentials - self used this way makes the method a class method, not an instance method; You would use it like User.find_by_credentials(username, password); StackOverflow also mentioned singleton
# password= - we created the setter method for password
# is_password? - confirming that the inputted password is the same password as the one in the DB (we check the password digests)
# reset_session_token! - change the session token when we log in and out
# ensure_session_token - make sure that the logged in user has a session token