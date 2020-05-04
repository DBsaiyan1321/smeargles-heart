# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

demo_user = User.create!(username: 'Demo_User', email: "demouser@gmail.com", password: "demouser")
roark = User.create!(username: 'Roarker2', email: "roarker@gmail.com", password: "roarker")
gardenia = User.create!(username: 'gardenia_bean8', email: "gardenia@gmail.com", password: "gardenia")
maylene = User.create!(username: 'May-lean', email: "maylene@gmail.com", password: "maylene")
crasher_wake = User.create!(username: 'krasher_wakyer100', email: "crasher_wake@gmail.com", password: "crasher_wake")
fantina = User.create!(username: 'phanteena', email: "fantina@gmail.com", password: "fantina")
byron = User.create!(username: 'rockhead45', email: "bye-rin@gmail.com", password: "bye-rin")
candice = User.create!(username: 'canned_ice-30f', email: "candice@gmail.com", password: "candice")
volkner = User.create!(username: 'ThaGoat', email: "volkner@gmail.com", password: "volkner")
a_a_ron = User.create!(username: 'grassyas', email: "a-a-ron@yahoo.com", password: "a-a-ron")
big_bertha = User.create!(username: 'earthquake', email: "big_bertha@yahoo.com", password: "big_bertha")
flintee = User.create!(username: 'flynn-tee', email: "flintee@yahoo.com", password: "flintee")
lucian = User.create!(username: 'manipulator', email: "lucian@yahoo.com", password: "lucian")
cynthia = User.create!(username: 'CHAMPION', email: "cynthia@hotmail.com", password: "cynthia")

first_imagination = Imagination.create!(title: "First Imagination of Bulbasuar", description: "I fought long and hard to get this picture up, with the assistance of Mike", artist_id: 1 )
file1 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/bulbasuar.png")
first_imagination.image.attach(io: file1, filename: 'bulbasuar.png')

second_imagination = Imagination.create!(title: "Sylveon Girl", description: "This is a cute picture of a girl with a Sylveon shirt.", artist_id: 2)
file2 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/pokemon-girl.png")
second_imagination.image.attach(io: file2, filename: 'pokemon-girl.png')

third_imagination = Imagination.create!(title: "Zapdos Background", description: "An awesom wallpaper for Zapdos fans!", artist_id: 3)
file3 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/zap-dos.jpg")
third_imagination.image.attach(io: file3, filename: 'zap-dos.jpg')

fourth_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 4)
file4 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/drawing.jpg")
fourth_imagination.image.attach(io: file4, filename: 'drawing.jpg')

fifth_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 5)
file5 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/arctic-uno.jpg")
fifth_imagination.image.attach(io: file5, filename: 'arctic-uno.jpg')

sixth_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 6)
file6 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/anime-girl.png")
sixth_imagination.image.attach(io: file6, filename: 'anime-girl.png')

seventh_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 7)
file7 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/bee.png")
seventh_imagination.image.attach(io: file7, filename: 'bee.png')

eight_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 8)
file8 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/black-and-yellow.png")
eight_imagination.image.attach(io: file8, filename: 'black-and-yellow.png')

ninth_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 9)
file9 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/black-pikachu.jpg")
ninth_imagination.image.attach(io: file9, filename: 'black-pikachu.jpg')

tenth_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 10)
file10 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/blue-haired-girl.png")
tenth_imagination.image.attach(io: file10, filename: 'blue-haired-girl.png')

eleventh_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 11)
file11 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/bootleg-eevee.jpg")
eleventh_imagination.image.attach(io: file11, filename: 'bootleg-eevee.jpg')

twelth_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 12)
file12 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/girls.png")
twelth_imagination.image.attach(io: file12, filename: 'girls.png')

thirteenth_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 13)
file13 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/butterfly.jpg")
thirteenth_imagination.image.attach(io: file13, filename: 'butterfly.jpg')

forteenth_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 14)
file14 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/coffee-man.png")
forteenth_imagination.image.attach(io: file14, filename: 'coffee-man.png')

fifteenth_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 1)
file15 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/coffee.png")
fifteenth_imagination.image.attach(io: file15, filename: 'coffee.png')

sixteenth_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 2)
file16 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/koi.png")
sixteenth_imagination.image.attach(io: file16, filename: 'koi.png')

seventeenth_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 3)
file17 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/dragonball.jpg")
seventeenth_imagination.image.attach(io: file17, filename: 'dragonball.jpg')

eighteenth_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 4)
file18 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/fantasy-background.jpg")
eighteenth_imagination.image.attach(io: file18, filename: 'fantasy-background.jpg')

ninteenth_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 5)
file19 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/flower.jpg")
ninteenth_imagination.image.attach(io: file19, filename: 'flower.jpg')

twenty_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 6)
file20 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/mountain.png")
twenty_imagination.image.attach(io: file20, filename: 'mountain.png')

twentyone_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 7)
file21 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/hero.png")
twentyone_imagination.image.attach(io: file21, filename: 'hero.png')

twentytwo_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 8)
file22 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/hi-def-pokeball.jpg")
twentytwo_imagination.image.attach(io: file22, filename: 'hi-def-pokeball.jpg')

twentythree_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 9)
file23 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/rabit.png")
twentythree_imagination.image.attach(io: file23, filename: 'rabit.png')

twentyfourth_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 10)
file24 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/hijab.png")
twentyfourth_imagination.image.attach(io: file24, filename: 'hijab.png')

twentyfifth_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 11)
file25 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/kakashi.jpg")
twentyfifth_imagination.image.attach(io: file25, filename: 'kakashi.jpg')

twentysixth_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 12)
file26 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/last-supper.png")
twentysixth_imagination.image.attach(io: file26, filename: 'last-supper.png')

twentyseventh_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 13)
file27 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/lilac.jpg")
twentyseventh_imagination.image.attach(io: file27, filename: 'lilac.jpg')

twentyeight_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 14)
file28 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/moltres.jpg")
twentyeight_imagination.image.attach(io: file28, filename: 'moltres.jpg')

twentynine_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 1)
file29 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/painting-girl.jpg")
twentynine_imagination.image.attach(io: file29, filename: 'painting-girl.jpg')

fourth_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 2)
file4 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/parrot-school.png")
fourth_imagination.image.attach(io: file4, filename: 'parrot-school.png')

thirty_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 3)
file30 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/pen-spin.jpg")
thirty_imagination.image.attach(io: file30, filename: 'pen-spin.jpg')

thirtyfirst_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 4)
file31 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/pikachu-background.png")
thirtyfirst_imagination.image.attach(io: file31, filename: 'pikachu-background.png')

thirtyfourth_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 5)
file34 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/pikachu-garden.jpg")
thirtyfourth_imagination.image.attach(io: file34, filename: 'pikachu-garden.jpg')

thirtyfifth_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 6)
file35 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/pixel-suar.png")
thirtyfifth_imagination.image.attach(io: file35, filename: 'pixel-suar.png')

thirtysixth_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 7)
file36 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/pokeball-in-space.jpg")
thirtysixth_imagination.image.attach(io: file36, filename: 'pokeball-in-space.jpg')

thirtyseventh_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 8)
file37 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/pokeball.png")
thirtyseventh_imagination.image.attach(io: file37, filename: 'pokeball.png')

thirtyeigth_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 9)
file38 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/pretty.jpg")
thirtyeigth_imagination.image.attach(io: file38, filename: 'pretty.jpg')

thirtynine_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 10)
file39 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/purple-abstract.jpg")
thirtynine_imagination.image.attach(io: file39, filename: 'purple-abstract.jpg')

forty_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 11)
file40 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/purple-elephant.png")
forty_imagination.image.attach(io: file40, filename: 'purple-elephant.png')

fourthone_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 12)
file41 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/purple-hair.jpg")
fourthone_imagination.image.attach(io: file41, filename: 'purple-hair.jpg')

fourthtwo_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 13)
file42 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/rabbit.png")
fourthtwo_imagination.image.attach(io: file42, filename: 'rabbit.png')

fourththree_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 14)
file43 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/rainbow-car.jpg")
fourththree_imagination.image.attach(io: file43, filename: 'rainbow-car.jpg')

fourthfour_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 1)
file44 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/red-hair.jpg")
fourthfour_imagination.image.attach(io: file44, filename: 'red-hair.jpg')

fourthfive_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 2)
file45 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/vegeta.png")
fourthfive_imagination.image.attach(io: file45, filename: 'vegeta.png')

fourthsix_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 3)
file46 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/robot.png")
fourthsix_imagination.image.attach(io: file46, filename: 'robot.png')

fourthseven_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 4)
file47 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/work.png")
fourthseven_imagination.image.attach(io: file47, filename: 'work.png')

fourtheight_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 5)
file48 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/shark.png")
fourtheight_imagination.image.attach(io: file48, filename: 'shark.png')

fourthnine_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 6)
file49 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/sign.png")
fourthnine_imagination.image.attach(io: file49, filename: 'sign.png')

fifty_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 7)
file50 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/slice-of-lice.jpg")
fifty_imagination.image.attach(io: file50, filename: 'slice-of-lice.jpg')

fiftyone_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 8)
file51 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/soldier.jpg")
fiftyone_imagination.image.attach(io: file51, filename: 'soldier.jpg')

fiftytwo_imagination = Imagination.create!(title: "Pokeball Sketch", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 9)
file52 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/witch.png")
fiftytwo_imagination.image.attach(io: file52, filename: 'witch.png')




