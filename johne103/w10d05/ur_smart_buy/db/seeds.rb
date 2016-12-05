# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.connection.execute("TRUNCATE products RESTART IDENTITY")

Product.create!([{
    name: "Holiday to Jamaica",
    description: "Idealic get away to sunny enchanting tropical island",
    image: "MBJ",
    if_free: "no",
    original_price: 2000.00,
    price: 1500.00,
    savings: 500.00,
    percent_discount: 25.0,
    category: "Travel"
}])
