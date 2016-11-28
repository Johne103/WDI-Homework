require_relative "../models/pig_latin"


get "/" do
  erb :home
end

get "/about" do
  erb :about
end

post "/translation" do
  @translation = PigLatin.translate(params[:words])
  erb :translation
end
