require_relative "animal"
require_relative "client"
require_relative "shelter"

puts "What is the name of the shelter?"
name = gets.chomp
puts "How many animals can be held in the shelter?"
capacity = gets.to_i

@shelter = Shelter.new name

new_animal = "y"

puts "Do you wish to add a new animal to the shelter? y/n"
new_animal = gets.chomp
while new_animal == "y"
  puts "Please enter the name of the animal"
  name = gets.chomp
  puts "Please enter the breed of the animal"
  breed = gets.chomp
  puts "Please enter the gender of the animal"
  gender = gets.chomp

  new_animal = Animal.new name, breed, gender
  @shelter.add_animal new_animal
  puts @shelter.animals_in_shelter
  # gets

  puts "Do you have favourite toys to add? y/n"
  add_toys = "y"
  add_toys = gets.chomp
  while add_toys == "y"
    puts "Describe the toy"
    favourite_toys = gets.chomp
    puts favourite_toys
    puts "Do you wish to add another toy? y/n"
    add_toys = gets.chomp
  end


  puts "Do you wish to add a new animal to the shelter? y/n"
  new_animal = gets.chomp
end




def menu
  puts `clear`
  puts "*** Welcome to the #{@shelter.name} ***\n\n"
  puts "1 : List of all animals in the shelter"
  puts "2 : List of all registered clients"
  puts "3 : Give an animal to a shelter"
  puts "4 : Adopt an animal from the shelter"
  puts "Q : Quit\n\n"
  print "-->"
  gets.chomp
end

def list_animals(shelter)
  shelter.animals.each_with_index do |animal, index|
    puts "#{index}.\t#{animal}"
  end
end

response = menu

until response.upcase =="Q"
  case response
  when "1"
    puts @shelter.animals_in_shelter
    
    gets
  when "2"
    puts "List of all registered clients"
    gets
  when "3"
    puts "Give an animal to a shelter"
    gets
  when "4"
    puts "Adopt an animal from thes shelter"
    gets
  end

  response = menu
end
