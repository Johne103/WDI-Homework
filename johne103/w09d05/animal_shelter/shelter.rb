class Shelter
  attr_reader :name
  attr_accessor :animals_in_shelter, :capacity

  def initialize(name)
    @name = name
    @animals_in_shelter = []
    @capacity = capacity
  end

  def add_animal(animal)
    @animals_in_shelter << animal
  end

end
