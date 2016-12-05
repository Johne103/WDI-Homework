class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.string :image
      t.string :if_free
      t.float :original_price
      t.float :price
      t.float :savings
      t.float :percent_discount
      t.string :category

      t.timestamps
    end
  end
end
