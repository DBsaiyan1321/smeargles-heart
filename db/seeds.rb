# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

demo_user = User.create!(username: :Demo_User, email: "demouser@gmail.com", password: "demouser")

first_imagination = Imagination.create!(title: "First Imagination of Bulbasuar", description: "I fought long and hard to get this picture up, with the assistance of Mike", artist_id: 1)
file = open("https://smearglesheart-dev.s3-us-west-1.amazonaws.com/gxgZDeD8rsRGo1y5KuG4qsru")
first_imagination.image.attach(io: file, filename: 'bulbasuar.jpg')