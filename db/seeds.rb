# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

# Users
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
girly_friend = User.create!(username: 'girly_friend', email: "girly_friend@hotmail.com", password: "girly_friend")

# Imaginations
first_imagination = Imagination.create!(title: "First Imagination of Bulbasuar", description: "I fought long and hard to get this picture up, with the assistance of Mike.", artist_id: 1 )
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

fifth_imagination = Imagination.create!(title: "Articuno Wallpaper", description: "If you like ice and you like Pokemon, then this is what you need!", artist_id: 5)
file5 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/arctic-uno.jpg")
fifth_imagination.image.attach(io: file5, filename: 'arctic-uno.jpg')

sixth_imagination = Imagination.create!(title: "ANIME GURL", description: "I was bored and felt like drawing a fantasy-like anime girl.", artist_id: 6)
file6 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/anime-girl.png")
sixth_imagination.image.attach(io: file6, filename: 'anime-girl.png')

seventh_imagination = Imagination.create!(title: "Buzz Buzz", description: "I was thinking about how much I don't like bees, so I decided to draw a cute one hahaha", artist_id: 7)
file7 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/bee.png")
seventh_imagination.image.attach(io: file7, filename: 'bee.png')

eight_imagination = Imagination.create!(title: "PREPARE TO FIGHT!!!", description: "Black and yellow are cool colors, and this guy looks cool.", artist_id: 8)
file8 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/black-and-yellow.png")
eight_imagination.image.attach(io: file8, filename: 'black-and-yellow.png')

ninth_imagination = Imagination.create!(title: "Pikachu Silhouette with Burst Background", description: nil, artist_id: 9)
file9 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/black-pikachu.jpg")
ninth_imagination.image.attach(io: file9, filename: 'black-pikachu.jpg')

tenth_imagination = Imagination.create!(title: "I See the Sea", description: "A girl with blue hair with the beautiful, sparkling ocean in the background. All of the elements in the picture go together well.", artist_id: 10)
file10 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/blue-haired-girl.png")
tenth_imagination.image.attach(io: file10, filename: 'blue-haired-girl.png')

eleventh_imagination = Imagination.create!(title: "Eevee", description: "I just started drawing, so I'm using this platform to track my progress. I like Pokemon lol.", artist_id: 11)
file11 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/bootleg-eevee.jpg")
eleventh_imagination.image.attach(io: file11, filename: 'bootleg-eevee.jpg')

twelth_imagination = Imagination.create!(title: "Mother and Daughter", description: "I imagine that the daughter is about to go out and the mom is telling her to be safe.", artist_id: 12)
file12 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/girls.png")
twelth_imagination.image.attach(io: file12, filename: 'girls.png')

thirteenth_imagination = Imagination.create!(title: "SHHHHHH", description: "The butterfly lady is telling us all to quiet down.", artist_id: 13)
file13 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/butterfly.jpg")
thirteenth_imagination.image.attach(io: file13, filename: 'butterfly.jpg')

forteenth_imagination = Imagination.create!(title: "Caffeine Addict", description: "I'M GOING COO COO FOR COFFEE!!!", artist_id: 14)
file14 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/coffee-man.png")
forteenth_imagination.image.attach(io: file14, filename: 'coffee-man.png')

fifteenth_imagination = Imagination.create!(title: "Pikachu Just Chillin", description: "Pikachu is happy to have some coffee :)", artist_id: 1)
file15 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/coffee.png")
fifteenth_imagination.image.attach(io: file15, filename: 'coffee.png')

sixteenth_imagination = Imagination.create!(title: "Balance", description: "When I see koi fish, it reminds me of meditation, balance, and that scene from Avatar The Last Airbender.", artist_id: 2)
file16 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/koi.png")
sixteenth_imagination.image.attach(io: file16, filename: 'koi.png')

seventeenth_imagination = Imagination.create!(title: "God vs God", description: nil, artist_id: 3)
file17 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/dragonball.jpg")
seventeenth_imagination.image.attach(io: file17, filename: 'dragonball.jpg')

eighteenth_imagination = Imagination.create!(title: "Fantasy Land", description: "I was reading a fantasy book at the time, and this is what I imagine the setting looked.", artist_id: 4)
file18 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/fantasy-background.jpg")
eighteenth_imagination.image.attach(io: file18, filename: 'fantasy-background.jpg')

ninteenth_imagination = Imagination.create!(title: "Fairy's Home", description: "This is what a fairy's home would look like if they existed.", artist_id: 5)
file19 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/flower.jpg")
ninteenth_imagination.image.attach(io: file19, filename: 'flower.jpg')

twenty_imagination = Imagination.create!(title: "Life", description: "Life is like a mountain range, there are always highs and lows.", artist_id: 6)
file20 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/mountain.png")
twenty_imagination.image.attach(io: file20, filename: 'mountain.png')

twentyone_imagination = Imagination.create!(title: "I AM HERE!!!", description: "My Hero Academia is such a great anime! I know this guy doesn't look like All Might AT ALL, but I take every opportunity to reference MHA.", artist_id: 7)
file21 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/hero.png")
twentyone_imagination.image.attach(io: file21, filename: 'hero.png')

twentytwo_imagination = Imagination.create!(title: "Realistic Pokeball", description: nil, artist_id: 8)
file22 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/hi-def-pokeball.jpg")
twentytwo_imagination.image.attach(io: file22, filename: 'hi-def-pokeball.jpg')

twentythree_imagination = Imagination.create!(title: "Bunnee", description: "A battle is commencing and Bunnee must get there fast!", artist_id: 9)
file23 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/rabit.png")
twentythree_imagination.image.attach(io: file23, filename: 'rabit.png')

twentyfourth_imagination = Imagination.create!(title: "I love you", description: nil, artist_id: 10)
file24 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/hijab.png")
twentyfourth_imagination.image.attach(io: file24, filename: 'hijab.png')

twentyfifth_imagination = Imagination.create!(title: "Kat-kashi Hatake", description: "Kakashi with a cat, and colorful.", artist_id: 11)
file25 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/kakashi.jpg")
twentyfifth_imagination.image.attach(io: file25, filename: 'kakashi.jpg')

twentysixth_imagination = Imagination.create!(title: "Last Supper", description: "Such an iconic picture.", artist_id: 12)
file26 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/last-supper.png")
twentysixth_imagination.image.attach(io: file26, filename: 'last-supper.png')

twentyseventh_imagination = Imagination.create!(title: "Lilac in the Summer", description: "Whenever I go hiking, I always bring my good camera. It was such a beautiful day, and I love these flowers. I thought that I would share a little bit of my hiking experience with you all by posting this picture", artist_id: 13)
file27 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/lilac.jpg")
twentyseventh_imagination.image.attach(io: file27, filename: 'lilac.jpg')

twentyeight_imagination = Imagination.create!(title: "Moltres Background", description: "My least favorite of the three legendary birds, Moltres.", artist_id: 14)
file28 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/moltres.jpg")
twentyeight_imagination.image.attach(io: file28, filename: 'moltres.jpg')

twentynine_imagination = Imagination.create!(title: "Painted Lady", description: "Painting is not my strong suit, but I do it from time to time. I personally prefer digital art, but there are many techniques and skills that I pick up on by painting.", artist_id: 1)
file29 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/painting-girl.jpg")
twentynine_imagination.image.attach(io: file29, filename: 'painting-girl.jpg')

between29and30_imagination = Imagination.create!(title: "Ch-Ch-Ch-Chatot", description: "Chatot is Pokemon based off of a parrot. He is related to music and has some sound-based moves. They are pretty cool!", artist_id: 2)
file2930 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/parrot-school.png")
between29and30_imagination.image.attach(io: file2930, filename: 'parrot-school.png')

thirty_imagination = Imagination.create!(title: "Look What I can do!", description: "He looks like he is showing off his pen spinning skills to the camera hahaha. I would do that too, but I don't know how to spin a pen like that :(", artist_id: 3)
file30 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/pen-spin.jpg")
thirty_imagination.image.attach(io: file30, filename: 'pen-spin.jpg')

thirtyfirst_imagination = Imagination.create!(title: "Pika Pika", description: nil, artist_id: 4)
file31 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/pikachu-background.png")
thirtyfirst_imagination.image.attach(io: file31, filename: 'pikachu-background.png')

thirtyfourth_imagination = Imagination.create!(title: "There's a Pikachu in my Garden", description: "What an exciting day to find a find a Pikachu just wandering around my garden.", artist_id: 5)
file34 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/pikachu-garden.jpg")
thirtyfourth_imagination.image.attach(io: file34, filename: 'pikachu-garden.jpg')

thirtyfifth_imagination = Imagination.create!(title: "Pixel-suar", description: "I love video games. I'm going to make my own games and have a big game company in the future. Pixel art like this always reminds me how bright my future looks.", artist_id: 6)
file35 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/pixel-suar.png")
thirtyfifth_imagination.image.attach(io: file35, filename: 'pixel-suar.png')

thirtysixth_imagination = Imagination.create!(title: "The World of Pokemon", description: "What if there was a planet that was just one gigantic pokeball? That would be crazy!!!", artist_id: 7)
file36 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/pokeball-in-space.jpg")
thirtysixth_imagination.image.attach(io: file36, filename: 'pokeball-in-space.jpg')

thirtyseventh_imagination = Imagination.create!(title: "Pokeball", description: "It's a basic pokeball, but looks kind of realistic.", artist_id: 8)
file37 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/pokeball.png")
thirtyseventh_imagination.image.attach(io: file37, filename: 'pokeball.png')

thirtyeigth_imagination = Imagination.create!(title: "* Reach for the Stars *", description: nil, artist_id: 9)
file38 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/pretty.jpg")
thirtyeigth_imagination.image.attach(io: file38, filename: 'pretty.jpg')

thirtynine_imagination = Imagination.create!(title: "Purple", description: "Purple is my favorite color.", artist_id: 10)
file39 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/purple-abstract.jpg")
thirtynine_imagination.image.attach(io: file39, filename: 'purple-abstract.jpg')

forty_imagination = Imagination.create!(title: "Purple Elephant", description: "I like elephants, and I like purple, so I made a purple elephant", artist_id: 11)
file40 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/purple-elephant.png")
forty_imagination.image.attach(io: file40, filename: 'purple-elephant.png')

fourthone_imagination = Imagination.create!(title: "SSJ Purple", description: "Really wish that there was a purple super saiyan transformation. That would be cool.", artist_id: 12)
file41 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/purple-hair.jpg")
fourthone_imagination.image.attach(io: file41, filename: 'purple-hair.jpg')

fourthtwo_imagination = Imagination.create!(title: "Mirko's Poster", description: "Mirko is a character from MHA that is based off of a rabit. This poster was dedicated to her.", artist_id: 13)
file42 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/rabbit.png")
fourthtwo_imagination.image.attach(io: file42, filename: 'rabbit.png')

fourththree_imagination = Imagination.create!(title: "Tetris Taxis", description: "Tetris is a colorful game, and there are taxis in this illustration.", artist_id: 14)
file43 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/rainbow-car.jpg")
fourththree_imagination.image.attach(io: file43, filename: 'rainbow-car.jpg')

fourthfour_imagination = Imagination.create!(title: "Ten and Ren", description: "Ten and Ren, two DJs ready to take the stage and get the concert energized!", artist_id: 1)
file44 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/red-hair.jpg")
fourthfour_imagination.image.attach(io: file44, filename: 'red-hair.jpg')

fourthfive_imagination = Imagination.create!(title: "Prince of all Saiyans", description: "Prince Vegeta is the most prideful warrior that Universe 7 has to offer.", artist_id: 2)
file45 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/vegeta.png")
fourthfive_imagination.image.attach(io: file45, filename: 'vegeta.png')

fourthsix_imagination = Imagination.create!(title: "MedBot", description: "This is what doctors are going to look like in the future, androids/robots.", artist_id: 3)
file46 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/robot.png")
fourthsix_imagination.image.attach(io: file46, filename: 'robot.png')

fourthseven_imagination = Imagination.create!(title: "Progress", description: "We are all working hard to achieve our goals. Even though we are at home all day, we are getting things done and progressing forward.", artist_id: 4)
file47 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/work.png")
fourthseven_imagination.image.attach(io: file47, filename: 'work.png')

fourtheight_imagination = Imagination.create!(title: "Sharpedo", description: "Sharpedo is a water and dark type pokemon based off of a shark and a torpedo. Shapedo has a mega evolution as well.", artist_id: 5)
file48 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/shark.png")
fourtheight_imagination.image.attach(io: file48, filename: 'shark.png')

fourthnine_imagination = Imagination.create!(title: "Be Careful of Cute Pokemon", description: "The cute pokemon are always the most deadly. Be aware of the cute pokemon hahaha.", artist_id: 6)
file49 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/sign.png")
fourthnine_imagination.image.attach(io: file49, filename: 'sign.png')

fifty_imagination = Imagination.create!(title: "Lil Sis and Big Bro", description: "I messed up on a pokeball sketch, which led to this. I hope you like it :D", artist_id: 7)
file50 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/slice-of-lice.jpg")
fifty_imagination.image.attach(io: file50, filename: 'slice-of-lice.jpg')

fiftyone_imagination = Imagination.create!(title: "Mario's Dad in a Suit of Armor", description: "Mario, Luigi, who is this scary, big, spiky turtle that spits flames? He caught me by surprise.", artist_id: 8)
file51 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/soldier.jpg")
fiftyone_imagination.image.attach(io: file51, filename: 'soldier.jpg')

fiftytwo_imagination = Imagination.create!(title: "Witch", description: "Witches are usually ugly and spooky, so I made this one friendly and cute.", artist_id: 9)
file52 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/witch.png")
fiftytwo_imagination.image.attach(io: file52, filename: 'witch.png')

fiftysecond_imagination = Imagination.create!(title: "Daily Drug", description: "A very beautiful girl is in love with coffee hahaha :D", artist_id: 15)
file53 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/megans-coffee.jpg")
fiftysecond_imagination.image.attach(io: file53, filename: 'megans-coffee.jpg')

fiftythird_imagination = Imagination.create!(title: "Summer Time", description: "Brights up my life like it's summer time all the time <3", artist_id: 15)
file54 = open("https://smearglesheart-seeds.s3-us-west-1.amazonaws.com/Smeargles-Heart/megans-flowers.jpg")
fiftythird_imagination.image.attach(io: file54, filename: 'megans-flowers.jpg')


# Likes 
like1 = Like.create!(user_id: 1, imagination_id: 1)
like2 = Like.create!(user_id: 1, imagination_id: 2)
like3 = Like.create!(user_id: 1, imagination_id: 3)
like4 = Like.create!(user_id: 1, imagination_id: 4)
like5 = Like.create!(user_id: 1, imagination_id: 5)
like6 = Like.create!(user_id: 1, imagination_id: 6)
like7 = Like.create!(user_id: 1, imagination_id: 7)
like8 = Like.create!(user_id: 1, imagination_id: 8)
like9 = Like.create!(user_id: 1, imagination_id: 9)
like10 = Like.create!(user_id: 1, imagination_id: 10)
like11 = Like.create!(user_id: 1, imagination_id: 11)
like12 = Like.create!(user_id: 1, imagination_id: 12)
like13 = Like.create!(user_id: 1, imagination_id: 13)
like14 = Like.create!(user_id: 1, imagination_id: 14)
like15 = Like.create!(user_id: 1, imagination_id: 15)
like16 = Like.create!(user_id: 1, imagination_id: 16)
like17 = Like.create!(user_id: 1, imagination_id: 17)
like18 = Like.create!(user_id: 2, imagination_id: 18)
like19 = Like.create!(user_id: 2, imagination_id: 19)
like20 = Like.create!(user_id: 2, imagination_id: 20)
like21 = Like.create!(user_id: 2, imagination_id: 21)
like22 = Like.create!(user_id: 2, imagination_id: 22)
like23 = Like.create!(user_id: 2, imagination_id: 23)
like24 = Like.create!(user_id: 2, imagination_id: 24)
like25 = Like.create!(user_id: 2, imagination_id: 25)
like26 = Like.create!(user_id: 2, imagination_id: 26)
like27 = Like.create!(user_id: 2, imagination_id: 27)
like28 = Like.create!(user_id: 2, imagination_id: 28)
like29 = Like.create!(user_id: 2, imagination_id: 29)
like30 = Like.create!(user_id: 2, imagination_id: 30)
like31 = Like.create!(user_id: 2, imagination_id: 31)
like32 = Like.create!(user_id: 2, imagination_id: 32)
like33 = Like.create!(user_id: 2, imagination_id: 33)
like34 = Like.create!(user_id: 2, imagination_id: 34)
like35 = Like.create!(user_id: 3, imagination_id: 35)
like36 = Like.create!(user_id: 3, imagination_id: 36)
like37 = Like.create!(user_id: 3, imagination_id: 37)
like38 = Like.create!(user_id: 3, imagination_id: 38)
like39 = Like.create!(user_id: 3, imagination_id: 39)
like40 = Like.create!(user_id: 3, imagination_id: 40)
like41 = Like.create!(user_id: 3, imagination_id: 41)
like42 = Like.create!(user_id: 3, imagination_id: 42)
like43 = Like.create!(user_id: 3, imagination_id: 43)
like44 = Like.create!(user_id: 3, imagination_id: 44)
like45 = Like.create!(user_id: 3, imagination_id: 45)
like46 = Like.create!(user_id: 3, imagination_id: 46)
like47 = Like.create!(user_id: 3, imagination_id: 47)
like48 = Like.create!(user_id: 3, imagination_id: 48)
like49 = Like.create!(user_id: 3, imagination_id: 49)
like50 = Like.create!(user_id: 3, imagination_id: 50)
like51 = Like.create!(user_id: 4, imagination_id: 51)
like52 = Like.create!(user_id: 4, imagination_id: 1)
like53 = Like.create!(user_id: 4, imagination_id: 2)
like54 = Like.create!(user_id: 4, imagination_id: 3)
like55 = Like.create!(user_id: 4, imagination_id: 4)
like56 = Like.create!(user_id: 4, imagination_id: 5)
like57 = Like.create!(user_id: 4, imagination_id: 6)
like58 = Like.create!(user_id: 4, imagination_id: 7)
like59 = Like.create!(user_id: 4, imagination_id: 8)
like60 = Like.create!(user_id: 4, imagination_id: 9)
like61 = Like.create!(user_id: 4, imagination_id: 10)
like62 = Like.create!(user_id: 4, imagination_id: 11)
like63 = Like.create!(user_id: 4, imagination_id: 12)
like64 = Like.create!(user_id: 4, imagination_id: 13)
like65 = Like.create!(user_id: 4, imagination_id: 14)
like66 = Like.create!(user_id: 4, imagination_id: 15)
like67 = Like.create!(user_id: 5, imagination_id: 16)
like68 = Like.create!(user_id: 5, imagination_id: 17)
like69 = Like.create!(user_id: 5, imagination_id: 18)
like70 = Like.create!(user_id: 5, imagination_id: 19)
like71 = Like.create!(user_id: 5, imagination_id: 20)
like72 = Like.create!(user_id: 5, imagination_id: 21)
like73 = Like.create!(user_id: 5, imagination_id: 22)
like74 = Like.create!(user_id: 5, imagination_id: 23)
like75 = Like.create!(user_id: 5, imagination_id: 24)
like76 = Like.create!(user_id: 5, imagination_id: 25)
like77 = Like.create!(user_id: 5, imagination_id: 26)
like78 = Like.create!(user_id: 5, imagination_id: 27)
like79 = Like.create!(user_id: 5, imagination_id: 28)
like80 = Like.create!(user_id: 5, imagination_id: 29)
like81 = Like.create!(user_id: 5, imagination_id: 30)
like82 = Like.create!(user_id: 5, imagination_id: 31)
like83 = Like.create!(user_id: 6, imagination_id: 32)
like84 = Like.create!(user_id: 6, imagination_id: 33)
like85 = Like.create!(user_id: 6, imagination_id: 34)
like86 = Like.create!(user_id: 6, imagination_id: 35)
like87 = Like.create!(user_id: 6, imagination_id: 36)
like88 = Like.create!(user_id: 6, imagination_id: 37)
like89 = Like.create!(user_id: 6, imagination_id: 38)
like90 = Like.create!(user_id: 6, imagination_id: 39)
like91 = Like.create!(user_id: 6, imagination_id: 40)
like92 = Like.create!(user_id: 6, imagination_id: 41)
like93 = Like.create!(user_id: 6, imagination_id: 42)
like94 = Like.create!(user_id: 6, imagination_id: 43)
like95 = Like.create!(user_id: 6, imagination_id: 44)
like96 = Like.create!(user_id: 6, imagination_id: 45)
like97 = Like.create!(user_id: 6, imagination_id: 46)
like98 = Like.create!(user_id: 7, imagination_id: 47)
like99 = Like.create!(user_id: 7, imagination_id: 48)
like100 = Like.create!(user_id: 7, imagination_id: 49)
like101 = Like.create!(user_id: 7, imagination_id: 50)
like102 = Like.create!(user_id: 7, imagination_id: 51)
like103 = Like.create!(user_id: 7, imagination_id: 1)
like104 = Like.create!(user_id: 7, imagination_id: 2)
like105 = Like.create!(user_id: 7, imagination_id: 3)
like106 = Like.create!(user_id: 7, imagination_id: 4)
like107 = Like.create!(user_id: 7, imagination_id: 5)
like108 = Like.create!(user_id: 7, imagination_id: 6)
like109 = Like.create!(user_id: 7, imagination_id: 7)
like110 = Like.create!(user_id: 7, imagination_id: 8)
like111 = Like.create!(user_id: 7, imagination_id: 9)
like112 = Like.create!(user_id: 7, imagination_id: 10)
like113 = Like.create!(user_id: 7, imagination_id: 11)
like114 = Like.create!(user_id: 7, imagination_id: 12)
like115 = Like.create!(user_id: 7, imagination_id: 13)
like116 = Like.create!(user_id: 7, imagination_id: 14)
like117 = Like.create!(user_id: 8, imagination_id: 15)
like118 = Like.create!(user_id: 8, imagination_id: 16)
like119 = Like.create!(user_id: 8, imagination_id: 17)
like120 = Like.create!(user_id: 8, imagination_id: 18)
like121 = Like.create!(user_id: 8, imagination_id: 19)
like122 = Like.create!(user_id: 8, imagination_id: 20)
like123 = Like.create!(user_id: 8, imagination_id: 21)
like124 = Like.create!(user_id: 8, imagination_id: 22)
like125 = Like.create!(user_id: 8, imagination_id: 23)
like126 = Like.create!(user_id: 8, imagination_id: 24)
like127 = Like.create!(user_id: 8, imagination_id: 25)
like128 = Like.create!(user_id: 8, imagination_id: 26)
like129 = Like.create!(user_id: 8, imagination_id: 27)
like130 = Like.create!(user_id: 8, imagination_id: 28)
like131 = Like.create!(user_id: 9, imagination_id: 29)
like132 = Like.create!(user_id: 9, imagination_id: 30)
like133 = Like.create!(user_id: 9, imagination_id: 31)
like134 = Like.create!(user_id: 9, imagination_id: 32)
like135 = Like.create!(user_id: 9, imagination_id: 33)
like136 = Like.create!(user_id: 9, imagination_id: 34)
like137 = Like.create!(user_id: 9, imagination_id: 35)
like138 = Like.create!(user_id: 9, imagination_id: 36)
like139 = Like.create!(user_id: 9, imagination_id: 37)
like140 = Like.create!(user_id: 9, imagination_id: 38)
like141 = Like.create!(user_id: 9, imagination_id: 39)
like142 = Like.create!(user_id: 9, imagination_id: 40)
like143 = Like.create!(user_id: 9, imagination_id: 41)
like144 = Like.create!(user_id: 9, imagination_id: 42)
like145 = Like.create!(user_id: 9, imagination_id: 43)
like146 = Like.create!(user_id: 9, imagination_id: 44)
like147 = Like.create!(user_id: 10, imagination_id: 45)
like148 = Like.create!(user_id: 10, imagination_id: 46)
like149 = Like.create!(user_id: 10, imagination_id: 47)
like150 = Like.create!(user_id: 10, imagination_id: 48)
like151 = Like.create!(user_id: 10, imagination_id: 49)
like152 = Like.create!(user_id: 10, imagination_id: 50)
like153 = Like.create!(user_id: 10, imagination_id: 51)
like154 = Like.create!(user_id: 10, imagination_id: 1)
like155 = Like.create!(user_id: 10, imagination_id: 2)
like156 = Like.create!(user_id: 10, imagination_id: 3)
like157 = Like.create!(user_id: 11, imagination_id: 4)
like158 = Like.create!(user_id: 11, imagination_id: 5)
like159 = Like.create!(user_id: 11, imagination_id: 6)
like160 = Like.create!(user_id: 11, imagination_id: 7)
like161 = Like.create!(user_id: 11, imagination_id: 8)
like162 = Like.create!(user_id: 11, imagination_id: 9)
like163 = Like.create!(user_id: 11, imagination_id: 10)
like164 = Like.create!(user_id: 11, imagination_id: 11)
like165 = Like.create!(user_id: 11, imagination_id: 12)
like166 = Like.create!(user_id: 11, imagination_id: 13)
like167 = Like.create!(user_id: 12, imagination_id: 14)
like168 = Like.create!(user_id: 12, imagination_id: 15)
like169 = Like.create!(user_id: 12, imagination_id: 16)
like170 = Like.create!(user_id: 12, imagination_id: 17)
like171 = Like.create!(user_id: 12, imagination_id: 18)
like172 = Like.create!(user_id: 12, imagination_id: 19)
like173 = Like.create!(user_id: 12, imagination_id: 20)
like174 = Like.create!(user_id: 12, imagination_id: 21)
like175 = Like.create!(user_id: 12, imagination_id: 22)
like176 = Like.create!(user_id: 12, imagination_id: 23)
like177 = Like.create!(user_id: 12, imagination_id: 24)
like178 = Like.create!(user_id: 13, imagination_id: 25)
like179 = Like.create!(user_id: 13, imagination_id: 26)
like180 = Like.create!(user_id: 13, imagination_id: 27)
like181 = Like.create!(user_id: 13, imagination_id: 28)
like182 = Like.create!(user_id: 13, imagination_id: 29)
like183 = Like.create!(user_id: 13, imagination_id: 30)
like184 = Like.create!(user_id: 13, imagination_id: 31)
like185 = Like.create!(user_id: 13, imagination_id: 32)
like186 = Like.create!(user_id: 13, imagination_id: 33)
like187 = Like.create!(user_id: 13, imagination_id: 34)
like188 = Like.create!(user_id: 14, imagination_id: 35)
like189 = Like.create!(user_id: 14, imagination_id: 36)
like190 = Like.create!(user_id: 14, imagination_id: 37)
like191 = Like.create!(user_id: 14, imagination_id: 38)
like192 = Like.create!(user_id: 14, imagination_id: 39)
like193 = Like.create!(user_id: 14, imagination_id: 40)
like194 = Like.create!(user_id: 14, imagination_id: 41)
like195 = Like.create!(user_id: 14, imagination_id: 42)
like196 = Like.create!(user_id: 14, imagination_id: 43)
like197 = Like.create!(user_id: 14, imagination_id: 44)
like198 = Like.create!(user_id: 14, imagination_id: 45)
like199 = Like.create!(user_id: 14, imagination_id: 46)
like200 = Like.create!(user_id: 14, imagination_id: 47)

like201 = Like.create!(user_id: 1, imagination_id: 52)
like202 = Like.create!(user_id: 2, imagination_id: 52)
like203 = Like.create!(user_id: 3, imagination_id: 52)
like204 = Like.create!(user_id: 4, imagination_id: 52)
like205 = Like.create!(user_id: 5, imagination_id: 52)
like206 = Like.create!(user_id: 6, imagination_id: 52)
like207 = Like.create!(user_id: 7, imagination_id: 52)
like208 = Like.create!(user_id: 8, imagination_id: 52)
like209 = Like.create!(user_id: 9, imagination_id: 52)
like210 = Like.create!(user_id: 10, imagination_id: 52)
like211 = Like.create!(user_id: 11, imagination_id: 52)
like212 = Like.create!(user_id: 12, imagination_id: 52)
like213 = Like.create!(user_id: 13, imagination_id: 52)
like214 = Like.create!(user_id: 14, imagination_id: 52)
like215 = Like.create!(user_id: 1, imagination_id: 53)
like216 = Like.create!(user_id: 2, imagination_id: 53)
like217 = Like.create!(user_id: 3, imagination_id: 53)
like218 = Like.create!(user_id: 4, imagination_id: 53)
like219 = Like.create!(user_id: 5, imagination_id: 53)
like220 = Like.create!(user_id: 6, imagination_id: 53)
like221 = Like.create!(user_id: 7, imagination_id: 53)
like222 = Like.create!(user_id: 8, imagination_id: 53)
like223 = Like.create!(user_id: 9, imagination_id: 53)
like224 = Like.create!(user_id: 10, imagination_id: 53)
like225 = Like.create!(user_id: 11, imagination_id: 53)
like226 = Like.create!(user_id: 12, imagination_id: 53)
like227 = Like.create!(user_id: 13, imagination_id: 53)
like228 = Like.create!(user_id: 14, imagination_id: 53)


# Comments
# comment1
# comment2
# comment3
# comment4
# comment5
# comment6
# comment7
# comment8
# comment9
# comment10
# comment11
# comment12
# comment13
# comment14
# comment15
# comment16
# comment17
# comment18
# comment19
# comment20
# comment21
# comment22
# comment23
# comment24
# comment25
# comment26
# comment27
# comment28
# comment29
# comment30
# comment31
# comment32
# comment33
# comment34
# comment35
# comment36
# comment37
# comment38
# comment39
# comment40
# comment41
# comment42
# comment43
# comment44
# comment45
# comment46
# comment47
# comment48
# comment49
# comment50
# comment51
# comment52
# comment53
# comment54
# comment55
# comment56
# comment57
# comment58
# comment59
# comment60
# comment61
# comment62
# comment63
# comment64
# comment65
# comment66
# comment67
# comment68
# comment69
# comment70
# comment71
# comment72
# comment73
# comment74
# comment75
# comment76
# comment77
# comment78
# comment79
# comment80
# comment81
# comment82
# comment83
# comment84
# comment85
# comment86
# comment87
# comment88
# comment89
# comment90
# comment91
# comment92
# comment93
# comment94
# comment95
# comment96
# comment97
# comment98
# comment99
# comment100
# comment101
# comment102
# comment103
# comment104
# comment105
# comment106
# comment107
# comment108
# comment109
# comment110
# comment111
# comment112
# comment113
# comment114
# comment115
# comment116
# comment117
# comment118
# comment119
# comment120
# comment121
# comment122
# comment123
# comment124
# comment125

