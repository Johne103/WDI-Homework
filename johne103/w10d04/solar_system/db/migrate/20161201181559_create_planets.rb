class CreatePlanets < ActiveRecord::Migration[5.0]
  def change
    create_table :planets do |t|
      t.string :name
      t.string :image
      t.text :description
      t.float :radius
      t.integer :daylength
      t.float :mass
      t.float :gravity
      t.float :surfacearea
      t.integer :numberofmoons
      t.string :moons

      t.timestamps
    end
  end
end
