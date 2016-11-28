class Client
  attr_reader :first_name, :last_name
  attr_accessor :pets

  def initialize(first_name, last_name)
    @first_name = first_name
    @last_name = last_name
    @pets = []
  end

end
