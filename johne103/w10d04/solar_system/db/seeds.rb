# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.connection.execute("TRUNCATE planets RESTART IDENTITY")

Planet.create!([{
  name: "Earth",
  description: "Earth is the third planet from the Sun, the densest planet in the Solar System, the largest of the Solar System's four terrestrial planets, and the only astronomical object known to harbor life.",
  radius: "6371",
  daylength: 24.0,
  mass: 5.97,
  gravity: 9.1,
  surfacearea: 510.1,
  numberofmoons: 1,
  moons: "Moon",
  image: "http://solarviews.com/raw/earth/earthafr.jpg"
}])
