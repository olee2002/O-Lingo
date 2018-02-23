class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :img_url
      t.string :firstname
      t.string :lastname

      t.timestamps
    end
  end
end
