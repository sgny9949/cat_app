class CreateCats < ActiveRecord::Migration
  def change
    create_table :cats do |t|
      t.string :title
      t.string :img_name
      t.string :url

      t.timestamps
    end
  end
end
