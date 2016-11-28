class Animal
  attr_reader :name, :breed, :gender
  attr_accessor :favourite_toys

  def initialize(name, breed, gender)
    @name = name
    @breed = breed
    @gender = gender
    @favourite_toys = []
  end

  def to_s
    "Name: #{@name} breed: #{@breed} gender: #{@gender}"
  end

end
