class Continent < ApplicationRecord
  belongs_to :country
  has_many :countries, -> { uniq }, through: :continents
end
