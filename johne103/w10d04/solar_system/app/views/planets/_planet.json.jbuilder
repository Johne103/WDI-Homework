json.extract! planet, :id, :name, :image, :description, :radius, :daylength, :mass, :gravity, :surfacearea, :numberofmoons, :moons, :created_at, :updated_at
json.url planet_url(planet, format: :json)